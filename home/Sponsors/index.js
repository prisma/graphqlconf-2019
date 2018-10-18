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
            {/* <Logos>
            <LogoImage href="#">
              <ReactImage src="/static/sponsors/n26.svg" />
            </LogoImage>
            <LogoImage href="#">
              <ReactImage src="/static/sponsors/intuit.svg" />
            </LogoImage>
            <LogoImage href="#">
              <ReactImage src="/static/sponsors/fb.svg" />
            </LogoImage>
            <LogoImage href="#">
              <ReactImage src="/static/sponsors/apollo.svg" />
            </LogoImage>
          </Logos> */}
          </LogosArea>
        </Container>
      </Wrapper>
    </>
  )
}
