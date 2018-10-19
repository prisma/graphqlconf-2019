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

export class Subscribe extends React.Component {
  state = { email: '', msg: null, success: null, loading: false }

  render() {
    return (
      <Container>
        {this.state.success && (
          <SizeMe refreshRate={400} monitorHeight={true}>
            {({ size }) => (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100%'
                }}
              >
                <Confetti run={true} width={size.width} height={size.height} />
              </div>
            )}
          </SizeMe>
        )}

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

          <Form onSubmit={this.submitted}>
            <Input
              type="email"
              required={true}
              placeholder="Add your email"
              value={this.state.email}
              onChange={e =>
                this.setState({ email: e.currentTarget.value, msg: '' })
              }
            />
            <Button type="submit" disabled={this.state.loading}>
              Submit
            </Button>
            {(this.state.msg || this.state.loading) && (
              <Message>
                {this.state.loading ? 'Adding...' : this.state.msg}
              </Message>
            )}
          </Form>
        </Wrapper>
      </Container>
    )
  }

  submitted = e => {
    e.preventDefault()

    if (this.state.loading) return

    const apiUrl =
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000`
        : `https://graphqlconf-newsletter.now.sh`

    this.setState({ loading: true })
    fetch(apiUrl, {
      method: 'post',
      body: JSON.stringify({
        email: this.state.email
      })
    })
      .then(res => {
        if (!res.ok) throw res
        this.setState({
          msg: `We added you to the list!`,
          success: true,
          email: '',
          loading: false
        })
        window.setTimeout(() => {
          this.setState({ success: null })
        }, 9000)
      })
      .catch(async err => {
        let msg

        const text = (err.text && (await err.text())) || ''
        if (err.message) {
          msg = `There was an error: ${err}`
        } else if (text.includes('already_added')) {
          msg = `Seems like you're already on the list!`
        } else {
          msg = `Please enter a valid email!`
        }

        this.setState({ msg, success: false, loading: false })
      })

    return false
  }
}
