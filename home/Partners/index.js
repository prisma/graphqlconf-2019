import React from 'react'
import ReactImage from 'react-image'

// Local
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { Wrapper, Title, LogoWrapper } from './style'

export const Partners = () => {
  return (
    <Container>
      <Title>Partners</Title>

      <Space height={64} heightOnMobile={24} />

      <Wrapper>
        <LogoWrapper
          href="https://www.graphql-asia.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactImage src="/static/partners/graphql-asia.svg" />
        </LogoWrapper>
        <LogoWrapper
          href="https://www.prisma.io/day"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactImage src="/static/partners/prisma-day.svg" />
        </LogoWrapper>
        <LogoWrapper
          href="https://reactjs.academy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactImage src="/static/partners/reactjs-academy.svg" />
        </LogoWrapper>
      </Wrapper>
      <Wrapper>
      </Wrapper>
    </Container>
  )
}