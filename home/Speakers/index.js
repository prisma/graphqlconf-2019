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
              bio={'Senior Developer at GraphQL Java'}
              photoSrc="/static/speakers/andreas.jpg"
              twitter="andimarek"
              github="andimarek"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Adam D. I. Kramer"
              bio={'Software Engineer at Facebook'}
              photoSrc="/static/speakers/adam.jpg"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Kewei Qu"
              bio={'Software Engineer at Facebook'}
              photoSrc="/static/speakers/kewei.jpg"
              twitter="kewei_qu"
              github="Keweiqu"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Lachlan Young"
              bio={'Fullstack Software Developer at Maxkelsen'}
              photoSrc="/static/speakers/lachlan.jpg"
              twitter="builtbyproxy"
              github="builtbyproxy"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Marc-Andre Giroux"
              bio={'Senior Platform Engineer at Github'}
              photoSrc="/static/speakers/marc.jpg"
              twitter="__xuorig__"
              github="xuorig"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Rui Araújo"
              bio={'Engineering Lead at Zalando'}
              photoSrc="/static/speakers/rui.jpg"
              twitter="raraujoc"
              github="ruiaraujo"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Sidhartha Chatterjee"
              bio={'OSS Maintainer at Gatsby'}
              photoSrc="/static/speakers/sidhartha.jpg"
              twitter="chatsidhartha "
              github="sidharthachatterjee"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Stan Chollet"
              bio={'Engineering Manager at Dailymotion'}
              photoSrc="/static/speakers/stanislas.jpg"
              twitter="tsunammis"
              github="tsunammis"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Roy Derks"
              bio={
                'Senior Frontend Developer at City of Amsterdam & Coach, ReactJS Academy'
              }
              photoSrc="/static/speakers/roy.jpg"
              twitter="gethackteam"
              github="royderks"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Vimalraj Selvam"
              bio={'Full-stack Staff Software Engineer at Visa'}
              photoSrc="/static/speakers/vimalraj.jpg"
              twitter="email2vimalraj"
              github="email2vimalraj"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Tim Griesser"
              bio={'Software Engineer at Cypress.io'}
              photoSrc="/static/speakers/tim.jpg"
              twitter="tgriesser"
              github="tgriesser"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Bernardo Raposo"
              bio={'Software Engineer at TravelRepublic'}
              photoSrc="/static/speakers/bernardo.jpg"
              twitter="braposo"
              github="braposo"
            />
          </GridItem>

          <GridItem>
            <PersonProfile
              name="Jon Wong"
              bio={'Staff Software Engineer, Developer Experience @ Coursera'}
              photoSrc="/static/speakers/jon.jpg"
              twitter="jnwng"
              github="jnwng"
            />
          </GridItem>
        </Grid>
      </Wrapper>
    </Container>
  )
}
