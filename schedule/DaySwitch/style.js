import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

export const Switch = styled.div`
  display: flex;
  margin: 24px 0;
`

export const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 18px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;

  ${ p => p.isActive &&
    `color: #000;
     background-color: #fff;`
  }

  &:hover {
    cursor: pointer;
    ${ p => !p.isActive && `background-color: rgba(255,255,255,0.1);` }
  }

  ${mobile(css`
    font-size: 16px;
    padding: 16px;
  `)};
`