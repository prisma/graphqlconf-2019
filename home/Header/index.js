import React from 'react'

import { Nav } from '../../shared/Nav'
import {
  Wrapper,
  Flex,
  Left,
  Hero,
  Title,
  YearWrapper,
  SpinningLogo,
  Right,
  LocationAndDate
} from './style'
import { Container } from '../../shared/Container'
import { WhiteButtonLink } from '../../shared/WhiteButton'
import BigLogo from './BigLogo'
import Year19 from './Year19'

export default () => (
  <Wrapper>
    <Nav />

    <Container>
      <Flex>
        <Left>
          <Hero>
            <Title>
              <div>GraphQL</div>
              <div>Conf</div>
              <div>Berlin</div>
            </Title>
            <YearWrapper>
              <Year19 />
            </YearWrapper>
          </Hero>

          <SpinningLogo>
            <BigLogo />
          </SpinningLogo>
        </Left>

        <Right>
          <LocationAndDate>
            Kosmos Berlin
            <br />
            Karl-Marx-Allee 131a
            <br />
            June 20-21, 2019
          </LocationAndDate>
          <WhiteButtonLink href="https://graphqlconf2019.eventbrite.com/?aff=website">
            Get Ticket
          </WhiteButtonLink>
        </Right>
      </Flex>
    </Container>
  </Wrapper>
)
