const glob = require("glob");
const Locator = require("./Locator");
const settings = require("./settings");

module.exports = function() {
  const testFiles = settings.config.testFiles || "cypress/integration/**/*.*";
  return glob.sync(testFiles).map(function(filename) {
    return new Locator(filename);
  });
};
