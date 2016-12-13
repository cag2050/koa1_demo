/**
 * Created by cag on 2016/12/13.
 */
var koa = require('koa');
var app1 = koa();

app1.use(function* () {
    console.log('this = ');
    console.log(this);
    console.log('this.request =');
    console.log(this.request);
    console.log('this.response =');
    console.log(this.response);
    this.cookies.set('name', 'cag');
    this.body = 'context例子';
    this.throw(403);
    //this.throw('name required',400);
    //this.throw(400,'name required');
    //this.throw('something explored');
});

app1.listen(3000);