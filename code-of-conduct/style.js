import styled, { css } from 'styled-components'

// Utils
import { mobile, desktop } from '../utils/media'

export const Grid = styled.div`
  display: flex;

  ${mobile(css`
    flex-direction: column;
  `)};
`

export const GridItem = styled.div`
  ${desktop(css`
    width: 50%;
    flex-shrink: 1;
    margin-right: 100px;

    &:last-child {
      margin-right: 0;
    }
  `)};

  ${mobile(css`
    width: 100%;
    margin-bottom: 48px;
  `)};
`
