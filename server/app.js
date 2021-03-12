const Koa = require("koa");
const next = require("next");
const router = require("./router");
const bodyParser = require("koa-bodyparser");
const middleware = require("./middleware");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// 这里说一下app.prepare(),我们需要等待pages目录下的所有页面被编译完成，然后再启动koa的服务。
app.prepare().then(() => {
  const server = new Koa();
  //注入中间件
  middleware(server);
  server
    .use(bodyParser())
    .use(async (ctx, next) => {
      // 设置跨域 用不用插件都可
      ctx.set("Access-Control-Allow-Origin", "*");
      return next();
    })
    .use(async (ctx, next) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    }) //注入路由
    .use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
