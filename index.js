module.exports = {
  initialize: require("./src/settings").init,
  iterator: require("./src/get-tests"),
  filters: {
    tags: require("./src/tags-filter"),
    group: require("./src/group-filter")
  },
  TestRun: require("./src/TestRun"),
  help: require("./src/help")
};
