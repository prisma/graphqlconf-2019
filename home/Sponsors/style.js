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
  min-height: 830px;
`

export const LogosArea = styled.div`
  width: 100%;
  height: 430px;
  padding-bottom: 20px;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

export const Logos = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-content: flex-end;

  ${mobile(css`
    justify-content: center;
    flex-wrap: wrap;
  `)};

  &:hover > * {
    opacity: 0.8;
    filter: blur(2px) saturate(0.7);
  }
`

export const LogoImage = styled.a`
  display: block;
  width: 100%;
  flex-grow: 1;
  height: 150px;

  ${mobile(css`
    width: 180px;
    height: 100px;
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
