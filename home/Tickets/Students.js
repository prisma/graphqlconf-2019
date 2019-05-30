import React from 'react'

// Local
import { Title, Description } from '../../shared/Section'
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { Wrapper } from './style'
import { WhiteButtonLink } from '../../shared/WhiteButton'

export const Students = () => {
  return (
    <Wrapper>
      <Container>
        <Title textAlign="center">
          Apply for Student Tickets
        </Title>
        <Space height={30} />
        <Description maxWidth={680} alignCenter>
          GraphQL Conf offers a special rate for student tickets.
          To apply for this ticket, please send us an e-mail with
          a copy of your registration from the educational institution
          where you are a student during the 2018/2019 school year.
        </Description>

        <Space height={68} heightOnMobile={52} />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WhiteButtonLink href="mailto:hello@graphqlconf.org">
            Email Us
          </WhiteButtonLink>
        </div>
      </Container>
    </Wrapper>
  )
}
