/**
 * Created by gaotianyang on 2017/5/11 14:03
 **/
console.log('\u{1F680}' === '\uD83D\uDE80');    // true

//ES6共有6种方法可以表示一个字符
console.log('\z' === 'z');                      // true

//ES5不支持'\172'这种格式会导致无法转化 需要注释掉
// console.log('\172' === 'z');                    // true

console.log('\x7A' === 'z');                    // true
console.log('\u007A' === 'z');                  // true
console.log('\u{7A}' === 'z');                  // true