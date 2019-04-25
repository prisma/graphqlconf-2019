import React from 'react'

// Locals
import {
  Switch,
  Day,
} from './style'

// Day Switch
export const DaySwitch = ({ activeDate, handleClick }) => (
  <Switch>
    <Day
      isActive={activeDate === 20}
      onClick={() => handleClick(20)}>
      Thursday June 20th
    </Day>
    <Day
      isActive={activeDate === 21}
      onClick={() => handleClick(21)}>
      Friday June 21st
    </Day>
  </Switch>
)