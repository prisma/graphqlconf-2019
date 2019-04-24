// Libraries
import React from 'react'

// Components
import { Container } from '../../shared/Container'
import { DaySwitch } from '../DaySwitch'
import { Event } from '../Event'

// Icons
import Coffee from '../Coffee'

// Schedule
// export const Schedule = () => {
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
            photo="https://via.placeholder.com/150"
            author="Dan Schafer"
            length="30 min"
            tag="Talk"
            color="#74018B"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
          />

          <Event
            timeslot="10:00 am - 10:30 am"
            title="FB client side tooling"
            photo="https://via.placeholder.com/150"
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
            photo="https://via.placeholder.com/150"
            author="Sashko Stubailo"
            length="30 min"
            tag="Talk"
            color="#3D00C3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
          />

          <Event
            timeslot="11:30 am - 12:00 pm"
            title="Testing?"
            photo="https://via.placeholder.com/150"
            author="Sasha Solomon"
            length="30 min"
            tag="Talk"
            color="#3D00C3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
          />

          <Event
            timeslot="12:00 pm - 12:15 pm"
            title="Refactoring Your Mind from REST"
            photo="https://via.placeholder.com/150"
            author="Lachlan"
            length="15 min"
            tag="Lightning Talk"
            color="#CF0203"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
          />

          <Event
            timeslot="12:15 pm - 2:00 pm"
            title="Lunch break"
            icon={<Coffee/>}
            length="1 h 45 min"
            tag="Break"
          />

          <Event
            timeslot="2:00 pm - 2:30 pm"
            title="Paving a New Path for GraphQL Schemas"
            photo="https://via.placeholder.com/150"
            author="Tim Griesser"
            length="30 min"
            tag="Talk"
            color="#3D00C3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
          />

          <Event
            timeslot="2:30 pm - 3:00 pm"
            title={`Introducing Tartiflette: "SDL First" implementation built for Python 3.6+`}
            photo="https://via.placeholder.com/150"
            author="Stan Chollett"
            length="30 min"
            tag="Talk"
            color="#3D00C3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
          />

          <Event
            timeslot="3:00 pm - 3:15 pm"
            title="Making design more human with GraphQL"
            photo="https://via.placeholder.com/150"
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
            photo="https://via.placeholder.com/150"
            author="Kewei Qu"
            length="30 min"
            tag="Talk"
            color="#3D00C3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
          />

          <Event
            timeslot="4:15 pm - 4:45 pm"
            title="So you Want to Distribute your GraphQL Schema?"
            photo="https://via.placeholder.com/150"
            author="Marc Andre-Giroux"
            length="30 min"
            tag="Talk"
            color="#3D00C3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
          />

          <Event
            timeslot="4:45 pm - 5:00 pm"
            title="Compiling GraphQL to be Blazing Fast"
            photo="https://via.placeholder.com/150"
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

        <DaySwitch
          activeDate={this.state.activeDate}
          handleClick={e => this.setActiveDate(e)} />

      </Container>
    )
  }
}