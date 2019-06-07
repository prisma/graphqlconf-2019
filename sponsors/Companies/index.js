import React from 'react'

// Local
import { Container } from '../../shared/Container'
import { Grid, GridItem } from './style'
import { Company } from './company'

export const Companies = () => {
  return (
    <Container>
      <Grid>
        <GridItem>
          <Company
            name="commercetools"
            logoSrc="/static/sponsors/commercetools.svg"
            about="commercetools is a next-generation software company that offers a cloud-based, headless commerce platform, providing the building blocks for the new digital commerce age. commercetools was founded in 2006. Brands such as Bang & Olufsen, Carhartt WIP, Express, and Wizards of the Coast (Hasbro) trust commercetools to power their digital commerce business."
            link="https://commercetools.com/"
          />
        </GridItem>
        <GridItem>
          <Company
            name="8base"
            logoSrc="/static/sponsors/8base.png"
            about="8base is the only GraphQL based application development platform that enables front-end developers to build full enterprise apps using the modern enterprise data model. 
            "
            link="https://8base.com/"
          />
        </GridItem>
        <GridItem>
          <Company
            name="Jahia"
            logoSrc="/static/sponsors/jahia.png"
            about="Jahia makes digital experience simpler. Our open-source applications snap-in to your existing stack for stand-out experiences.  Start with content management and expand to personalize, optimize and scale experiences -- with unified customer data, everywhere."
            link="https://www.jahia.com/home.html"
          />
        </GridItem>
        <GridItem>
          <Company
            name="Neo4j"
            logoSrc="/static/sponsors/neo4j.png"
            about="Neo4j is a native graph database that allows developers to model, store, and query data as a graph. The Neo4j GraphQL integrations enable developers to create GraphQL APIs backed by Neo4j using only GraphQL type definitions, leveraging the GRANDstack.io framework for building fullstack applications, all powered by GraphQL and Neo4j."
            link="https://neo4j.com"
          />
        </GridItem>
        <GridItem>
          <Company
            name="Github"
            logoSrc="/static/sponsors/github.svg"
            about="GitHub brings together the world's largest community of developers to discover, share, and build better software."
            link="https://github.com/"
          />
        </GridItem>
        <GridItem>
          <Company logoSrc="/static/sponsors/shopify.svg" />
        </GridItem>
        <GridItem>
          <Company logoSrc="/static/sponsors/hasura.svg" />
        </GridItem>
      </Grid>
    </Container>
  )
}
