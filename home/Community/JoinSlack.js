import React from 'react'
import styled from 'styled-components'

// Local
import { ChevronRight } from '../../shared/vectors/ChevronRight'

export const JoinSlack = () => (
  <Wrapper href="https://slack.prisma.io/">
    <Icon>i</Icon>
    <Text>
      Join us in Prisma's Slack: <Channel>#graphql-conf</Channel>
    </Text>
    <Arrow>
      <ChevronRight />
    </Arrow>
  </Wrapper>
)

// Style
const Wrapper = styled.a`
  min-width: 330px;
  height: 35px;
  padding: 6px;
  border-radius: 35px;
  background: white;

  display: inline-flex;
  align-items: center;

  cursor: pointer;
  transition: background 140ms ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    box-shadow: 0 2px 5px 1px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transition: none;
    background: rgba(255, 255, 255, 0.82);
  }
`

const Icon = styled.div`
  width: 23px;
  height: 100%;
  margin-right: 6px;
  align-self: stretch;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  font-weight: bold;
  background: #2e1865;
  border-radius: 30px;
  color: white;
`

const Text = styled.div`
  font-size: 14px;
  line-height: 1;
  margin-right: 10px;

  color: #7a808a;
  user-select: none;
`

const Channel = styled.span`
  font-weight: bold;
  color: #7a808a;
  user-select: text;
`

const Arrow = styled.div`
  margin-right: 6px; /* + 6px padding of parent */
  line-height: 1;
  margin-top: -1px;
`
