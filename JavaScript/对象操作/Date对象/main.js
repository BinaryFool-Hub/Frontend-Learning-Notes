/**
 * 实例化日期对象，处理日期相关的操作
 * 可以传入时间字符串以便实例化处理
 * */

// 两个格式都可以
// const date = '2025/4/11'
const date = '2025/4/11 10:00:00'

// const today = new Date();
const today = new Date(date);


/** 设置时间
 *
 * 下面是其他方法：
 *      setMinutes(0, 0, 0) → 设置分钟、秒、毫秒为 0。
 *      setSeconds(0, 0) → 设置秒、毫秒为 0。
 *      setMilliseconds(0) → 设置毫秒为 0。
 * */
today.setHours(0, 0, 0, 0);


/**
 * 获取毫秒
 * 上面设置了小时及往后都归零，所以获取的毫秒也会发生改变
 * */
const millisecond = today.getTime();
console.log("毫秒：" + millisecond);

/**
 * 转换为参数里面的时间区域格式展示，里面参数传递日期格式展示区域
 * */
const locale_string = today.toLocaleString('zh-CN');
// const locale_string = today.toLocaleString('en-US');
console.log("区域时间字符串格式：" + locale_string);
