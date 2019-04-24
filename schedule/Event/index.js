import React from 'react'

// Locals
import {
  Card,
  Illustration,
  Photo,
  Row,
  Main,
  Top,
  Title,
  Time,
  Bottom,
  Meta,
  Author,
  Length,
  Tag,
  Toggle,
  Arrow,
  Description,
} from './style'

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
            <Top>
              <Title color={color}>{title}</Title>
              <Time>{timeslot}</Time>
            </Top>
            <Bottom>
              <Meta>
                {author && <Author>{author}</Author>}
                <Length>{length}</Length>
                <Tag>{tag}</Tag>
              </Meta>
              { description &&
                <Toggle>
                  {this.state.isOpen ? "Close" : "Show More" }
                  <Arrow isOpen={this.state.isOpen} />
                </Toggle>
              }
            </Bottom>
          </Main>
        </Row>
        { description && this.state.isOpen &&
          <Description>{description}</Description>
        }
      </Card>
    )

  }
}