/**
 * Created by cag on 2016/12/8.
 */
var koa = require('koa');
var app = koa();
// X-Response-Time
app.use(function *(next) {
    //this.body = 'hello koa!';
    var start = new Date();
    console.log(1111);
    yield next;
    console.log(11100000);
    var ms = new Date() - start;
    console.log('执行1,' + ms + 'ms');
    this.set('X-Response-Time', ms + 'ms');
});
// logger
app.use(function *(next) {
    console.log(222);
    var start = new Date();
    yield next;
    console.log(2220000);

    var ms = new Date() - start;
    console.log('执行2,' + ms + 'ms');
});
// response
app.use(function *() {
    console.log(333);
    var start = new Date();
    this.body = 'hello generator!';
    var ms = new Date() - start;
    console.log('执行3,' + ms + 'ms');
});

app.listen(3000);