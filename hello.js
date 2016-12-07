/**
 * Created by cag on 2016/12/8.
 */
var koa = require('koa');
var app = koa();

app.use(function *(next) {
    this.body = 'hello koa!';
});

app.listen(3000);