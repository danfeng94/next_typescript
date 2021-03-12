let Router = require("koa-router");
let handler = require("../controller");

let router = new Router();

handler.forEach((r) => {
  router.all(r.path, r.handle);
});

module.exports = router;
