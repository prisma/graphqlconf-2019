import React from 'react'

// Local
import { Wrapper, Title, Artwork } from './style'
import { Nav } from '../../shared/Nav'

export const PageHeader = ({ title, artwork, ...props }) => {
  return (
    <Wrapper {...props}>
      <Nav />

      <Title>{title}</Title>
      <Artwork>{artwork}</Artwork>
    </Wrapper>
  )
}
