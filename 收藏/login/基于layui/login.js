layui.use(function () {
    var form = layui.form;
    var layer = layui.layer;
    // 提交事件
    form.on('submit(login)', function (data) {
        var field = data.field; // 获取表单字段值
        // 显示填写结果，仅作演示用
        console.log(JSON.stringify(field));
        layer.alert(JSON.stringify(field), {
            title: '当前填写的字段值'
        });
        // 此处可执行 Ajax 等操作
        // …
        return false; // 阻止默认 form 跳转
    });
});