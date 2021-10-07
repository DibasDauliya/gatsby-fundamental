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

      allSanityEpisode(
        sort: { fields: date, order: DESC }
        filter: { youtubeID: { ne: null } }
        limit: 20
      ) {
        nodes {
          id
          title
          guest {
            name
          }
          gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;
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
      <ul>
        {posts.map(({ id, slug, frontmatter }) => (
          <li key={id}>
            <Link to={slug}>{frontmatter.title}</Link>{' '}
            <small>Posted at {frontmatter.date}</small>
          </li>
        ))}
      </ul>

      <h2>
        Latest episodes of <em>Learn With Jason</em>
      </h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={episode.gatsbyPath}>
              {episode.title} (with {episode.guest?.[0]?.name})
            </Link>
          </li>
        ))}
      </ul>
      <a href="https://www.learnwithjason.dev/">
        Watch all episodes of <em>Learn With Jason</em>
      </a>
    </Layout>
  );
}
