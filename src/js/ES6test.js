/**
 * Created by gaotianyang on 2017/5/15 14:17
 **/

//NO.1
// let [a = 1, b = 2] = [2, 1];
// console.log(a);
// console.log(b);

//NO.2
// {
//     function foo () { return 1 }
//     console.log(foo());
//     {
//         function foo () { return 2 }
//         foo() === 2;
//     }
//     console.log(foo());
// }

//NO.3
// console.log(a);
// let a = '1234';
// var b = '1234';
//
// let a = '1234';
// var b = '1234';
// console.log(window.a);
// console.log(window.b);

//NO.4
// const a = "qwe";
// // a="1234"; //报错
// const arr = [1,2,3,45,6];
// arr.push(123);
// console.log(arr); //[1,2,3,45,6,123]

//NO.5
// let b = {
//     name: 'lixingpeng',
//     age: '18',
//     sayMsg: function(){
//         setTimeout(function(){
//             console.log(this.name+" 的age是 "+this.age);
//         })
//     }
// };
//
// let c= {
//     name: 'lixingpeng',
//     age: '18',
//     sayMsg: function(){
//         setTimeout(()=>{
//             console.log(this.name+" 的age是 "+this.age);
//         })
//     }
// };
//
// b.sayMsg();
// c.sayMsg();

//NO.8
// var set1 = Array.from(new Set([1,1,2,2,33,'33',44,'44']));
// console.log(set1);

//NO.9
// function move({x, y} = { x: 0, y: 0 }) {
//     return [x, y];
// }
// move({x: 3, y: 8});
// console.log(move({x: 3, y: 8}));

//NO.10
// function foo() {
//     export default 'bar';
// }
// foo();
//  https://github.com/ruanyf/es6tutorial/search?utf8=%E2%9C%93&q=export%20default%20%27bar%27
//  上面代码中，`export`语句放在函数之中，结果报错。

//NO.11
// function bar(x=y;y=2){
//     return [x,y];
// }
// console.log( bar() );
//  题目出错？
// function bar(x=y,y=2){
//     return [x,y];
// }
// console.log( bar() );

//NO.12
// class Point{}
// var p1 = new Point(2,3);
// var p2 = new Point(3,2);
// p1.__proto__.printName = function () { return 'Oops' };
// p1.printName();     // "Oops"
// p2.printName();     // "Oops"
// var p3 = new Point(4,2);
// p3.printName();     // "Oops"
// console.log(p3.printName());

//NO.13
// let a=(x, y)=>({x,y});
// console.log(a(1,2));

//NO.14
// let b=(x, y)=>{x,y};
// console.log(b(1,2));

//NO.15
// let obj = {
//     name: "江上",
//     age: '',
//     saySelf: () => {
//         console.log(this.name)
//     }
// };
// obj.saySelf();          //报错
// console.log(obj.name);  //江上
// console.log(obj.age);   //''
// babel这里有bug this.name<=>window.name被识别成了undefined.name

//NO.16
//关于Object.assign的详细讲解    http://blog.csdn.net/qq_30100043/article/details/53422657
// var target = { a: 1 };
//
// var source1 = { b: 2 };
// var source2 = { c: 3 };
//
// Object.assign(target, source1, source2);
// console.log(target);

//NO.17
// var v1 = 'abc';
// var v2 = true;
// var v3 = 10;
// var obj = Object.assign({}, v1, v2, v3);
// console.log(obj);
//
// 上面代码中，v1、v2、v3分别是字符串、布尔值和数值，
// 结果只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。
// 这是因为只有字符串的包装对象，会产生可枚举属性。

//NO.18
// var objA = {a:1};
// var objB = {a:2};
// var objC = {B:3};
// var obj = Object.assign({},objA,objB,objC);
// console.log(obj);
// console.log(obj.a===objB.a);
// obj.a=4;
// console.log(obj.a===objB.a);
// console.log(objA,objB);

//NO.19     obj.a===objB.a=>true
// var objA = {a: {b: 1}};
// var objB = {a: {b: 2}};
// var obj = Object.assign({},objA, objB);
// obj.a.b = 3;
// console.log(objA);
// console.log(objB);
// console.log(obj);
// // console.log(obj.a===objB.a);     //true

//NO.20     ...c是前面内容匹配剩下的
// let {a, b , ...c} = {a:1, b: 2, d:3,e:4}
// console.log(c);

//NO.21
// let a = {a: 1, b:'abc'};
// let c = {...a};
// console.log(c);

//NO.22
// class Point {
//
//     constructor() {
//         this.x = 1;
//         this.y = 1;
//     }
//
//     toString() {
//         return '(' + this.x + ', ' + this.y + ')';
//     }
//
// }
// class Point1 extends Point{
//     constructor( color) {
//         super();
//         this.color = color;
//     }
//
//     toString() {
//         return this.color + ' ' + super.toString();
//     }
//     change() {
//         this.x = 2;
//     }
// }
// let cp = new Point1('red');
// let cp1 = new Point1('red');
// cp.change();
// cp.toString();
// cp1.toString();
// console.log(cp.change());
// console.log(cp.toString());
// console.log(cp1.toString());