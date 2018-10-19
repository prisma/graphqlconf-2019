import React from 'react'
import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

export const Conf = ({ name, link, backgroundColor }) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Name>{name}</Name>
      <Link href={link}>See More</Link>
    </Wrapper>
  )
}

// Style

const Wrapper = styled.div`
  height: 115px;
  width: 100%;

  padding-left: 24px;
  padding-top: 22px;
  padding-right: 20px;

  border-radius: 5px;
  background: ${p => p.backgroundColor || 'black'};

  ${mobile(css`
    height: 82px;
    padding-top: 14px;
    text-align: center;
  `)};
`

const Name = styled.div`
  color: white;
  font-size: 25px;
  line-height: 1.4;

  ${mobile(css`
    font-size: 21px;
    font-weight: bold;
  `)};
`

const Link = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  margin-top: 12px;

  ${mobile(css`
    margin-top: 6px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
  `)};
`
