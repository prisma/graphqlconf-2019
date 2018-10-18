import React from 'react'
import Confetti from 'react-confetti'
import { SizeMe } from 'react-sizeme'

import { Container } from '../../shared/Container'
import {
  Wrapper,
  Left,
  Desc,
  Form,
  Input,
  Button,
  Message,
  ExapndingText
} from './style'

export const Subscribe = () => {
  return (
    <Container>
      {/* <SizeMe refreshRate={400} monitorHeight={true}>
        {({ size }) => (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <Confetti run={true} width={size.width} height={size.height} />
          </div>
        )}
      </SizeMe> */}

      <Wrapper>
        <Left>
          <Desc>
            <div>
              <strong>
                Stay in the <ExapndingText>loop</ExapndingText>
              </strong>
            </div>
            <div>it’s all about GraphQL Conf</div>
          </Desc>
        </Left>

        <Form>
          <Input placeholder="Add your email" />
          <Button type="submit">Submit</Button>
          <Message>We added you!</Message>
        </Form>
      </Wrapper>
    </Container>
  )
}
