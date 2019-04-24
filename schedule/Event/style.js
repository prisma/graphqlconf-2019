import styled from 'styled-components'

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
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const Title = styled.h2`
  color: ${p => p.color || "#000"};
  font-size: 25px;
  font-weight: 600;
  margin: 0;
`

export const Time = styled.div`
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #000;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Meta = styled.div`
  display: flex;
`

export const Author = styled.div`
  color: #a1a8b3;
  margin-right: 16px;
`

export const Length = styled.div`
  color: #a1a8b3;
  margin-right: 16px;
`

export const Tag = styled.div`
  color: #a1a8b3;
`

export const Toggle = styled.div`
  color: #a1a8b3;
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