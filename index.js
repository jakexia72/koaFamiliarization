const Koa = require('koa'); //require
const app = new Koa(); //new koa instance (main object)
const PORT = 3000;

//add date method to context
app.context.date = Date(); //add 'date' function to context

//response
app.use(ctx => {
  //use is the main syntax used to add any functions with the server
  //used to create functions etc, in this case, the function ctx.

  //use state
  ctx.state.user = 'Jake';

  //print hello world with date
  //use `` special quotes for template strings
  ctx.body = `Hello, ${ctx.state.user} on ${ctx.date}`;
})

app.listen(PORT);
