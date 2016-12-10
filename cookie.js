var koa = require('koa');
var app = koa();

app.use(function *(next) {
    console.log(111);
    this.body = 'hello koa333333!';
    app.keys = ['1111'];
    this.cookies.set('name', 'bbb', {signed: true});
    //console.log(this.cookies.get('name'));
    //console.log(this.cookies.get('name.sig'));
    yield next;
});

app.listen(3000);