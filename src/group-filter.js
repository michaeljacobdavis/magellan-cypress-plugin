const minimatch = require("minimatch");

module.exports = function(tests, glob) {
  return tests.filter(function(locator) {
    return minimatch(locator.filename, glob);
  });
};
