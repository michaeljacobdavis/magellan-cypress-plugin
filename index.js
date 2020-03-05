console.log(require("./src/get-tests")());
module.exports = {
  initialize: function(argv, options) {
    // plugin.settings.initialize(argv, options);
  },
  iterator: require("./src/get-tests"),
  // filters: {
  //   tag: tagFilter,
  //   tags: tagFilter,
  //   group: groupFilter,
  //   test: singleTestFilter,
  //   testFile: fileFilter
  // }
  // settings: require("./lib/settings"),
  TestRun: require("./src/TestRun")
  // help: require("./lib/help"),
  // getPluginOptions: require("./lib/options"),
  // profile: require("./lib/profile")
};
