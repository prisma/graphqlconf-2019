import React from 'react'
import Head from 'next/head'

// Local
import { Space } from '../shared/Space'
import { PageHeader } from '../shared/PageHeader'
import { Artwork } from '../team/Artwork'
import { Members } from '../team/Members'
import { Organizers } from '../shared/Organizers'
import { Subscribe } from '../shared/Subscribe'
import { Footer } from '../shared/Footer'

export default () => (
  <>
    <Head>
      <title>Team - GraphQL Conf</title>
      <meta name="twitter:title" content="Team - GraphQL Conf Berlin 2019" />
    </Head>

    <PageHeader title="Who we are" artwork={<Artwork />} />

    <Space height={80} heightOnMobile={48} />

    <Members />

    <Space height={105} heightOnMobile={100} />

    <Subscribe />

    <Space height={134} heightOnMobile={100} />

    <Organizers />

    <Space height={114} heightOnMobile={90} />

    <Footer />
  </>
)
