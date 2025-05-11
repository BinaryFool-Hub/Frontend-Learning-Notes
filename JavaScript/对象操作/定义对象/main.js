// 定义对象
const obj = {
    'name': '小明',
    age: 19
};

// 这两种定义/更新属性都行
obj["career"] = "爬虫工程师";
obj.hobby = "python";

// 还可用存放函数
obj["fun"] = function () {
    console.log("hello word");
};

// 调用函数只需要在取值的时候加一个括号，有参数就传递参数即可
obj["fun"]();

// 这两行取值方式都可以
console.log(obj["name"]);
console.log(obj.name);
