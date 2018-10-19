import React from 'react'
import Head from 'next/head'

// Local
import { Space } from '../shared/Space'
import { PageHeader } from '../shared/PageHeader'
import { Artwork } from '../code-of-conduct/Artwork'
import { Grid, GridItem } from '../code-of-conduct/style'
import { Title, Description } from '../shared/Section'
import { Organizers } from '../shared/Organizers'
import { Subscribe } from '../shared/Subscribe'
import { Container } from '../shared/Container'
import { Footer } from '../shared/Footer'

export default () => (
  <>
    <Head>
      <title>Code of Conduct - GraphQL Conf</title>
    </Head>

    <article>
      <PageHeader title="Code of Conduct" artwork={<Artwork />} />

      <Space height={80} heightOnMobile={48} />

      <Container>
        <Title>
          All attendees, speakers, sponsors and volunteers at our conference are
          required to agree with the following code of conduct. Organisers will
          enforce this code throughout the event. We expect cooperation from all
          participants to help ensure a safe environment for everybody.
        </Title>

        <Space height={105} heightOnMobile={100} />

        <Grid>
          <GridItem>
            <Title>The Quick Version</Title>

            <Description addMarginTop>
              Our conference is dedicated to providing a harassment-free
              conference experience for everyone, regardless of gender, gender
              identity and expression, age, sexual orientation, disability,
              physical appearance, body size, race, ethnicity, religion (or lack
              thereof), or technology choices. We do not tolerate harassment of
              conference participants in any form. Sexual language and imagery
              is not appropriate for any conference venue, including talks,
              workshops, parties, Twitter and other online media. Conference
              participants violating these rules may be sanctioned or expelled
              from the conference without a refund at the discretion of the
              conference organisers.
            </Description>

            <Space height={64} heightOnMobile={48} />

            <Title>More Info</Title>
            <Description addMarginTop>
              For more information, please check the original version:{' '}
              <a href="http://confcodeofconduct.com">
                http://confcodeofconduct.com
              </a>
              .
            </Description>

            <Space height={64} heightOnMobile={48} />

            <Title>Need Help?</Title>
            <Description addMarginTop>
              You have our contact details in the emails we've sent.
            </Description>
          </GridItem>

          <GridItem>
            <Title>The Less Quick Version</Title>

            <Description addMarginTop>
              Harassment includes offensive verbal comments related to gender,
              gender identity and expression, age, sexual orientation,
              disability, physical appearance, body size, race, ethnicity,
              religion, technology choices, sexual images in public spaces,
              deliberate intimidation, stalking, following, harassing
              photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual
              attention.{' '}
            </Description>

            <Description addMarginTop>
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
              <br />
              Sponsors are also subject to the anti-harassment policy. In
              particular, sponsors should not use sexualised images, activities,
              or other material. Booth staff (including volunteers) should not
              use sexualised clothing/uniforms/costumes, or otherwise create a
              sexualised environment.
              <br />
              If a participant engages in harassing behavior, the conference
              organisers may take any action they deem appropriate, including
              warning the offender or expulsion from the conference with no
              refund.
            </Description>

            <Description addMarginTop>
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact a member of
              conference staff immediately. Conference staff can be identified
              as they'll be wearing branded clothing and/or badges.
              <br />
              Conference staff will be happy to help participants contact
              hotel/venue security or local law enforcement, provide escorts, or
              otherwise assist those experiencing harassment to feel safe for
              the duration of the conference. We value your attendance.
            </Description>

            <Description addMarginTop>
              We expect participants to follow these rules at conference and
              workshop venues and conference-related social events.
            </Description>
          </GridItem>
        </Grid>
      </Container>
    </article>

    <Space height={105} heightOnMobile={100} />

    <Subscribe />

    <Space height={134} heightOnMobile={100} />

    <Organizers />

    <Space height={114} heightOnMobile={90} />

    <Footer />
  </>
)
