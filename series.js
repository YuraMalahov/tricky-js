"use strict";

function series(pull, finalCallback) {
    let next = 0,
        results = [];

    (function callback(err, res) {
        try {
            results.push(res);
            if (next >= pull.length) {
                results.shift();
                finalCallback(null, results);
                return;
            }
            if (err) {
                throw err;
            }

            next++;
            pull[next - 1](callback);
        } catch (err) {
            finalCallback(err);
        }
    })();
}

series([
    function (callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 300);
    },
    function (callback) {
        setTimeout(function () {
            callback(null, 2);
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            callback(null, 3);
        }, 100);
    }
], function (err, result) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
});
