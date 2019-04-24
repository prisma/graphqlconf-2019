import styled from 'styled-components'

export const Switch = styled.div`
  display: flex;
  margin: 24px 0;
`

export const Day = styled.div`
  width: 50%;
  padding: 32px;
  margin: 0 12px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;

  ${ p => p.isActive &&
    `color: #000;
     background-color: #fff;`
  }

  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }
`