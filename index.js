module.exports = {
  initialize: require("./src/settings").init,
  iterator: require("./src/get-tests"),
  filters: {
    tags: require("./src/filters/tags"),
    group: require("./src/filters/group"),
    bucket: require("./src/filters/bucket")
  },
  TestRun: require("./src/TestRun"),
  help: require("./src/help")
};
