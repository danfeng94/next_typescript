const bodyParser = require("koa-bodyparser");
const logger = () => {
  return async (ctx, next) => {
    bodyParser();

    await next();
  };
};

module.exports = logger;
