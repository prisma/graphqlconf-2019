import React from 'react'

// Local
import { Title, Description } from '../../shared/Section'
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { Wrapper } from './style'
import { WhiteButtonLink } from '../../shared/WhiteButton'

const linkToBuy = `https://graphqlconf2019.eventbrite.com/?aff=website`
const colors = [
  '#8018A6',
  '#2A1DE6',
  '#0044DD',
  '#1A9D7E',
  '#6CC13B',
  '#B6DD03',
  '#ECB102',
  '#FF5400',
  '#FF2D00',
  '#E21E40',
  '#FF0000',
  '#E825E9',
  '#8B18AF'
]

const title2Char = [
  'Ap',
  'pl',
  'y f',
  'or',
  ' op',
  'po',
  'rt',
  'un',
  'it',
  'y t',
  'ic',
  'ke',
  'ts'
]

export const Opportunity = () => {
  return (
    <Wrapper>
      <Container>
        <Title textAlign="center">
          {title2Char.map((twoChar, i) => (
            <span key={twoChar + i} style={{ color: colors[i] }}>
              {twoChar}
            </span>
          ))}
        </Title>
        <Space height={30} />
        <Description maxWidth={680} alignCenter>
          We strongly encourage and support attendance and participation from
          individuals who consider themselves underrepresented at technical
          conferences. Want to learn more about our free-of-charge opportunity
          tickets?
        </Description>

        <Space height={68} heightOnMobile={52} />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WhiteButtonLink
            href="https://diversitytickets.org/en/events/322"
            target="_blank"
          >
            Learn More
          </WhiteButtonLink>
        </div>
      </Container>
    </Wrapper>
  )
}
