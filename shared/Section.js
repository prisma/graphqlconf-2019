import styled, { css } from 'styled-components'
import { mobile } from '../utils/media'

export const Title = styled.h2`
  font-size: 45px;
  line-height: 1.16;
  font-weight: bold;
  color: white;

  margin: 0;

  ${p =>
    p.textAlign &&
    css`
      text-align: ${p.textAlign};
    `};

  ${mobile(css`
    font-size: 30px;
    line-height: 1.25;

    ${p =>
      p.textAlignOnMobile &&
      css`
        text-align: ${p.textAlignOnMobile};
      `};
  `)};
`

export const MobileLineBreak = styled.span`
  ${mobile(css`
    display: block;
  `)};
`

export const Description = styled.p`
  font-family: proxima-nova, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: white;
  max-width: ${p => (p.maxWidth ? `${p.maxWidth}px` : 'auto')};

  margin: 0;
  margin-top: ${p => (p.addMarginTop ? '20px' : 0)};

  ${p =>
    p.alignCenter &&
    css`
      text-align: center;
      margin-right: auto;
      margin-left: auto;
    `};

  ${mobile(css`
    font-size: 16px;
  `)};
`
