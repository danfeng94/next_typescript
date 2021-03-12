const logger = require("./logger.js");

module.exports = (app) => {
  app.use(logger());
};
