const minimatch = require("minimatch");

module.exports = function(tests, glob) {
  return tests.filter(locator => minimatch(locator.filename, glob));
};
