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
              photoSrc="/static/speakers/dan-schafer.jpg"
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

          <GridItem>
            <PersonProfile
              name="Nikolas Burk"
              bio={'Software Engineer at Prisma'}
              photoSrc="/static/speakers/nikolas-burk.png"
              twitter="nikolasburk"
              github="nikolasburk"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Sashko Stubailo"
              bio={'Software Engineer at Stripe'}
              photoSrc="/static/speakers/sashko-stubailo.png"
              twitter="stubailo"
              github="stubailo"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Lauren Tan"
              bio={'Engineering Manager at Netflix'}
              photoSrc="/static/speakers/lauren-tan.jpg"
              twitter="sugarpirate_"
              github="poteto"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="James Baxley"
              bio={'Engineering Manager at Apollo'}
              photoSrc="/static/speakers/james-baxley.png"
              twitter="jbaxleyiii"
              github="jbaxleyiii"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Andreas Marek"
              bio={'Senior Developer at Atlassian'}
              photoSrc="/static/speakers/andreas.jpg"
              twitter="andimarek"
              github="andimarek"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Andreas Marek"
              bio={'Senior Developer at Atlassian'}
              photoSrc="/static/speakers/andreas.jpg"
              twitter="andimarek"
              github="andimarek"
            />
          </GridItem>
        </Grid>
      </Wrapper>
    </Container>
  )
}
