# 对象的定义方式

构造函数或 class才可以new来实例化，这里的是Object不需要new实例化就可以使用

## 直接定义

```javascript
// 传统
const obj_1 = new Object();

// 简化(推荐)
const obj = {};
```

## 初始化定义

| 类型               | 是否可以简写                |
|------------------|-----------------------|
| 普通属性（固定值）        | ❌ 不行，必须使用键值对写法        |
| 简洁属性名（变量名与属性名一致） | ✅ 可以简写，如 `name, age`  |
| 方法（函数）           | ✅ 可以简写，如 `greet() {}` |
| 计算属性名            | ✅ 用 `[]` 包裹键名         |

### 常规定义

```javascript
const person = {
    'name': "小明",
    age: 19,
    hello_world: function () {
        console.log("hello word");
    }
}
```

### 当变量名和属性名一样时，可以省略值

```javascript
const name = '小明';
const age = 19;

const person = {
    name, // 等价于 name: name
    age   // 等价于 age: age
};
```

### 用 [] 语法动态生成属性名

```javascript
const key = 'job';

const person = {
    name: '小明',
    [key]: 'python工程师'  // 等价于 'job': 'python工程师'
};
```

### 函数(方法)定义简写

```javascript
const person = {
    greet() {
        console.log('Hello');
    }
};
```

# 访问与修改对象的属性和方法

里面可以存放属性和方法，如果没有则会创建，有会覆盖

## 属性

```javascript
/**
 * 两个方法都可行，看个人喜好
 * */

// 点的方式
obj.name = '小明';
console.log(obj.name);


// 类似python的字典方式
obj['name'] = '小明';
console.log(obj['name']);
```

## 方法

```javascript
/**
 * 两个方法都可行，看个人喜好
 * */

obj.fun = function () {
    console.log("hello word");
}
obj.fun();  // 调用

// 如果同名方法已存在，这里会覆盖原方法
obj["fun"] = function () {
    console.log("hello 111");
}
obj["fun"]();  // 调用
```

# 判断对象是否包含某个属性

- in：包括继承的
- hasOwnProperty()：仅自身属性，不包含继承

```javascript
const obj_root = {"name": "小明"};
const obj = Object.create(obj_root);  // 继承obj_root属性、方法
let result;

result = 'name' in obj;           // true，包括继承的
console.log(result)

result = obj.hasOwnProperty('name');  // true，仅自身属性，不包含继承
console.log(result)
```

# 对象的遍历方式

- for循环：会遍历出key
- Object.keys(): 只返回自身可枚举属性键，传入对象名称
- Object.values(): 只返回自身属性值，传入对象名称
- Object.entries(): 返回 \[键, 值] 组成的数组，传入对象名称

```javascript
const obj = {a: 1, b: 2};
let result;

for (let key in obj) {
    console.log(key, obj[key]); // 会遍历原型链上的属性
}

result = Object.keys(obj);      // 只返回自身可枚举属性键
console.log(result)
result = Object.values(obj);    // 只返回自身属性值
console.log(result)
result = Object.entries(obj);   // 返回 [键, 值] 组成的数组
console.log(result)
```

# 对象冻结、防修改

- Object.freeze(): 传入对象名称，让该对象不可添加/修改/删除属性

```javascript
const obj = {name: '小明'};

Object.freeze(obj);    // 不可添加/修改/删除属性
obj.name = '小红';     // 无效（静默失败）

console.log(obj.name)  // 还是小明
```

# 继承

简单的继承，还没有学到ES6语法

```javascript
const obj_root = {"name": "小明"};
const obj = Object.create(obj_root);  // 继承obj_root属性、方法

console.log(obj.name)
```