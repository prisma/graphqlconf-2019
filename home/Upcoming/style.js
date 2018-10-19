import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

export const Wrapper = styled.section``

export const Rainbow = styled.div`
  width: 100%;
  background-image: url('/static/bg-rainbooow.svg');
  background-repeat: repeat-x;
  background-position: center;
`

export const Grid = styled.div`
  display: flex;
  justify-content: center;

  &:hover > * {
    filter: blur(1.2px) opacity(0.9);
    transform: scale(0.98);
  }

  ${mobile(css`
    flex-direction: column;
  `)};
`

export const GridItem = styled.div`
  margin-right: 13px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: calc((100% + 13px * 3) / 4);
  cursor: pointer;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0; /* mobile */
  }

  transition: transform 140ms ease-out, filter 160ms ease-out,
    border-radius 140ms ease-out, box-shadow 160ms ease-out;

  &:hover {
    filter: none;
    box-shadow: 0 6px 35px rgba(120, 180, 255, 0.25);
    transform: scale(1.02);
    border-radius: 10px;
  }

  ${mobile(css`
    margin-right: 0;
    margin-bottom: 13px;
    width: 100%;
  `)};
`
