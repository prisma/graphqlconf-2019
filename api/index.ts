require('now-env')
import { prisma } from './generated/prisma'
import { IncomingMessage, ServerResponse } from 'http'
import { json, sendError, send } from 'micro'

function isOriginAllowed(
  origin: string | string[],
  allowedOrigin: (string | RegExp)[] | string | RegExp
) {
  if (Array.isArray(allowedOrigin)) {
    for (var i = 0; i < allowedOrigin.length; ++i) {
      if (isOriginAllowed(origin, allowedOrigin[i])) {
        return true
      }
    }
    return false
  } else if (typeof allowedOrigin === 'string') {
    return origin === allowedOrigin
  } else if (allowedOrigin instanceof RegExp) {
    return allowedOrigin.test(String(origin))
  } else {
    return !!allowedOrigin
  }
}
const allowOrigin = (next: Function) => (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const requestOrigin = req.headers.origin

  const isAllowed = isOriginAllowed(
    requestOrigin,
    process.env.NODE_ENV === 'production'
      ? ['https://graphqlconf.org', /\.graphqlconf\.org$/]
      : [/localhost/]
  )

  // reflect origin
  res.setHeader('Access-Control-Allow-Origin', isAllowed ? requestOrigin : '')
  res.setHeader('Vary', 'Origin')

  return next(req, res)
}

type Data = { email: undefined | string } | null | undefined

// A `main` function so that we can use async/await
export default allowOrigin(
  async (req: IncomingMessage, res: ServerResponse) => {
    // @ts-ignore
    const data: Data = await json(req)

    if (
      !data ||
      !data.email ||
      typeof data.email !== 'string' ||
      !data.email.includes('@')
    ) {
      return sendError(req, res, {
        statusCode: 400,
        message: 'Invalid or no email.'
      })
    }

    try {
      const newUser = await prisma.createSubscriber({
        email: data.email
      })
      console.log(`Created new user: ${newUser.email} (ID: ${newUser.id})`)
      return send(res, 200, 'added')
      // added
    } catch (err) {
      return sendError(req, res, {
        statusCode: 400,
        message: 'already_added'
      })
    }
  }
)
