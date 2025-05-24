# 介绍

介绍：一套遵循原生态开发模式的 Web UI 组件库，采用自身轻量级模块化规范，易上手，可以更简单快速地构建网页界面。

在2.x版本中里面封装了jQuery框架，如果想要使用直接声明引入即可

| 问题                   | Layui 2.x 答案            |
|----------------------|-------------------------|
| 是否内置 jQuery？         | 是，Layui 已封装 jQuery      |
| 是否需要单独导入 jQuery？     | 不需要                     |
| 是否可以使用 `$`？          | 可以，通过 `layui.jquery` 获取 |
| 如果我自己引入 jQuery 会冲突吗？ | 不会冲突，Layui 会自动处理        |

```javascript
layui.use(['jquery', 'layer'], function () {
    var $ = layui.jquery;  // layui 内部封装的 jQuery
    $('#test').on('click', function () {
        layer.msg('点击了按钮');
    });
});
```

# 相关网址

使用下载官网：https://layui.dev/

GitHub：https://github.com/layui/layui

# 模块的加载使用

## 按需加载/全量加载

推荐按需加载，否则可能导致代码运行过于冗长

```javascript
// 使用指定模块
layui.use(['layer', 'table'], function () {
    var layer = layui.layer;
    var table = layui.table;
    // do something
});
// 使用所有内置模块（layui v2.6 开始支持）
layui.use(function () {
    var layer = layui.layer;
    var table = layui.table;
    var laydate = layui.laydate;
    // …
    // do something
});
```

## callback返回参数声明

你还可以通过 callback 返回的参数得到模块对象，这样就不需要使用变量来定义一个新的对象，如果加载的过于冗长建议使用变量声明方式来写

两者写法都推荐，具体看开发者喜好

```javascript
// 按顺序传递参数，参数名字可以不一样
layui.use(['layer', 'table'], function (layer, table) {
    // 使用 layer
    layer.msg('test');
    // 使用 table
    table.render({});
});
```