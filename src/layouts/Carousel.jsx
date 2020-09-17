import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'react-bootstrap/Carousel';

export default () => (
 <StaticQuery
    query={graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `} 
  render={data=> (
      <Carousel className="full-width-md d-none d-md-block">
      {data.allFile.edges.map(pic => 
      <Carousel.Item>
          <Img fluid={pic.node.childImageSharp.fluid}/>
      </Carousel.Item>
      )}
  </Carousel>
  )}
    />
);