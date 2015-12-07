"use strict";

function request(url) {
    var time = Math.floor((Math.random() * 1000));

    return new Promise(function (resolve) {
        setTimeout(() => resolve(url), time);
    });
}

function runGenerator(generator) {
    var it = generator(),
        ret;

    (function iterate(val){
        ret = it.next(val);

        if (!ret.done) {
            ret.value.then(iterate);
        }
    })();
}

function *main() {
    var result1 = yield request(1);
    var result2 = yield request(2);
    console.log("result: " + (result1 + result2));
}

runGenerator(main);
