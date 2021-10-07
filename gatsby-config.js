module.exports = {
  siteMetadata: {
    siteUrl: 'https://example.com',
    title: 'Gatsby fundamental',
    description: 'Fundamental of Gatsby js',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    // for MDX blog
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/layout.js'),
        },
      },
    },
    // end MDX
  ],
};
