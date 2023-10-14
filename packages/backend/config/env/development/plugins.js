module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
        introspection: true,
      },
    },
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
});
