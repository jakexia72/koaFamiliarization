const Koa = require('koa'); //require
const app = new Koa(); //new koa instance (main object)
const PORT = 3000;

app.context.userData = {
  'first' : 'Jake',
  'last' : 'Xia'
}

//log
app.use(async (ctx, next) => {
  await next(); //goes to next function
  const responseTime = ctx.response.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`)
})

app.use(async (ctx,next) => {
  const start = Date.now();
  await next(); //waits again
  const milisecond = Date.now() - start;
  ctx.set('X-Response-Time', `${milisecond}ms`)
})

//response
app.use(async (ctx) => {
   ctx.response.body = ctx.userData; //executes
});



app.listen(PORT);
