import styled, { css } from 'styled-components'

import { mobile } from '../../utils/media'

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 14px;

  ${mobile(css`
    margin-top: 24px;
    padding-left: 5px;
  `)};
`

export const NavLink = styled.a`
  margin-right: 22px;
  padding: 4px 4px;
  line-height: 1;
  font-size: 16px;
  color: #9babff;

  transition: color 120ms ease-out, background 120ms ease-out;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }

  ${p =>
    p.hideOnMobile &&
    mobile(
      css`
        display: none;
      `
    )};
`

export const NavButtonStyle = styled.a`
  width: 140px;
  height: 45px;
  font-weight: 700;
  color: #9babff;
  border: 1px solid #9babff;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: background 140ms ease-out, color 140ms ease-out;

  &:hover {
    background: #9babff;
    color: black;
  }

  ${mobile(css`
    width: auto;
    height: 35px;
    border: none;
  `)};
`

// --- Logo
export const Logo = styled.a`
  margin-right: auto; /* -> push links to right side */
  display: inline-flex;
  align-items: center;
`

export const LogoIcon = styled.div`
  transition: transform 400ms ease-out;
  transform-origin: center center;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: rotateZ(270deg);
  }
`

export const LogoText = styled.div`
  font-weight: 300;
  margin-left: 16px;

  ${mobile(css`
    display: none;
  `)};
`

export const GraphQL = styled.span`
  font-weight: 700;
`
