import React from 'react'

// Styles
import {
  Card,
  Illustration,
  Photo,
  Row,
  Main,
  Left,
  Title,
  Time,
  Right,
  Meta,
  MetaItem,
  Toggle,
  Arrow,
  Description,
  Bottom,
} from './style'

// Icons
import UserIcon from '../UserIcon'
import ClockIcon from '../ClockIcon'
import TagIcon from '../TagIcon'

// Event
export class Event extends React.Component {

  state = { isOpen: false }

  toggleDescription = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {

    const {
      icon,
      photo,
      timeslot,
      title,
      author,
      length,
      tag,
      color,
      description
    } = this.props

    return (
      <Card color={color}>
        <Row
          onClick={ description ? () => this.toggleDescription() : null }
          isToggleable={description || false}>
          <Illustration>
            {icon && icon}
            {photo && <Photo src={photo} alt={author} />}
          </Illustration>
          <Main>
            <Left>
              <Title color={color}>{title}</Title>
              <Meta>
                {author && <MetaItem><UserIcon /> {author}</MetaItem>}
                <MetaItem><ClockIcon /> {length}</MetaItem>
                <MetaItem><TagIcon /> {tag}</MetaItem>
              </Meta>
            </Left>

            <Right>
              <Time>{timeslot}</Time>
              { description &&
                <Toggle>
                  {this.state.isOpen ? "Close" : "Show More" }
                  <Arrow isOpen={this.state.isOpen} />
                </Toggle>
              }
            </Right>
          </Main>
        </Row>

        <Bottom
          onClick={ description ? () => this.toggleDescription() : null }
          isToggleable={description || false}>
          <Time>{timeslot}</Time>
          { description &&
            <Toggle>
              {this.state.isOpen ? "Close" : "Show More" }
              <Arrow isOpen={this.state.isOpen} />
            </Toggle>
          }
        </Bottom>

        { description && this.state.isOpen &&
          <Description>{description}</Description>
        }
      </Card>
    )

  }
}