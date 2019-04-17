import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Title = styled.div`
  font-size: 24px;
  text-align: center;
  color: #979797;
`

export const LogoWrapper = styled.a`
  margin: 20px 40px;

  ${mobile(css`
    width: 100%;
    height: auto;
    text-align: center;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`