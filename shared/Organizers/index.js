import React from 'react'
import ReactImage from 'react-image'

// Local
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { X } from '../../shared/vectors/X'
import { Wrapper, LogoWrapper, XWrapper } from './style'

export const Organizers = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper
          href="https://honeypot.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactImage src="/static/honeypot.svg" />
        </LogoWrapper>
        <Space width={55} />
        <XWrapper>
          <X />
        </XWrapper>
        <Space width={70} />
        <LogoWrapper
          href="https://prisma.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactImage src="/static/prisma.svg" />
        </LogoWrapper>
      </Wrapper>
    </Container>
  )
}
