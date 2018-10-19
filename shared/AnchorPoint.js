import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export const AnchorPoint = ({ offset = 100, id, children }) => {
  return (
    <ScrollableAnchor id={id} offset={offset}>
      {children ? children : <span />}
    </ScrollableAnchor>
  )
}
