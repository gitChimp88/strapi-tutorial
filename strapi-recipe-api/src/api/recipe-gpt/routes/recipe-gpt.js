module.exports = {
  routes: [
    {
      method: "POST",
      path: "/recipe-gpt/exampleAction",
      handler: "recipe-gpt.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
