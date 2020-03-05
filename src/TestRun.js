module.exports = class TestRun {
  constructor(options) {
    this.options = options;
  }

  getCommand() {
    return "./node_modules/.bin/cypress";
  }

  getEnvironment(env) {
    return env;
  }

  getArguments() {
    return ["run", `--spec=${this.options.locator}`];
  }
};
