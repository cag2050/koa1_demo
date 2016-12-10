/**
 * Created by cag on 2016/12/8.
 */
var koa = require('koa');
var app = koa();

app.use(function* () {
    //console.log(111);
    //yield next;
    console.log("aaaa");
    //this.cookies.set('name','jeff');
    //this.body = 'hello koa333333!';
});

app.listen(3000);