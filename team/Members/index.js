import React from 'react'

// Local
import { Container } from '../../shared/Container'
import { PersonProfile } from '../../shared/PersonProfile'
import { Grid, GridItem } from './style'

export const Members = () => {
  return (
    <Container>
      <Grid>
        <GridItem>
          <PersonProfile
            name="Emma Tracey"
            bio={`Emma is Co-Founder at Honeypot. Born in Dublin, Emma moved to Berlin after spending time in Colombia and South Africa. She is a former journalist and likes to write about team culture and diversity.`}
            photoSrc="/static/team/emma-tracey.jpg"
            twitter="emchenita"
            github="emmalou"
            medium="leep"
          />
        </GridItem>
        <GridItem>
          <PersonProfile
            name="Johannes Schickling"
            bio={
              'Johannes is a Berlin/SF-based entrepreneur  and founder of Prisma, a flexible backend platform combining GraphQL+ AWS Lambda. He previously built and sold the VR company “Optonaut”. Johannes studied computer science at KIT, Germany and loves cutting- edge mobile/web tech-nologies.'
            }
            photoSrc="/static/team/johannes-schickling.jpg"
            twitter="_schickling"
            github="schickling"
          />
        </GridItem>
        <GridItem>
          <PersonProfile
            name="Johanna Dahlroos"
            bio={`Johanna is the Digital Product Designer for Daimler Fleetboard Innovation Hub. She’s the creator of the GraphQL Conf branding and designs. Battling confusion and finding design solutions is what she does best. Born in Finland, based in Berlin.`}
            photoSrc="/static/team/johanna-dahlroos.jpg"
            twitter="batjohe"
            github="Batjohe"
          />
        </GridItem>
        <GridItem>
          <PersonProfile
            name="Oleg Ilyenko"
            bio={`Oleg is a passionate software engineer and speaker who loves innovative ideas and technology, challenging problems and working on things that help other people. Oleg is an author of Sangria - a scala GraphQL implementation.`}
            photoSrc="/static/team/oleg-ilyenko.jpg"
            twitter="easyangel"
            github="OlegIlyenko"
          />
        </GridItem>
        <GridItem>
          <PersonProfile
            name="Nikolas Burk"
            bio={`Nikolas is a GraphQL enthusiast who enjoys learning and teaching. He works at Prisma taking care of developer relations, writing tutorials, documentation, holds GraphQL workshops and is a frequent speaker at conferences.`}
            photoSrc="/static/team/nikolas-burk.jpg"
            twitter="nikolasburk"
            github="nikolasburk"
          />
        </GridItem>
        <GridItem>
          <PersonProfile
            name="Ekaterina Kromina"
            bio={`Ekaterina is a Growth Manager at Honeypot. Originally from Moscow, Kate moved to Amsterdam to study management in creative industries. With experience in advertising and cinema, she enjoys making events happen.`}
            photoSrc="/static/team/kate-kromina.jpg"
            twitter="kromina_ek"
          />
        </GridItem>
        <GridItem>
          <PersonProfile
            name="Mohammad Rajabifard"
            bio={`Mohammed is the maker of There.pm app. He will be moving to Europe soon to start the next journey ahead. Mo loves open source and any kind of art, design, photography, and film making! He's the maker of the GraphQL Conf website.`}
            photoSrc="/static/team/mo-rajabifard.jpg"
            twitter="morajabi"
            github="morajabi"
          />
        </GridItem>
        <GridItem>
          <PersonProfile
            name="Etel Sverdlov"
            bio={`Etel works on Community Building and Marketing at Prisma. Previously from New York, (and before that all over the US) she is now adjusting to and loving life in Berlin. She is excited about developer marketing, educational content, writing, and helping out with GraphQL Conf this year.`}
            photoSrc="/static/team/etel-sverdlov.jpg"
            twitter="etelsverdlov"
          />
        </GridItem>
        <GridItem>
          <PersonProfile
            name="Lee Byron"
            bio={`As one of the creators of GraphQL and lead of the GraphQL working group, Lee is certainly one of the most knowledgeable people in the entire GraphQL space. As a co-host of GraphQL Conf, Lee is part of the review committee for selecting the talks and holds the welcome and closing speeches. He works at Robinhood where he helps lead web engineering and previously worked on open source at Facebook. `}
            photoSrc="/static/speakers/lee-byron.jpg"
            twitter="leeb"
            github="leebyron"
          />
        </GridItem>
      </Grid>
    </Container>
  )
}
