const glob = require("glob");
const Locator = require("./TestRun");

module.exports = function() {
  return glob.sync("cypress/**/*.spec.js").map(function(filename) {
    return new Locator(filename);
  });
};
