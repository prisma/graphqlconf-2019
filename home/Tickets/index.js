import React from 'react'

// Local
import { Title, Description } from '../../shared/Section'
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { Wrapper, Rainbow, Grid, GridItem, MobileScrollView } from './style'
import { Ticket } from './Ticket'

const linkToBuy = `https://graphqlconf2019.eventbrite.com/?aff=website`

export const Tickets = () => {
  return (
    <Wrapper>
      {/* <Container>
        <Title textAlign="center">Get Your Ticket</Title>
        <Space height={8} />
        <Description alignCenter>Join us next Summer</Description>

        <Space height={30} />
      </Container> */}

      {/* <Rainbow>
        <Container>
          <Grid>
            <GridItem>
              <Ticket
                title="Super Early Bird"
                priceInEuro={219}
                linkToBuy={linkToBuy}
                activeFrom="2018-10-10"
                activeUntil="2019-01-22"
              />
            </GridItem>
            <GridItem>
              <Ticket
                title="Early Bird"
                priceInEuro={269}
                linkToBuy={linkToBuy}
                activeFrom="2019-01-23"
                activeUntil="2019-03-20"
              />
            </GridItem>
            <GridItem>
              <Ticket
                title="Regular"
                priceInEuro={369}
                linkToBuy={linkToBuy}
                activeFrom="2019-03-21"
                activeUntil="2019-06-13"
              />
            </GridItem>
            <GridItem>
              <Ticket
                title="Late Bird"
                priceInEuro={469}
                linkToBuy={linkToBuy}
                activeFrom="2019-06-14"
              />
            </GridItem>
          </Grid>
        </Container>
      </Rainbow> */}
    </Wrapper>
  )
}
