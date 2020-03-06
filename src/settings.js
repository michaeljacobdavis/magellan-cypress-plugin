const fs = require("fs");

const settings = {
  init(argv) {
    const configPath = argv["config-file"] || "cypress.json";
    settings.config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  }
};

module.exports = settings;
