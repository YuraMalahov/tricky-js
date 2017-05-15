"use strict";

function add(a) {
    return function foo(b) {
        if (!b) {
            return a;
        }
        a += b;

        return foo;
    }
}

var res = add(1)(2)(3)(4)();
console.log(res);  // 10
