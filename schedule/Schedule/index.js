// Libraries
import React from 'react'

// Components
import { Container } from '../../shared/Container'
import { DaySwitch } from '../DaySwitch'
import { Event } from '../Event'

// Icons
import Coffee from '../Coffee'
import Drinks from '../Drinks'
import Lunch from '../Lunch'

// Schedule
export class Schedule extends React.Component {

  state = { activeDate: 20 }

  setActiveDate = date => {
    this.setState({ activeDate: date })
  }

  render() {

    return (
      <Container>

        <DaySwitch
          activeDate={this.state.activeDate}
          handleClick={e => this.setActiveDate(e)} />

        { this.state.activeDate === 20
          ? <ThursdaySchedule />
          : <FridaySchedule />
        }

        <DaySwitch
          activeDate={this.state.activeDate}
          handleClick={e => this.setActiveDate(e)} />

      </Container>
    )
  }
}

// Thursday's Schedule
const ThursdaySchedule = () => (
  <div>
    <Event
      timeslot="8:00 am - 9:30 am"
      title="Registration"
      icon={<Coffee/>}
      length="1 h 30 min"
      tag="Welcoming"
    />

    <Event
      timeslot="9:30 am - 10:00 am"
      title="Keynote: GraphQL before GraphQL"
      photo="/static/schedule/dan@2x.png"
      author="Dan Schafer"
      length="30 min"
      tag="Talk"
      color="#74018B"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="10:00 am - 10:30 am"
      title="FB client side tooling"
      photo="/static/schedule/matt@2x.png"
      author="Matt Mahoney"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="10:30 am - 11:00 am"
      title="Coffee break"
      icon={<Coffee/>}
      length="30 min"
      tag="Break"
    />

    <Event
      timeslot="11:00 am - 11:30 am"
      title="Front end testing/mocking"
      photo="/static/schedule/sashko@2x.png"
      author="Sashko Stubailo"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="11:30 am - 12:00 pm"
      title="Testing?"
      photo="/static/schedule/sasha@2x.png"
      author="Sasha Solomon"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="12:00 pm - 12:15 pm"
      title="Refactoring Your Mind from REST"
      photo="/static/schedule/lachlan@2x.png"
      author="Lachlan"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="12:15 pm - 2:00 pm"
      title="Lunch break"
      icon={<Lunch/>}
      length="1 h 45 min"
      tag="Break"
    />

    <Event
      timeslot="2:00 pm - 2:30 pm"
      title="Paving a New Path for GraphQL Schemas"
      photo="/static/schedule/no-face@2x.png"
      author="Tim Griesser"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="2:30 pm - 3:00 pm"
      title={`Introducing Tartiflette: "SDL First" implementation built for Python 3.6+`}
      photo="/static/schedule/stan@2x.png"
      author="Stan Chollett"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="3:00 pm - 3:15 pm"
      title="Making design more human with GraphQL"
      photo="/static/schedule/bernardo@2x.png"
      author="Bernardo Rapos"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="3:15 pm - 3:45 pm"
      title="Coffee break"
      icon={<Coffee/>}
      length="30 min"
      tag="Break"
    />

    <Event
      timeslot="3:45 pm - 4:15 pm"
      title="How to Move a Mountain? GraphQL Migration Best Practices"
      photo="/static/schedule/no-face@2x.png"
      author="Kewei Qu"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="4:15 pm - 4:45 pm"
      title="So you Want to Distribute your GraphQL Schema?"
      photo="/static/schedule/marc@2x.png"
      author="Marc Andre-Giroux"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="4:45 pm - 5:00 pm"
      title="Compiling GraphQL to be Blazing Fast"
      photo="/static/schedule/rui@2x.png"
      author="Rui Araújo"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="5:00 pm - 5:15 pm"
      title="Closing"
      icon={<Coffee/>}
      length="15 min"
      tag="Closing"
    />
  </div>
)

// Friday's Schedule
const FridaySchedule = () => (
  <div>
    <Event
      timeslot="8:00 am - 9:30 am"
      title="Registration"
      icon={<Coffee/>}
      length="1 h 30 min"
      tag="Welcoming"
    />

    <Event
      timeslot="9:30 am - 10:00 am"
      title="End to end type safety"
      photo="/static/schedule/lauren@2x.png"
      author="Lauren Tan"
      length="30 min"
      tag="Talk"
      color="#74018B"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="10:00 am - 10:30 am"
      title="Type safety / GraphQL native dev / flexible"
      photo="/static/schedule/nikolas@2x.png"
      author="Nikolas Burk"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="10:30 am - 11:00 am"
      title="Coffee break"
      icon={<Coffee/>}
      length="30 min"
      tag="Break"
    />

    <Event
      timeslot="11:00 am - 11:30 am"
      title="Infinite Backwards Compatibility"
      photo="/static/schedule/adam@2x.png"
      author="Adam D. I. Kramer"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="11:30 am - 12:00 pm"
      title="Gatsby and GraphQL: Today and the Future"
      photo="/static/schedule/no-face@2x.png"
      author="Sidhartha Chatterjee"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="12:00 pm - 12:15 pm"
      title="Securing Your GraphQL API from Malicious Queries"
      photo="/static/schedule/no-face@2x.png"
      author="Max Stoiber"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="12:15 pm - 2:00 pm"
      title="Lunch break"
      icon={<Lunch/>}
      length="1 h 45 min"
      tag="Break"
    />

    <Event
      timeslot="2:00 pm - 2:30 pm"
      title="Apollo"
      photo="/static/schedule/james@2x.png"
      author="James Baxley"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="2:30 pm - 3:00 pm"
      title="GraphQL execution in-depth"
      photo="/static/schedule/no-face@2x.png"
      author="Andreas Marek"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="3:00 pm - 3:15 pm"
      title="Graphql Subscriptions at scale for Real-time monitoring dashboard"
      photo="/static/schedule/vimalraj@2x.png"
      author="Vimalraj Selvam"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="3:15 pm - 3:45 pm"
      title="Coffee break"
      icon={<Coffee/>}
      length="30 min"
      tag="Break"
    />

    <Event
      timeslot="3:45 pm - 4:15 pm"
      title="Real time"
      photo="/static/schedule/mirela@2x.png"
      author="Mirela Icleoden"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="4:15 pm - 5:00 pm"
      title="GraphQL Documentary"
      photo="/static/schedule/no-face@2x.png"
      length="45 min"
      tag="Documentary"
      color="#3D00C3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="5:00 pm - 5:30 pm"
      title="Timetravel"
      photo="/static/schedule/lee@2x.png"
      author="Lee Byron"
      length="30 min"
      tag="Closing Keynote"
      color="#CF0203"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    />

    <Event
      timeslot="5:30 pm - 5:40 pm"
      title="Closing"
      icon={<Coffee/>}
      length="10 min"
      tag="Closing"
    />

    <Event
      timeslot="5:40 pm - 9:00 pm"
      title="Party at Kosmos"
      icon={<Drinks/>}
      length="3 h 20 min"
      tag="Party"
    />

    <Event
      timeslot="9:00 pm - 12:00 pm"
      title="After Party at the Bar"
      icon={<Drinks/>}
      length="3 h"
      tag="After Party"
    />
  </div>
)