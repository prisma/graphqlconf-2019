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
            name="Commerce Tools"
            logoSrc="/static/sponsors/commercetools.svg"
            about="Aenean accumsan ultricies neque, ac consequat velit porta eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="https://commercetools.com/" />
        </GridItem>
        <GridItem>
          <Company
            name="Github"
            logoSrc="/static/sponsors/github.svg"
            about="Aenean accumsan ultricies neque, ac consequat velit porta eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="https://github.com/" />
        </GridItem>
        <GridItem>
          <Company
            name="Shopify"
            logoSrc="/static/sponsors/shopify.svg"
            about="Aenean accumsan ultricies neque, ac consequat velit porta eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="https://shopify.com/" />
        </GridItem>
        <GridItem>
          <Company
            name="Hasura"
            logoSrc="/static/sponsors/hasura.svg"
            about="Aenean accumsan ultricies neque, ac consequat velit porta eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="https://hasura.io/" />
        </GridItem>
        <GridItem>
          <Company
            name="8base"
            logoSrc="/static/sponsors/8base.png"
            about="Aenean accumsan ultricies neque, ac consequat velit porta eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="https://8base.com/" />
        </GridItem>
        <GridItem>
          <Company
            name="Jahia"
            logoSrc="/static/sponsors/jahia.png"
            about="Aenean accumsan ultricies neque, ac consequat velit porta eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="https://www.jahia.com/home.html" />
        </GridItem>
        <GridItem>
          <Company
            name="Neo4j"
            logoSrc="/static/sponsors/neo4j.png"
            about="Aenean accumsan ultricies neque, ac consequat velit porta eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="https://neo4j.com" />
        </GridItem>
      </Grid>
    </Container>
  )
}
