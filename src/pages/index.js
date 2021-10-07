import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { imageWrapper } from '../styles/index.module.css';
import { StaticImage } from 'gatsby-plugin-image';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
          }
          id
          slug
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="a corgi sitting on a bed with red paper hearts all over it. it looks unamused."
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>

      <h1>Hello world</h1>
      <Link to="/about">About</Link>

      <h2>Recent blog posts</h2>
      {posts.map(({ id, slug, frontmatter }) => (
        <li key={id}>
          <Link to={slug}>{frontmatter.title}</Link>{' '}
          <small>Posted at {frontmatter.date}</small>
        </li>
      ))}
    </Layout>
  );
}
