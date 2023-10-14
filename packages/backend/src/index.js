"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const { toEntityResponseCollection } = strapi
      .plugin("graphql")
      .service("format").returnTypes;
    const extensionService = strapi.plugin("graphql").service("extension");
    extensionService.use({
      resolversConfig: {
        "Mutation.updateUsersPermissionsUser": {
          policies: [
            (context, { strapi }) => {
              /**
               * If user is authenticated and user to be updated
               * is same as the one making the request, return true.
               */
              return (
                context.state.isAuthenticated &&
                parseInt(context.state.user.id) === parseInt(context.args.id)
              );
            },
          ],
        },
      },
    });
    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: "UsersPermissionsMe",
          definition(t) {
            t.field("blog_likes", {
              type: "BlogRelationResponseCollection",
              resolve: async (root, args) => {
                const userData = await strapi.db
                  .query("plugin::users-permissions.user")
                  .findOne({
                    select: [],
                    where: { id: root.id },
                    populate: { blog_likes: true },
                  });
                return toEntityResponseCollection(userData.blog_likes ?? [], {
                  args,
                  resourceUID: "api::blogs.id",
                });
              },
            });
          },
        }),
      ],
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
