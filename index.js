module.exports = {
  initialize: require("./src/settings").init,
  iterator: require("./src/get-tests"),
  filters: {
    // tag: tagFilter,
    // tags: tagFilter,
    group: require('./src/group-filter'),
    // test: singleTestFilter,
    // testFile: fileFilter
  },
  // settings: require("./lib/settings"),
  TestRun: require("./src/TestRun")
  // help: require("./lib/help"),
  // getPluginOptions: require("./lib/options"),
  // profile: require("./lib/profile")
};
