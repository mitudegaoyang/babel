# es6测试

#### 1. 使用es6方法完成实现：var a=1，b=2 ==> b=1,a=2;

[答案: let [a = 1, b = 2] = [2, 1] ]

#### 2. 写出下列代码输出结果：

```
{
    function foo () { return 1 }
    console.log(foo());
    {
        function foo () { return 2 }
        foo() === 2;
    }
    console.log(foo());
}
```

[答案: 1 1 ]

#### 3. 写出下面代码运行结果：

```
console.log(a);
let a = '1234';
var b = '1234';
```

```
let a = '1234';
var b = '1234';
console.log(window.a);
console.log(window.b);
```

[答案: a is not defined  undefind 1234]

#### 4. 对下面的输出结果给出合理解释：

```
const a = "qwe";
// a="1234"; //报错
const arr = [1,2,3,45,6];
arr.push(123);
console.log(arr); //[1,2,3,45,6,123]
```
[答案:const声明一个只读的常量,一旦声明，常量的值就不能改变;
      常量arr是一个数组，这个数组本身是可写的; ]

#### 5. 写出下列代码运行结果并给出理由：

```
let b = {
  name: 'lixingpeng',
  age: '18',
  sayMsg: function(){
    setTimeout(function(){
      console.log(this.name+" 的age是 "+this.age);
    })
  }
};

let c= {
  name: 'lixingpeng',
  age: '18',
  sayMsg: function(){
    setTimeout(()=>{
      console.log(this.name+" 的age是 "+this.age);
    })
  }
};

b.sayMsg();
c.sayMsg();
```

[答案:第一个函数没有被调用，this指向windows，而windows里面的name是" ",没有age，所以结果是:age是undefind;
      第二个是箭头函数，箭头函数的 this 始终指向函数定义时的 this，而不是调用时候的,输出结果是:lixingpengage是18 ]

#### 7.  使用es6中的Set方法完成数组除重；
[ 答案:	new Set(arr)]
#### 8. 数组去重：使用Set；
[ 答案: new Set(arr)]

#### 9. 以下程序的输出结果是：
```
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
	
move({x: 3, y: 8});
```
[答案: [3,8]]


#### 10. 以下程序的输出结果是：
```
function foo() {
  export default 'bar';
}
foo()
```
[答案:报错]

####  11. [问答题] 看代码，写出输出结果；
```
function bar(x=y;y=2){
	return [x,y];
}
console.log( bar() );
```
[答案:报错]

#### 12. 看代码，写出输出结果；
```
class Point{}
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__.printName = function () { return 'Oops' };

p1.printName() // "Oops"
p2.printName() // "Oops"

var p3 = new Point(4,2);
p3.printName()
```
[答案:'Oops']

#### 13. 看代码，写结果：

```
let a=(x, y)=>({x,y});
console.log(a(1,2));
```
[答案:{ x: 1, y: 2 }]

#### 14. 看代码，写结果：

```
let a=(x, y)=>{x,y};
console.log(a(1,2));
```
[答案:undefind]

#### 15. 看代码，写结果：

```
let obj = {
	name: "江上",
	age,
	saySelf: () => {
		console.log(this.name)
	}
}
obj.saySelf();
```
[答案: undefind ]

#### 16. 看代码，写结果： 
```
var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target);

[答案:{a:1,b:2,c:3}]
```

#### 17. 看代码写结果：

```
var v1 = 'abc';
var v2 = true;
var v3 = 10;

var obj = Object.assign({}, v1, v2, v3);
console.log(obj);
```
[答案: { "0": "a", "1": "b", "2": "c" } ]

#### 18. 看代码写结果：

```
var objA = {a:1};
var objB = {a:2};
var objC = {B:3};
var obj = Object.assign({},objA,objB,objC);
console.log(obj);
obj.a=4;
console.log(objA,objB);
```
[答案:{a:2,B:3}; {a:1}; {a:2} ]

#### 19. 看代码写结果：
```
var objA = {a: {b: 1}};
var objB = {a: {b: 2}};
var obj = Object.assign({},objA,objB)
obj.a.b = 3;
console.log(objA);
console.log(objB);
console.log(obj);
```
[答案:{a: {b: 1}};{a: {b: 3}}; {a: {b: 3}}]

#### 20. 看代码写结果：

```
let {a, b , ...c} = {a:1, b: 2, d:3,e:4}
console.log(c);
```
[答案: {d:3,e:4} ]

#### 21. 看代码写结果：

```
let a = {a: 1, b:'abc'};
let c = {...a};
console.log(c);
```
[答案:{a: 1, b:'abc'}]

#### 22. 看代码写结果：

```
class Point {

  constructor() {
    this.x = 1;
    this.y = 1;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}
class Point1 extends Point{
	constructor( color) {
    super(); 
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString();
  }
  change() {
  	this.x = 2;
  }
}
let cp = new Point1('red');
let cp1 = new Point1('red');
cp.change();
cp.toString();
cp1.toString();
```
[ 答案:undefined  red(2,1) red(1,1) ]

