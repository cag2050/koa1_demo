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
    console.log('time = '+ms + 'ms');
});
// logger
app.use(function *(next) {
    var start = new Date();
    yield next;
    var ms = new Date() - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});
// response
app.use(function *() {
    this.body='hello generator!';
});

app.listen(3000);