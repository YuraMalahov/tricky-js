"use strict";

function series(pull) {
    let next = 0;

    (function callback(err, res) {
        if (!pull[next]) {
            return;
        }
        if (err) {
            throw err;
        }

        next++;
        pull[next-1](callback);
    })(null, null);
}

series([
    function (callback) {
        setTimeout(function () {
            console.log(1);
            callback(null, 1);
        }, 300);
    },
    function (callback) {
        setTimeout(function () {
            console.log(2);
            callback(null, 2);
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            console.log(3);
            callback(null, 3);
        }, 100);
    }
]);
