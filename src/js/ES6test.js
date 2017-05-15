/**
 * Created by gaotianyang on 2017/5/15 14:17
 **/

//NO.1

//NO.2

//NO.3

//NO.4

//NO.5

//NO.6

//NO.7

//NO.8

//NO.9

//NO.10

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

//NO.13

//NO.14

//NO.15

//NO.16

//关于Object.assign的详细讲解    http://blog.csdn.net/qq_30100043/article/details/53422657
//NO.17     下面代码中，v1、v2、v3分别是字符串、布尔值和数值，结果只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。这是因为只有字符串的包装对象，会产生可枚举属性。
var v1 = 'abc';
var v2 = true;
var v3 = 10;

var obj = Object.assign({}, v1, v2, v3);
console.log(obj);

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