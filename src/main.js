/**
 * Created by gaotianyang on 2017/5/11 13:55
 **/

{
    let a = 10;
    var b = 1;
}
let c = 1;

console.log(a); // ReferenceError: a is not defined.
console.log(b);  // 1
console.log(c);  // 1

var selected = allJobs.filter(job => job.isSelected());