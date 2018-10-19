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
      <title>Imprint - GraphQL Conf</title>
      <meta name="twitter:title" content="Imprint - GraphQL Conf Berlin 2019" />
    </Head>

    <article>
      <PageHeader title="Imprint" noArtwork />

      <Space height={80} heightOnMobile={48} />

      <Container>
        <Grid>
          <GridItem>
            <Title>Honeypot GmbH</Title>

            <Description addMarginTop>
              Schönhauser Allee 45
              <br />
              10435 Berlin
            </Description>

            <Description addMarginTop>
              Amtsgericht Charlottenburg
              <br />
              HRB 167394 B
            </Description>

            <Description addMarginTop>
              Managing Directors:
              <br />
              Kaya Taner and Emma Tracey
            </Description>
          </GridItem>

          <GridItem>
            <Title>Asquera Event UG</Title>

            <Description addMarginTop>
              Ohlauer Straße 43
              <br />
              10999 Berlin
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
