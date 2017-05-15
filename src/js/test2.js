/**
 * Created by gaotianyang on 2017/5/11 15:16
 **/
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6