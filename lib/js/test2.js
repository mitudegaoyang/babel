"use strict";

/**
 * Created by gaotianyang on 2017/5/11 15:16
 **/
var a = [];

var _loop = function _loop(i) {
    a[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
a[6](); // 6