import styled, { keyframes, css } from 'styled-components'
import { mobile } from '../../utils/media'

export const Wrapper = styled.header`
  /* background-color: black; */
  background-image: url('/static/bg-blingbling.svg'),
    url('/static/patty-patty.svg');
  background-position: top center, center 450px;
  background-size: initial;
  background-repeat: no-repeat;

  overflow: hidden;
  width: 100vw;
  min-height: 825px;

  ${mobile(css`
    background-size: 190%, 310%;
    background-position: top center, center 300px;
    min-height: auto;
  `)};
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;

  ${mobile(css`
    flex-direction: column;
  `)};
`

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
`

export const Hero = 'div'

export const Title = styled.div`
  position: relative;
  margin-top: 50px;
  z-index: 11;

  user-select: none;

  font-size: 151px;
  font-weight: 700;
  line-height: 0.92;

  ${mobile(css`
    font-size: 80px;
    margin-top: 80px;
  `)};
`

export const YearWrapper = styled.div`
  margin-top: 30px;

  ${mobile(css`
    margin-top: 20px;

    svg {
      width: auto;
      height: 50px;
    }
  `)};
`

const spinning = keyframes`
  from { 
    transform: rotate(0deg)
  }

  to {
    transform: rotate(359.9deg);
  }
`

export const SpinningLogo = styled.div`
  position: relative;
  margin-left: -200px;
  margin-top: 90px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${spinning} 15s linear infinite;
  transform-origin: center center;

  ${mobile(css`
    width: 220px;
    height: 220px;

    margin-left: -70px;
    margin-top: 165px;
  `)};
`

// Hint: Location and date and button
export const Right = styled.div`
  margin-left: auto;
  align-self: flex-end;
  text-align: right;

  padding-bottom: 35px;

  ${mobile(css`
    align-self: center;

    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-left: 0;
  `)};
`

export const LocationAndDate = styled.div`
  margin-bottom: 52px;

  font-size: 30px;
  font-weight: 700;
  line-height: 1.4;
  text-align: right;

  ${mobile(css`
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 0;
    text-align: center;
    order: 1;
  `)};
`
