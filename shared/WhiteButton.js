import styled, { css } from 'styled-components'
import { mobile } from '../utils/media'

const whiteButtonStyle = css`
  height: 90px;
  min-width: 250px;
  line-height: 1;
  font-size: 25px;
  font-weight: 700;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: white;
  color: black;
  cursor: pointer;

  transition: transform 140ms ease-out, background 140ms ease-out;

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.8);
  }

  &:hover:active {
    transition: transform 140ms ease-out;
    background: rgba(255, 255, 255, 0.7);
    transform: scale(0.95);
  }

  ${mobile(css`
    font-size: 22px;
    height: 65px;
    min-width: 200px;
  `)};
`

export const WhiteButtonLink = styled.a`
  ${whiteButtonStyle};
`

const unsetButton = css`
  border: none;
  background: none;
  padding: 0;
  min-width: 0;
`

export const WhiteButton = styled.button`
  ${unsetButton};
  ${whiteButtonStyle};
`
