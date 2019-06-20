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

  handleDayClick = date => {
    this.setState({ activeDate: date })
    document
      .getElementById('talks')
      .scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <Container id="talks">
        <DaySwitch
          activeDate={this.state.activeDate}
          handleClick={e => this.handleDayClick(e)}
        />

        {this.state.activeDate === 20 ? (
          <ThursdaySchedule />
        ) : (
          <FridaySchedule />
        )}

        <DaySwitch
          activeDate={this.state.activeDate}
          handleClick={e => this.handleDayClick(e)}
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
      title="Scaling Your GraphQL Client"
      photo="/static/schedule/matt@2x.png"
      author="Matt Mahoney"
      length="30 min"
      tag="Talk"
      description="GraphQL's JSON responses are great. At least until you try to get a field that doesn't exist. Our client GraphQL interfaces can lead to surprising scaling issues. Learn from our mistakes. See how client model choices can prevent bugs and help your team scale."
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
      timeslot="12:00 pm - 1:30 pm"
      title="Lunch break"
      icon={<Lunch />}
      length="1 h 30 min"
      tag="Break"
    />

    <Event
      timeslot="1:30 pm - 2:00 pm"
      title="SDL as an Artifact: Code-First Schemas and GraphQL Nexus"
      photo="/static/schedule/tim@2x.png"
      author="Tim Griesser"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Schema-first (SDL) development is common in the JS ecosystem, yet isn't in most other languages. Why? What if we challenged this 'best practice' with something even better - a library with a declarative API and full type safety out of the box - without needing manual type-annotation (even in JS)!"
    />

    <Event
      timeslot="2:00 pm - 2:30 pm"
      title={`Introducing Tartiflette: "SDL First" implementation built for Python 3.6+`}
      photo="/static/schedule/stan@2x.png"
      author="Stan Chollett"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Tartiflette is a brand new GraphQL Implementation built with and for python 3.6+, based on dailymotion's experience of running a GraphQL API in production for 2,5 years. We will discover some of the interesting features provided by the SDL First approach of the Tartiflette Engine."
    />

    <Event
      timeslot="2:30 pm - 2:45 pm"
      title="Making design more human with GraphQL"
      photo="/static/schedule/bernardo@2x.png"
      author="Bernardo Raposo"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="At first sight, design and GraphQL might seem completely unrelated, but can we use it to make design accessible to everyone? In this talk we'll see how GraphQL has the power to revolutionise the way designers, engineers and managers communicate. You'll have to query it to believe it!"
    />

    <Event
      timeslot="2:45 pm - 3:15 pm"
      title="Coffee break"
      icon={<Coffee />}
      length="30 min"
      tag="Break"
    />

    <Event
      timeslot="3:15 pm - 3:45 pm"
      title="How to Move a Mountain? GraphQL Migration Best Practices"
      photo="/static/schedule/kewei@2x.png"
      author="Kewei Qu"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="Migration is a challenge the vibrant GraphQL community constantly faces. At Facebook, the  GraphQL server team and Relay team each carried out a massive migration independently. We distill the lessons we learned in both migrations into principles and practices to share with the community."
    />

    <Event
      timeslot="3:45 pm - 4:15 pm"
      title="So you Want to Distribute your GraphQL Schema?"
      photo="/static/schedule/marc@2x.png"
      author="Marc Andre-Giroux"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="We've been hearing a lot on GraphQL being an amazing tool to enable distribution of services and APIs. Schema stitching, API Gateways, namespaces, schema modules; Are we on the right track? Let's take a deep look at the role of GraphQL in a distributed architecture."
    />

    <Event
      timeslot="4:15 pm - 4:30 pm"
      title="Compiling GraphQL to be Blazing Fast"
      photo="/static/schedule/rui@2x.png"
      author="Rui Araújo"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="GraphQL has become a mainstream alternative to REST. The large majority of open source solutions are based on a runtime approach to execute queries. We  built a compiler for GraphQL that compiles each query to JS that is between 10 to 50 times faster than the runtime approach."
    />

    <Event
      timeslot="4:30 pm - 4:45 pm"
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
      title="Code-first & SDL-first GraphQL Server Development with Prisma"
      photo="/static/schedule/nikolas@2x.png"
      author="Nikolas Burk"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description={
        <>
          Code-first and SDL-first are two approaches for constructing GraphQL
          schemas. This talk compares both approaches and gives a demo
          showcasing how developers can choose either approach while using
          Prisma to connect their resolvers to a database.
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
      photo="/static/schedule/kyle@2x.jpg"
      author="Kyle Mathews"
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

    <Event
      timeslot="12:00 pm - 12:15 pm"
      title="Evolving the Graph"
      photo="/static/schedule/jon@2x.png"
      author="Jon Wong"
      length="15 min"
      tag="Lightning Talk"
      color="#CF0203"
      description="Federation. Schema Stitching. Delegation. How can you grow your “graph” in a safe, scalable way? What are the real-world benefits and drawbacks to GraphQL when not all of it is under your control?
      
      Hear how the ways we scaled our GraphQL adoption changed over the last three years."
    />

    {/* <Event
      timeslot="12:00 pm - 12:15 am"
      title="Evolving the Graph"
      photo="/static/schedule/jon@2x.png"
      author="To Be Announced"
      length="15 min"
      tag="Lightning Talk"
      color="#888"
    />
    */}

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
      title="GraphQL execution strategies"
      photo="/static/schedule/andreas@2x.png"
      author="Andreas Marek"
      length="30 min"
      tag="Talk"
      color="#3D00C3"
      description="You use GraphQL, but you want to really understand how a query is executed or how to deal with the N+1 problem? Join  us for a deep dive into the world of GraphQL execution strategies: we will look at how the specification defines GraphQL execution, how to handle the N+1 problem and which alternative execution strategies exists."
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
      timeslot="3:15 pm - 4:00 pm"
      title="Coffee break"
      icon={<Coffee />}
      length="45 min"
      tag="Break"
    />

    <Event
      timeslot="4:00 pm - 5:00 pm"
      title="GraphQL Documentary"
      photo="/static/schedule/graphql@2x.png"
      length="60 min"
      tag="Documentary"
    />

    <Event
      timeslot="5:00 pm - 5:30 pm"
      title="We’re gunna program like it’s 1999"
      photo="/static/schedule/lee@2x.png"
      author="Lee Byron"
      length="30 min"
      tag="Closing Keynote"
      color="#CF0203"
      description="The mental model for building for the web largely hasn’t changed in the last 20 years, but we’ve incorporated complexity, richness, grown our community a thousand fold, and scaled to billions. This year the web turns 30, and we look back at the steady march forward of better abstractions, better syntax, and better mental models that brought us here."
    />

    <Event
      timeslot="5:30 pm - 5:45 pm"
      title="Closing"
      icon={<Coffee />}
      length="15 min"
      tag="Closing"
    />

    <Event
      timeslot="5:45 pm - 9:00 pm"
      title="Party at Kosmos"
      icon={<Drinks />}
      length="3 h 15 min"
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
