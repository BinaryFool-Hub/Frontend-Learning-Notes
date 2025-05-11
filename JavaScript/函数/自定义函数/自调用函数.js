/**
 * 如果没有返回值可以不使用变量接收
 * */
let value = (function (str1) {
    console.log("我自己会被自己调用执行");
    return 'hello ' + str1;
})('小明');


console.log(value);

/**
 * 这里的就不是变量了，而是别名
 * */
let value1 = (function (str1) {
    console.log("我自己会被自己调用执行");
    return 'hello ' + str1;
});


console.log(value1("小明")); // 调用别名函数