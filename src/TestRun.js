module.exports = class TestRun {
  constructor(options) {
    Object.assign(this, options);
  }

  getCommand() {
    return "./node_modules/.bin/cypress";
  }

  getEnvironment(env) {
    return env;
  }

  getArguments() {
    return ["run", `--spec=${this.locator}`];
  }
};
