import React from 'react'
import ReactImage from 'react-image'

// Local
import { Title, Description } from '../../shared/Section'
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { WhiteButtonLink } from '../../shared/WhiteButton'
import { AnchorPoint } from '../../shared/AnchorPoint'
import { Wrapper, Logos, LogosArea, LogoImage } from './style'

export const Sponsors = () => {
  return (
    <>
      <AnchorPoint id="sp" />
      <Wrapper>
        <Container>
          <Title textAlign="center">Want To Sponsor?</Title>

          <Space height={30} heightOnMobile={18} />

          <Description maxWidth={545} alignCenter={true}>
            GraphQL Conf is an excellent opportunity to reach some of the best
            software developers in the industry. Contact our sponsor team for
            more information regarding sponsor packages.
          </Description>

          <Space height={38} heightOnMobile={24} />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WhiteButtonLink href="mailto:sponsors@graphqlconf.org">
              Contact us
            </WhiteButtonLink>
          </div>

          <LogosArea>
            <Logos>
              <LogoImage href="https://commercetools.com/">
                <ReactImage src="/static/sponsors/commercetools.svg" />
              </LogoImage>
              <LogoImage href="https://www.github.com/">
                <ReactImage src="/static/sponsors/github.svg" />
              </LogoImage>
              <LogoImage href="https://www.8base.com/">
                <ReactImage src="/static/sponsors/8base.png" />
              </LogoImage>
              <LogoImage href="https://www.jahia.com/home.html/">
                <ReactImage src="/static/sponsors/jahia.png" />
              </LogoImage>
              <LogoImage href="https://neo4j.com/">
                <ReactImage src="/static/sponsors/neo4j.png" />
              </LogoImage>
              <LogoImage href="https://reactjs.academy/">
                <ReactImage src="/static/sponsors/reactjs-academy.svg" />
              </LogoImage>
            </Logos>
          </LogosArea>
        </Container>
      </Wrapper>
    </>
  )
}
