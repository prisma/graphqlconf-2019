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
          handleClick={e => this.setActiveDate(e)}
        />

        {this.state.activeDate === 20 ? (
          <ThursdaySchedule />
        ) : (
          <FridaySchedule />
        )}

        <DaySwitch
          activeDate={this.state.activeDate}
          handleClick={e => this.setActiveDate(e)}
        />
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
      icon={<Coffee />}
      length="1 h 30 min"
      tag="Welcoming"
    />

    <Event
      timeslot="9:30 am - 10:00 am"
      title="GraphQL before GraphQL"
      photo="/static/schedule/dan@2x.png"
      author="Dan Schafer"
      length="30 min"
      tag="Talk"
      color="#74018B"
    />

    <Event
      timeslot="10:00 am - 10:30 am"
      title="FB client side tooling"
      photo="/static/schedule/matt@2x.png"
      author="Matt Mahoney"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
    />

    <Event
      timeslot="10:30 am - 11:00 am"
      title="Coffee break"
      icon={<Coffee />}
      length="30 min"
      tag="Break"
    />

    <Event
      timeslot="11:00 am - 11:30 am"
      title="Building custom GraphQL tooling for your team"
      photo="/static/schedule/sashko@2x.png"
      author="Sashko Stubailo"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description={
        <>
          One of the main reasons we started using GraphQL for data fetching in
          the Stripe Dashboard was the variety of off-the-shelf tooling
          available in the community. As we integrated, we discovered
          opportunities to improve the stack, and some needs that were specific
          to Stripe. Thankfully, GraphQL also makes it really convenient to
          build custom tools to fit the specific needs of your project or
          organization. <br />
          <br />
          In this talk, you'll learn about why GraphQL is uniquely suited to
          building custom tooling that won’t create a huge maintenance burden.
          First, I’ll cover some examples of the tools we built for our GraphQL
          implementation at Stripe. Then, I'll go over how you can build on top
          of existing libraries including GraphQL.js and graphql-tools. Finally,
          I'll give a step-by-step guide to building a new custom tool that you
          could use at your own company—a script that tells you where a certain
          GraphQL field is used in your frontend code.
        </>
      }
    />

    <Event
      timeslot="11:30 am - 12:00 pm"
      title="200 OK! Error Handling in GraphQL"
      photo="/static/schedule/sasha@2x.png"
      author="Sasha Solomon"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="We all know what happens in GraphQL when things are going well, but what happens when things don't go so well? How do you handle errors in GraphQL? What is an error? Find out how not all 'errors' are errors, how we can have a better understanding of our data, and how to model domain errors in our GraphQL schema."
    />

    <Event
      timeslot="12:00 pm - 12:15 pm"
      title="Refactoring Your Mind from REST"
      photo="/static/schedule/lachlan@2x.png"
      author="Lachlan Young"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="Hit the ground running with GraphQL by refactoring your mental approach to how you write APIs. REST APIs revolve around fulfilling one purpose per endpoint. To work with GraphQL you have to think about multiple use cases in one endpoint, this talk covers exactly how to do that."
    />

    <Event
      timeslot="12:15 pm - 2:00 pm"
      title="Lunch break"
      icon={<Lunch />}
      length="1 h 45 min"
      tag="Break"
    />

    <Event
      timeslot="2:00 pm - 2:30 pm"
      title="SDL as an Artifact: Code-First Schemas and GraphQL Nexus"
      photo="/static/schedule/tim@2x.png"
      author="Tim Griesser"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Schema-first (SDL) development is common in the JS ecosystem, yet isn't in most other languages. Why? What if we challenged this 'best practice' with something even better - a library with a declarative API and full type safety out of the box - without needing manual type-annotation (even in JS)!"
    />

    <Event
      timeslot="2:30 pm - 3:00 pm"
      title={`Introducing Tartiflette: "SDL First" implementation built for Python 3.6+`}
      photo="/static/schedule/stan@2x.png"
      author="Stan Chollett"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Tartiflette is a brand new GraphQL Implementation built with and for python 3.6+, based on dailymotion's experience of running a GraphQL API in production for 2,5 years. We will discover some of the interesting features provided by the SDL First approach of the Tartiflette Engine."
    />

    <Event
      timeslot="3:00 pm - 3:15 pm"
      title="Making design more human with GraphQL"
      photo="/static/schedule/bernardo@2x.png"
      author="Bernardo Rapos"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="At first sight, design and GraphQL might seem completely unrelated, but can we use it to make design accessible to everyone? In this talk we'll see how GraphQL has the power to revolutionise the way designers, engineers and managers communicate. You'll have to query it to believe it!"
    />

    <Event
      timeslot="3:15 pm - 3:45 pm"
      title="Coffee break"
      icon={<Coffee />}
      length="30 min"
      tag="Break"
    />

    <Event
      timeslot="3:45 pm - 4:15 pm"
      title="How to Move a Mountain? GraphQL Migration Best Practices"
      photo="/static/schedule/kewei@2x.png"
      author="Kewei Qu"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Migration is a challenge the vibrant GraphQL community constantly faces. At Facebook, the  GraphQL server team and Relay team each carried out a massive migration independently. We distill the lessons we learned in both migrations into principles and practices to share with the community."
    />

    <Event
      timeslot="4:15 pm - 4:45 pm"
      title="So you Want to Distribute your GraphQL Schema?"
      photo="/static/schedule/marc@2x.png"
      author="Marc Andre-Giroux"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="We've been hearing a lot on GraphQL being an amazing tool to enable distribution of services and APIs. Schema stitching, API Gateways, namespaces, schema modules; Are we on the right track? Let's take a deep look at the role of GraphQL in a distributed architecture."
    />

    <Event
      timeslot="4:45 pm - 5:00 pm"
      title="Compiling GraphQL to be Blazing Fast"
      photo="/static/schedule/rui@2x.png"
      author="Rui Araújo"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="GraphQL has become a mainstream alternative to REST. The large majority of open source solutions are based on a runtime approach to execute queries. We  built a compiler for GraphQL that compiles each query to JS that is between 10 to 50 times faster than the runtime approach."
    />

    <Event
      timeslot="5:00 pm - 5:15 pm"
      title="Closing"
      icon={<Coffee />}
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
      icon={<Coffee />}
      length="1 h 30 min"
      tag="Welcoming"
    />

    <Event
      timeslot="9:30 am - 10:00 am"
      title="Create Type-Safe Web Applications with ReasonML and GraphQL"
      photo="/static/schedule/roy@2x.png"
      author="Roy Derks"
      length="30 min"
      tag="Talk"
      color="#74018B"
      description="ReasonML is a 'brand new' syntax based on OCaml and offers a rock-solid type system, which compiles to JavaScript. Together with GraphQLs query language you can create the web application of the future!"
    />

    <Event
      timeslot="10:00 am - 10:30 am"
      title="Yoga – Building type-safe GraphQL servers without boilerplate"
      photo="/static/schedule/nikolas@2x.png"
      author="Nikolas Burk"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description={
        <>
          The Yoga framework enables building fully type-safe GraphQL servers
          with a Ruby-on-Rails-like developer experience. Yoga follows a
          code-first approach and makes it easy to connect your resolvers to a
          database via Prisma. Yoga is lightweight, values conventions over
          configuration and comes with a built-in CLI to support common
          development workflows.
          <br />
          <br />
          This talk introduces the motivations behind Yoga, compares it to the
          currently popular "schema-first" approach for GraphQL servers and ends
          with a live demo of the Yoga framework.
        </>
      }
    />

    <Event
      timeslot="10:30 am - 11:00 am"
      title="Coffee break"
      icon={<Coffee />}
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
      description="GraphQL makes it easy for mobile designers and engineers to get graph data from a server somewhere. But many people fail to update their versioned clients such as iOS and Android. We discuss the communal and technical components of Facebook's approach to managing the lifecycle of a schema."
    />

    <Event
      timeslot="11:30 am - 12:00 pm"
      title="Gatsby and GraphQL: Today and the Future"
      photo="/static/schedule/no-face@2x.png"
      author="Sidhartha Chatterjee"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description={
        <>
          Gatsby uses GraphQL in a pretty unique way — type inference, automatic
          filter and connection generation. <br />
          <br />
          This talk will be a deep dive in we use GraphQL to support querying
          data from hundreds of different source plugins. We'll also look at the
          future of GraphQL at Gatsby and exciting new features.
        </>
      }
    />

    {/* <Event
      timeslot="12:00 pm - 12:15 pm"
      title="Securing Your GraphQL API from Malicious Queries"
      photo="/static/schedule/no-face@2x.png"
      author="Max Stoiber"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus luctus molestie. Maecenas eget magna vel nisl bibendum porttitor. Nulla facilisi. Sed vehicula ut nisl ac auctor. Proin bibendum, odio et sodales hendrerit, ex nunc dapibus tellus, non pellentesque diam justo quis nisi. Aliquam egestas orci ut sapien mattis, ut efficitur magna congue. Donec vehicula ex in odio auctor, sit amet finibus tortor tristique."
    /> */}

    <Event
      timeslot="12:00 pm - 12:15 am"
      title="To Be Announced"
      photo="/static/schedule/no-face@2x.png"
      author="To Be Announced"
      length="15 min"
      tag="Lightning Talk"
      color="#888"
    />

    <Event
      timeslot="12:15 pm - 2:00 pm"
      title="Lunch break"
      icon={<Lunch />}
      length="1 h 45 min"
      tag="Break"
    />

    <Event
      timeslot="2:00 pm - 2:30 pm"
      title="Apollo Schema Federation"
      photo="/static/schedule/james@2x.png"
      author="James Baxley"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description={
        <>
          GraphQL allows organizations to expose their data in a single graph,
          instead of as independent endpoints that require clients to be aware
          of service boundaries and to follow relationships between entities
          manually. Defining and deploying your data graph in a monolithic
          schema doesn’t scale however. <br />
          <br />
          As GraphQL adoption within an organization grows, schema design shifts
          from being a single team responsibility to being an organization-wide
          concern. In this talk, I will introduce Apollo schema federation which
          is the evolution of schema stitching.
        </>
      }
    />

    <Event
      timeslot="2:30 pm - 3:00 pm"
      title="GraphQL execution in-depth"
      photo="/static/schedule/no-face@2x.png"
      author="Andreas Marek"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="You use GraphQL, but you want to really understand how GraphQL works? So join us a for a in-depth explanation of how a GraphQL query is actually executed and how it is implemented."
    />

    <Event
      timeslot="3:00 pm - 3:15 pm"
      title="GraphQL Subscriptions at scale for Real-time monitoring dashboard"
      photo="/static/schedule/vimalraj@2x.png"
      author="Vimalraj Selvam"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="Our team in Visa built a real-time monitoring dashboard apart from Grafana to reduce the load on the server side by introducing Push model from the server side to the browsers using Graphql Subscriptions. This made us to reduce the load on our server by 5x and helps support team to decrease the MTD."
    />

    <Event
      timeslot="3:15 pm - 3:45 pm"
      title="Coffee break"
      icon={<Coffee />}
      length="30 min"
      tag="Break"
    />

    <Event
      timeslot="3:45 pm - 4:15 pm"
      title="GraphQL Subscriptions at Twitter"
      photo="/static/schedule/mirela@2x.png"
      author="Mirela Icleoden"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="The people who use Twitter need to see what's happening as soon as it happens. It's vital that we can deliver Tweets as fast as possible. Based on this mindset and need, TweetDeck and GraphQL teams built a new streaming system at Twitter that delivers Tweets in near real time. This talk covers the need for GraphQL Subscriptions at Twitter, a walk-through of the final architecture and the challenges that we faced while building it in a microservices ecosystem."
    />

    <Event
      timeslot="4:15 pm - 5:00 pm"
      title="GraphQL Documentary"
      photo="/static/schedule/no-face@2x.png"
      length="45 min"
      tag="Documentary"
    />

    <Event
      timeslot="5:00 pm - 5:30 pm"
      title="Timetravel"
      photo="/static/schedule/lee@2x.png"
      author="Lee Byron"
      length="30 min"
      tag="Closing Keynote"
      color="#CF0203"
    />

    <Event
      timeslot="5:30 pm - 5:40 pm"
      title="Closing"
      icon={<Coffee />}
      length="10 min"
      tag="Closing"
    />

    <Event
      timeslot="5:40 pm - 9:00 pm"
      title="Party at Kosmos"
      icon={<Drinks />}
      length="3 h 20 min"
      tag="Party"
    />

    <Event
      timeslot="9:00 pm - 12:00 pm"
      title="After Party at the Bar"
      icon={<Drinks />}
      length="3 h"
      tag="After Party"
    />
  </div>
)
