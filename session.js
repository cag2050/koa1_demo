/**
 * Created by cag on 2016/12/14.
 */
var koa = require('koa');
var session = require('koa-session');
var app = koa();

app.keys = ['some secret hurr'];

var CONFIG = {
    key: 'koa.sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true
};

app.use(session(CONFIG, app));

app.use(function* () {
    if (this.path === '/favicon.ico') return;

    var n = this.session.views || 0;
    this.session.views = ++n;
    //this.session.views = n++;
    this.body = n + ' views';
    this.session = null;
});

app.listen(3000);