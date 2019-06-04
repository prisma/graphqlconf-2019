import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

export const Wrapper = styled.section`
  background-image: url('/static/patty-patty.svg');
  background-size: initial;
  background-position: center 350px;
  background-repeat: no-repeat;

  width: 100vw;
  overflow: hidden;
  min-height: 930px;
`

export const LogosArea = styled.div`
  width: 100%;
  padding-top: 64px;
  padding-bottom: 20px;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

export const Hr = styled.div`
  margin: 56px auto;
  height: 4px;
  background-image: linear-gradient( 207.67deg,#3d00c3 12.08%,#81027e 53.53%,#cf0203 95.62% );
  width: 240px;
`

export const Logos = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  align-content: flex-end;
  flex-wrap: wrap;

  &:hover > * {
    opacity: 0.8;
    filter: blur(2px) saturate(0.7);
  }
`

export const LogoImage = styled.a`
  display: block;
  flex-grow: 1;
  max-width: 180px;
  max-height: 100px;
  margin: 24px 32px;

  ${mobile(css`
    margin: 16px 24px;
  `)};

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    object-position: center;
  }

  transition: opacity 200ms ease-out, filter 200ms ease-out;

  &:hover {
    opacity: 1;
    filter: drop-shadow(0 9px 25px rgba(120, 200, 255, 0.6));
  }
`

export const LogoImageSmall = styled.a`
  display: block;
  margin: 24px;
  opacity: 0.6;

  ${mobile(css`
    margin: 16px 24px;
  `)};

  img {
    display: block;
    width: auto;
    max-height: 24px;
  }

  transition: opacity 200ms ease-out, filter 200ms ease-out;

  &:hover {
    opacity: 1;
    filter: drop-shadow(0 9px 25px rgba(120, 200, 255, 0.6));
  }
`
