import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const LogoWrapper = styled.a`
  ${mobile(css`
    width: 100%;
    height: auto;
    margin-bottom: 40px;
    text-align: center;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`

export const XWrapper = styled.a`
  ${mobile(css`
    display: none;
  `)};
`
