import React from 'react'

// Local
import { Space } from '../../shared/Space'
import { WithPhotoSection } from '../WithPhotoSection'
import { JoinSlack } from './JoinSlack'

export const Community = () => (
  <WithPhotoSection
    imageSrc="/static/graphql1.jpg"
    imageFirst={true}
    imageFirstOnMobile={true}
  >
    {({ Title, Description }) => (
      <>
        <Title>Join the GraphQL Conf Slack!</Title>
        <Description addMarginTop>
          Connect in the official GraphQL Conf Slack channel. This is your
          chance to meet your peers, organize informal chats and activities, or
          ask questions about the conference or Berlin.
        </Description>
        <Space height={30} />
        <JoinSlack />
      </>
    )}
  </WithPhotoSection>
)
