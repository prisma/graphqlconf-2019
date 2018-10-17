import React from 'react'

// Local
import { Title } from '../../shared/Section'
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { Wrapper, Grid, GridItem } from './style'
import { Speaker } from './Speaker'

export const Speakers = () => {
  return (
    <Container>
      <Wrapper id="speakers">
        <Title>
          Confirmed
          <br />
          Speakers 2019
        </Title>

        <Space height={50} heightOnMobile={30} />

        <Grid>
          <GridItem>
            <Speaker
              name="Lee Byron"
              bio={'I make things @RobinhoodApp, previously @Facebook. '}
              photoSrc="/static/speakers/lee-byron.jpg"
              twitter="leeb"
              github="leebyron"
              medium="leep"
            />
          </GridItem>
          <GridItem>
            <Speaker
              name="Dan Schafer"
              bio={'Dan is a Software Engineer @Facebook'}
              photoSrc="/static/speakers/dan-scghafer.jpg"
              twitter="dlschafer"
              github="dschafer"
            />
          </GridItem>
          <GridItem>
            <Speaker
              name="Mirela Iclodean"
              bio={'Mirela is a Software Engineer @Twitter'}
              photoSrc="/static/speakers/mirela-iclodean.jpg"
              twitter="MirelaIclodean"
              github="MirelaI"
            />
          </GridItem>

          {/* Don't remove place holder until CFP has ended */}
          <GridItem>
            <Speaker
              name="Who’s there?"
              bio={
                <>
                  Spot still available. We want you to speak.{' '}
                  <a href="https://www.papercall.io/graphqlconf19">
                    Submit a talk!
                  </a>
                </>
              }
              placeholder={true}
            />
          </GridItem>
        </Grid>
      </Wrapper>
    </Container>
  )
}
