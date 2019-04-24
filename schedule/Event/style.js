import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

// Locals
import DropdownArrow from '../DropdownArrow'

export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 16px;
  border-left: solid 10px ${p => p.color || "#585858"};
  border-right: solid 10px ${p => p.color || "#585858"};
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 28px;

  ${p => p.isToggleable && `&:hover { cursor: pointer; }`}

  ${mobile(css`
    align-items: flex-start;
  `)};
`

export const Illustration = styled.div`
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  margin-right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg { display: block; }
`


export const Photo = styled.img`
  width: 64px;
  border-radius: 64px;
`

export const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  ${mobile(css`
    flex-direction: column;
    align-items: flex-start;
  `)};
`

export const Left = styled.div``

export const Title = styled.h2`
  color: ${p => p.color || "#000"};
  font-size: 25px;
  font-weight: 600;
  margin: 0 0 8px 0;
`

export const Time = styled.div`
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #000;
  white-space: nowrap;
`

export const Toggle = styled.div`
  color: #a1a8b3;
`

export const Right = styled.div`
  text-align: right;
  display: block;

  ${Toggle} {
    margin-top: 6px;
  }

  ${mobile(css`
    display: none;
  `)};
`

export const Bottom = styled.div`
  display: none;
  padding: 16px 24px;
  justify-content: space-between;
  border-top: 1px solid #F2F2F2;

  ${p => p.isToggleable && `&:hover { cursor: pointer; }`}

  ${mobile(css`
    display: flex;
  `)};
`

export const Meta = styled.div`
  display: flex;
  flex-direction: row;

  ${mobile(css`
    flex-direction: column;
  `)};
`

export const MetaItem = styled.div`
  color: #a1a8b3;
  margin-right: 16px;
  display: flex;
  align-items: center;

  svg {
    display: block;
    margin-right: 8px;
  }

  ${mobile(css`
    margin: 4px 0;
  `)};
`

export const Arrow = styled(DropdownArrow)`
  margin-left: 8px;

  ${ p => p.isOpen && `transform: rotate(180deg);` }
`

export const Description = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #808080;
  border-top: 1px solid #F2F2F2;
  margin: 0 28px;
  padding: 18px 0;
`