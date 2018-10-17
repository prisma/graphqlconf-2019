import React from 'react'
import styled, { css } from 'styled-components'
import { DateTime } from 'luxon'

// Utils
import { mobile } from '../../utils/media'

const now = DateTime.local()

export const Ticket = ({
  title,
  priceInEuro,
  linkToBuy,
  activeFrom,
  activeUntil
}) => {
  const fromDate = DateTime.fromISO(activeFrom)
  const untilDate = activeUntil ? DateTime.fromISO(activeUntil) : null
  const isActive = untilDate ? fromDate <= now && now <= untilDate : false

  return (
    <Wrapper isActive={isActive}>
      <Title>{title}</Title>
      <PriceTag>€{priceInEuro}</PriceTag>
      <LinkButton href={linkToBuy} isActive={isActive}>
        Get ticket
      </LinkButton>
      <Note isActive={isActive}>
        Until{' '}
        {untilDate
          ? untilDate.toLocaleString(DateTime.DATE_FULL)
          : 'the last minute'}
      </Note>
    </Wrapper>
  )
}

// Style

const Wrapper = styled.div`
  min-height: 290px;
  width: 260px;

  padding-right: 21px;
  padding-left: 21px;
  padding-top: 32px;

  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);

  border-radius: 5px;
  background: white;
  color: black;

  position: relative;
  overflow: hidden;

  ${p =>
    !p.isActive &&
    css`
      ${mobile(css`
        display: none; /* hide all non active on mobile*/
      `)};

      user-select: none;
      box-shadow: none;

      &::after {
        content: '';
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;

        /* Uncomment to allow button click when de-active */
        /* pointer-events: none; */

        background: linear-gradient(
          220deg,
          rgba(0, 0, 0, 0.91) 0%,
          rgba(0, 0, 0, 0.8) 100%
        );
      }
    `};
`

const Title = styled.div`
  color: black;
  font-size: 25px;
  line-height: 1;
`

const PriceTag = styled.div`
  color: black;
  font-weight: bold;
  font-size: 70px;
  margin-top: 12px;
`

const LinkButton = styled.a`
  --bg: linear-gradient(
    219.63deg,
    #3d00c3 15.93%,
    #81027e 55.39%,
    #cf0203 95.46%
  );
  --hover: linear-gradient(
    420.63deg,
    #3d00c3 15.93%,
    #81027e 55.39%,
    #cf0203 95.46%
  );

  height: 60px;
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  color: white;

  color: white;
  background: ${p => (p.isActive ? `var(--bg)` : 'black')};
  &:hover {
    background: var(--hover);
  }
`

const Note = styled.div`
  color: ${p => (p.isActive ? '#a1a8b3' : 'black')};
  line-height: 1.4;
  margin-top: 15px;
`
