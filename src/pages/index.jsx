import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout2 } from 'layouts';
import Img from 'gatsby-image';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout2>
      <Helmet title={'Home Page'} />
    
      <div className="container">
      <Carousel className="col md-12" >
      
      <Carousel.Item >
          <Img fluid={data.image1.childImageSharp.fluid} alt="This is the"/>
      </Carousel.Item>
      <Carousel.Item >
          <Img fluid={data.image2.childImageSharp.fluid} alt="This is the"/>
      </Carousel.Item>
      <Carousel.Item >
          <Img fluid={data.image3.childImageSharp.fluid} alt="This is the"/>
      </Carousel.Item>
      <Carousel.Item >
          <Img fluid={data.image4.childImageSharp.fluid} alt="This is the"/>
      </Carousel.Item>
    
      </Carousel>
      </div>
      
    </Layout2>
    
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    image1:file(relativePath: {eq: "1.jpg"}) {
      childImageSharp {
        fluid(maxWidth:1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2:file(relativePath: {eq: "2.jpg"}) {
      childImageSharp {
        fluid(maxWidth:1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3:file(relativePath: {eq: "3.jpg"}) {
      childImageSharp {
        fluid(maxWidth:1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4:file(relativePath: {eq: "4.jpg"}) {
      childImageSharp {
        fluid(maxWidth:1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

