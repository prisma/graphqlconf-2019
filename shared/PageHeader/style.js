import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

export const Wrapper = styled.header`
  text-align: center;
  min-height: ${p => (p.noArtwork ? 720 : 870)}px;

  background-image: url('/static/bg-blingbling.svg'),
    url('/static/patty-patty.svg');
  background-position: top center, center bottom;
  background-size: initial;
  background-repeat: no-repeat;

  ${mobile(css`
    background-size: 190%, 210%;
    background-position: top center, center bottom;
    min-height: auto;
    min-height: 400px;
  `)};
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  line-height: 0.92;
  font-size: 151px;

  margin: 0;
  padding: 0;

  margin-top: 80px;

  ${mobile(css`
    font-size: calc(7vw + 15px);
    margin-top: 60px;
  `)};
`

export const Artwork = styled.div`
  margin-top: 40px;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;

  svg {
    max-width: 100%;
    height: auto;
  }

  ${mobile(css`
    margin-top: 16px;
  `)};
`
