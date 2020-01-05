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
  //use is the main syntax used to add any functions with the server
  //used to create functions etc, in this case, the function ctx.

  //use state
  //ctx.state.user = 'Jake';

  //request object
  let origin = ctx.request.origin //check documentation for request


  //print hello world with date
  //use `` special quotes for template strings
  ctx.response.body = `Hello, ${ctx.userData.first} ${ctx.userData.last} on ${ctx.date}`;
  //ctx.response.body = ctx.userData.first;
  console.log(origin);
})

app.listen(PORT);
