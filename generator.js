/**
 * Created by cag on 2016/12/8.
 */
var koa = require('koa');
var app = koa();
// X-Response-Time
app.use(function *(next) {
    //this.body = 'hello koa!';
    var start = new Date();
    yield next;
    var ms = new Date() - start;
    console.log('执行1,' + ms + 'ms');
});
// logger
app.use(function *(next) {
    var start = new Date();
    yield next;
    var ms = new Date() - start;
    console.log('执行2,' + ms + 'ms');
});
// response
app.use(function *() {
    var start = new Date();
    this.body = 'hello generator!';
    var ms = new Date() - start;
    console.log('执行3,' + ms + 'ms');
});

app.listen(3000);