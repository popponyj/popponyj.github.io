let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// 定义和赋值是分开的
var a;
console.log("The value of a is " + a); // a 的值是 undefined

console.log("The value of b is " + b);// b 的值是 undefined
var b;
// 在你阅读下面的‘变量声明提升’前你可能会疑惑

console.log("The value of c is " + c); // 未捕获的引用错误： c 未被定义

let x;
console.log("The value of x is " + x); // x 的值是 undefined

console.log("The value of y is " + y);// 未捕获的引用错误： y 未被定义
let y;

// 没有赋值则变量的值为undefined
var input;
if(input === undefined){
  doThis();
} else {
  doThat();
}

/*
这里的所有内容
都是注释。
*/

// 这是一条注释。

// 运算符
// 加号+
6 + 9;
"Hello " + "world!";
// 减- 乘* 除/
9 - 3;
8 * 2; //乘法在JS中是一个星号
9 / 3;
// 赋值运算符=
let myVariable = '李雷';
// 等于===
let myVariable = 3;
myVariable === 4; // false
// 不等于!===
let myVariable = 3;
myVariable !== 3; // false
// 取非!
let myVariable = 3;
!(myVariable === 3); // false

// 条件语句
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');
} else {
  alert('但是巧克力才是我的最爱呀……');
}

// 函数，用来封装可复用的功能
// 函数通常包括参数，参数中保存着一些必要的数据。它们位于括号内部，多个参数之间用逗号分开。
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

// alert() 函数在浏览器窗口内弹出一个警告框，还应为其提供一个字符串参数，以告诉它警告框里要显示的内容。
alert('hello!');

// 事件