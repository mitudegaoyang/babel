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
//NO.12
//NO.13
//NO.14
//NO.15
//NO.16
//NO.17
//NO.18
//NO.19
var objA = {a: {b: 1}};
var objB = {a: {b: 2}};
var obj = Object.assign({},objA,objB)
obj.a.b = 3;
console.log(objA);
console.log(objB);
console.log(obj);

//NO.20
// let {a, b , ...c} = {a:1, b: 2, d:3,e:4}
// console.log(c);


//NO.21
// let a = {a: 1, b:'abc'};
// let c = {...a};
// console.log(c);


//NO.22