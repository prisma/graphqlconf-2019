import styled, { css } from 'styled-components'

// Utils
import { mobile, desktop } from '../../utils/media'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const GridItem = styled.div`
  ${desktop(css`
    width: calc((100% - 100px) / 4);
    margin-right: 33px;
    margin-bottom: 48px;

    &:nth-child(4n) {
      margin-right: 0;
    }
  `)};

  ${mobile(css`
    width: 100%;
    margin-bottom: 40px;
  `)};
`
