class Locator {
  constructor(filename) {
    this.filename = filename;
  }

  toString() {
    return this.filename;
  }
}

module.exports = Locator;
