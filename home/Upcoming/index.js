import React from 'react'

// Local
import { Title, Description, MobileLineBreak } from '../../shared/Section'
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { Wrapper, Grid, GridItem } from './style'
import { Conf } from './Conf'

export const Upcoming = () => {
  return (
    <Wrapper>
      <Container>
        <Title textAlign="center">
          Upcoming <MobileLineBreak />
          GraphQL Events
        </Title>
        <Description alignCenter addMarginTop maxWidth={460}>
          Can’t wait for GraphQL Conf? Check out these exciting GraphQL related
          events coming up.
        </Description>

        <Space height={44} />

        <Grid>
          <GridItem>
            <Conf
              name="GraphQL Meetups"
              backgroundColor="#CF0203"
              link="https://www.meetup.com/topics/graphql/"
            />
          </GridItem>
          <GridItem>
            <Conf
              name="GraphQL Summit"
              backgroundColor="#AE0135"
              link="https://summit.graphql.com/"
            />
          </GridItem>
          <GridItem>
            <Conf
              name="React Berlin"
              backgroundColor="#74018B"
              link="https://reactday.berlin/"
            />
          </GridItem>
          <GridItem>
            <Conf
              name="GraphQL Berlin"
              backgroundColor="#3D00C3"
              link="https://www.meetup.com/graphql-berlin/"
            />
          </GridItem>
        </Grid>
      </Container>
    </Wrapper>
  )
}
