import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

// page query
export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About this site"
      description="More information about this site"
    >
      <h1>About Page</h1>
      <GatsbyImage
        image={getImage(data.file)}
        alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling out and around it"
      />
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
