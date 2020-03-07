const glob = require("glob");
const Locator = require("./Locator");
const settings = require("./settings");

module.exports = function() {
  const testFiles = `cypress/integration/${settings.config.testFiles ||
    "**/*.*"}`;
  return glob.sync(testFiles).map(function(filename) {
    return new Locator(filename);
  });
};
