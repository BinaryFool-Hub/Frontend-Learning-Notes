/**
 * 它能够将字符串作为 JavaScript 代码执行。这个函数非常强大但也非常危险，需要谨慎使用。
 * */

let info = "3+5";
console.log(eval(info))  // 会执行表达式

let info_1 = eval("111");  // 原本的类型为string，后面会被剥离为number
console.log(typeof (info_1))  // 会被解析为数字类型
