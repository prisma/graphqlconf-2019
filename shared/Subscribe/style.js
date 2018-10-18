import styled, { css, keyframes } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

// Local
import { WhiteButton } from '../../shared/WhiteButton'

// Vars
/**
 * Local variables shouldn't be in there,
 * since this variable is only meaningfull in
 * the context of this component.
 */
const formHeight = 60

// Style
export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 130px;

  /**
   * Always I prefer expanded version, 
   * it's way faster for you or future devs 
   */
  padding-top: 36px;
  padding-bottom: 34px;
  padding-left: 80px;
  padding-right: 70px;

  border-radius: 5px;
  background: linear-gradient(
    200.02deg,
    #3d00c3 15.93%,
    #81027e 55.39%,
    #cf0203 95.46%
  );

  ${mobile(css`
    padding: 30px 25px;
    width: calc(100% + 50px);

    /* 20 from container padding plus radius */
    margin-left: -25px;
    margin-right: -25px;

    flex-direction: column;
  `)};
`

export const Left = styled.div`
  margin-right: auto;
`

export const Desc = styled.div`
  font-size: 25px;
  line-height: 1.2;
  color: white;
`

const expandText = keyframes`
from { letter-spacing: 0; }
to { letter-spacing: 4px; }
`

export const ExapndingText = styled.span`
  position: absolute;
  margin-left: 5px;
  animation: ${expandText} 0.8s alternate infinite ease-in-out;

  ${mobile(css`
    /* 
    Poor mobile perf, despite you might have a flagship
    One might have a poor Galaxy Core 
    */
    animation: none;
  `)};
`

export const Form = styled.form`
  width: 460px;
  height: ${formHeight}px;
  display: flex;
  position: relative;

  ${mobile(css`
    width: 100%;
    height: auto;
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: 25px;
  `)};
`

const unsetInput = css`
  border: none;
  background: none;
  outline: none;
`

export const Input = styled.input`
  ${unsetInput};

  flex-grow: 1;

  /** Inputs in flex need this to shrink */
  min-width: 0;
  padding: 18px 24px;

  font-size: 18px;
  background: none;
  color: white;
  /** Box shadow doesn't work on input with no bg, otherwise I'd use that instead of nasty border :D */
  border: 1px solid white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border: 1px solid white;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
  }
`

export const Button = styled(WhiteButton)`
  height: 100%;
  min-width: 188px;
  transform-origin: left center;

  ${mobile(css`
    height: 50px;
  `)};
`

export const Message = styled.div`
  position: absolute;
  top: 100%;
  right: 0;

  padding: 4px 8px;
  font-size: 15px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  background: black;
  border-radius: 0 0 5px 5px;
`
