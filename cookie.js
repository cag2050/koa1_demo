var koa = require('koa');
var app = koa();

app.use(function *() {
    console.log(111);
    app.keys = ['1111', '222'];
    this.cookies.set('name', 'aaaaaaaaaaaa', {signed: true});
    this.body = 'hello koa333333!';
});

app.listen(3000);