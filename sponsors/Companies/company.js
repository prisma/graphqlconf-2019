import React from 'react'
import styled, { css } from 'styled-components'
import ReactImage from 'react-image'

// Utils
import { mobile } from '../../utils/media'

export const Company = ({ name, logoSrc, about, link }) => {
  return (
    <Wrapper>
      <Photo href={link} target="_blank">
        <StyledReactImage src={logoSrc} />
      </Photo>
      <Info>
        <Name>{name}</Name>
        <About>{about}</About>
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Photo = styled.a`
  height: 100px;
  width: 168px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${mobile(css`
    width: 128px;
    height: 100px;
  `)};

  &:hover {
    filter: drop-shadow(0 9px 25px rgba(120, 200, 255, 0.6));
  }
`

const StyledReactImage = styled(ReactImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`

const Info = styled.div`
  margin-top: 46px;

  ${mobile(css`
    margin-top: 26px;
  `)};
`

const Name = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  vertical-align: middle;
`

const About = styled.div`
  margin-top: 8px;
  font-family: proxima-nova, sans-serif;
  font-size: 16px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.5);
`
