import React from 'react'
import Head from 'next/head'

// Local
import { Space } from '../shared/Space'
import { PageHeader } from '../shared/PageHeader'
import { Artwork } from '../schedule/Artwork'
import { Schedule } from '../schedule/Schedule'
import { Organizers } from '../shared/Organizers'
import { Subscribe } from '../shared/Subscribe'
import { Footer } from '../shared/Footer'

export default () => (
  <>
    <Head>
      <title>Schedule - GraphQL Conf</title>
      <meta name="twitter:title" content="Schedule - GraphQL Conf Berlin 2019" />
    </Head>

    <PageHeader title="Schedule" artwork={<Artwork />} />

    <Space height={80} heightOnMobile={48} />

    <Schedule />

    <Space height={105} heightOnMobile={100} />

    <Subscribe />

    <Space height={134} heightOnMobile={100} />

    <Organizers />

    <Space height={114} heightOnMobile={90} />

    <Footer />
  </>
)
