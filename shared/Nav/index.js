import React from 'react'
import Link from 'next/link'

import LogoSvg from '../vectors/Logo'
import {
  GraphQL,
  LogoText,
  LogoIcon,
  Logo,
  NavLink,
  NavButtonStyle,
  FlexWrapper
} from './style'
import { Container } from '../Container'

export const Nav = () => {
  return (
    <Container>
      <FlexWrapper>
        <Logo href="/">
          <LogoIcon>
            <LogoSvg />
          </LogoIcon>
          <LogoText>
            <GraphQL>GraphQL</GraphQL> Conf
          </LogoText>
        </Logo>

        <NavLink hideOnMobile={true} href="http://slack.prisma.io">
          Community
        </NavLink>

        <NavLink href="/#speakers">Speakers</NavLink>

        <NavLink href="/schedule">
          Schedule
        </NavLink>

        <NavLink href="/sponsors">
          Sponsors
        </NavLink>

        <Link href="/team" passHref prefetch={true}>
          <NavLink hideOnMobile={true}>Team</NavLink>
        </Link>

        <NavButtonStyle href="https://www.eventbrite.com/e/graphql-conf-2019-tickets-47172725893?aff=website">
           Get Tickets
        </NavButtonStyle>
      </FlexWrapper>
    </Container>
  )
}
