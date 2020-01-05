const Koa = require('koa'); //require
const app = new Koa(); //new koa instance (main object)
const PORT = 3000;

app.use(ctx => {
  ctx.body = 'Hello World';
})

app.listen(PORT);
