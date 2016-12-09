/**
 * Created by cag on 2016/12/9.
 */
function* sayHello() {
    var first, second;
    yield first = '111';
    yield second = '222';
    yield third = '333';
}
var say = sayHello();
console.log(1);
console.log('第一个yield的值：' + say.next().value); // 111 next()调用只会执行yield后面的表达式，下一次调用时,才会执行完yield所在行的表达式。
console.log(2);
console.log('第一个yield的值：' + say.next().value); // 222
console.log(3);
console.log('是否结束：' + say.next().done); // false
console.log(4);
console.log('是否结束：' + say.next().done); // true 说明：next()调用只会执行yield后面的表达式,下一次调用时,才会执行完yield所在行的表达式。
