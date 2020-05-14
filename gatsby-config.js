module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby Wrokshop',
    description:
      'A site we built together during a full-day Frontend Masters Gatsby Workshop',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'content/posts',
      },
    },
  ],
};
