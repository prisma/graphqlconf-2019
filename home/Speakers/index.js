import React from 'react'

// Local
import { Title } from '../../shared/Section'
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { AnchorPoint } from '../../shared/AnchorPoint'
import { PersonProfile } from '../../shared/PersonProfile'
import { Wrapper, Grid, GridItem } from './style'

export const Speakers = () => {
  return (
    <Container>
      <AnchorPoint id="speakers" />
      <Wrapper>
        <Title>
          Confirmed
          <br />
          Speakers 2019
        </Title>

        <Space height={50} heightOnMobile={30} />

        <Grid>
          <GridItem>
            <PersonProfile
              name="Lee Byron"
              bio={'Ex-Facebook, GraphQL co-creator'}
              photoSrc="/static/speakers/lee-byron.jpg"
              twitter="leeb"
              github="leebyron"
              medium="leep"
            />
          </GridItem>
          <GridItem>
            <PersonProfile
              name="Dan Schafer"
              bio={'Facebook, GraphQL co-creator'}
              photoSrc="/static/speakers/dan-scghafer.jpg"
              twitter="dlschafer"
              github="dschafer"
            />
          </GridItem>
          <GridItem>
            <PersonProfile
              name="Mirela Iclodean"
              bio={'Software Engineer at Twitter'}
              photoSrc="/static/speakers/mirela-iclodean.jpg"
              twitter="MirelaIclodean"
              github="MirelaI"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Matthew Mahoney"
              bio={'Software Engineer at Facebook'}
              photoSrc="/static/speakers/matthew-mahoney.jpg"
              twitter=""
              github="mjmahone"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Sasha Solomon"
              bio={'Software Engineer at Twitter'}
              photoSrc="/static/speakers/sasha-solomon.jpg"
              twitter="sachee"
              github="sachee"
            />
          </GridItem>

          {/* Don't remove place holder until CFP has ended */}
          <GridItem>
            <PersonProfile
              name="Who’s there?"
              bio={
                <>
                  You.{' '}
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
