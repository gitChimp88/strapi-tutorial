"use strict";

module.exports = {
  exampleAction: async (ctx) => {
    try {
      const response = await strapi
        .service("api::recipe-gpt.recipe-gpt")
        .recipeService(ctx);

      ctx.body = { data: response };
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },
};
