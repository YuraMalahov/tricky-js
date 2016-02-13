'use strict';

Function.prototype.defer = function (ms) {
    let self = this;

    return function () {
        let args = arguments,
            context = this;

        setTimeout(function () {
            self.apply(context, args);
        }, ms);
    };
};

function f(a, b) {
    console.log(a+b);
}

f.defer(1000)(1, 2);
