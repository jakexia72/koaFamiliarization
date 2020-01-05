const Koa = require('koa'); //require
const app = new Koa(); //new koa instance (main object)
const PORT = 3000;

//add date method to context
app.context.date = Date(); //add 'date' function to context
app.context.userData = {
  'first' : 'Jake',
  'last' : 'Xia'
}

//response
app.use(ctx => {

  //this example shows error handling
  if (ctx.userData){
    return ctx.response.body = ctx.userData;
  } else {
    return ctx.throw(400, 'data required');
  }
})

app.listen(PORT);
