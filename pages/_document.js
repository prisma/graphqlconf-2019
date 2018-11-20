import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import { GA_TRACKING_ID } from '../shared/gtag'

import modernNormalize from '../utils/modern-normalize'

injectGlobal`
  ${modernNormalize};

  body, html, [data-reactroot] { 
    padding: 0;
    background: black !important;
  }

  * { 
    color: white;
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src:  url('/static/fonts/SpaceGrotesk-Regular.woff2') format('woff2'),
          url('/static/fonts/SpaceGrotesk-Regular.woff') format('woff');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src:  url('/static/fonts/SpaceGrotesk-Bold.woff2') format('woff2'),
          url('/static/fonts/SpaceGrotesk-Bold.woff') format('woff');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src:  url('/static/fonts/SpaceGrotesk-Light.woff2') format('woff2'),
          url('/static/fonts/SpaceGrotesk-Light.woff') format('woff');
    font-weight: 300;
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@thegraphqlconf" />
          <meta name="twitter:title" content="GraphQL Conf 2019" />
          <meta
            name="twitter:description"
            content="Bringing together the global GraphQL community. Join us on June 20-21, 2019 in Berlin."
          />
          <meta
            name="twitter:image"
            content="https://graphqlconf.org/static/social-banner-square.jpg"
          />
          <meta
            name="google-site-verification"
            content="9MtIA-WiOqQ43uGG66kThpnwTQ4z10oIaGH3r1WkJDA"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site" content="@thegraphqlconf" />
          <meta property="og:title" content="GraphQL Conf 2019" />
          <meta
            property="og:description"
            content="Bringing together the global GraphQL community. GraphQL Conf is a non-profit GraphQL conference. Join us June 20-21, 2019 in Berlin."
          />
          <meta
            property="og:image"
            content="https://graphqlconf.org/static/social-banner-rectangle.jpg"
          />
          <meta
            property="og:image:url"
            content="https://graphqlconf.org/static/social-banner-rectangle.jpg"
          />

          <meta
            name="description"
            content="Bringing together the global GraphQL community. GraphQL Conf is a non-profit GraphQL conference. Join us June 20-21, 2019 in Berlin."
          />
          <meta
            name="keywords"
            content="GraphQL,2019,conference,Europe,Berlin"
          />
          <meta property="og:url" content="https://graphqlconf.org/" />
          <link rel="canonical" href="https://graphqlconf.org/" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/favicons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/favicons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/favicons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/favicons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/favicons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/favicons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/favicons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/favicons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png?v=4"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta
            name="msapplication-TileImage"
            content="/static/favicons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#000" />

          <link rel="stylesheet" href="https://use.typekit.net/rtg1xpk.css" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
