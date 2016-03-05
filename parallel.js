"use strict";

function parallel(pull, finalCallback) {
    let results = {},
        count = Object.keys(pull).length,
        successful = 0;

    Object.keys(pull).forEach(function (key) {
        try {
            pull[key](function (err, res) {
                if (err) {
                    throw err;
                }
                results[key] = res;
                successful++;
                if (successful === count) {
                    finalCallback(null, results);
                }
            });
        } catch (err) {
            finalCallback(err);
        }
    });
}

parallel({
    one: function (callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 300);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(null, 2);
        }, 200);
    },
    three: function (callback) {
        setTimeout(function () {
            callback(null, 3);
        }, 100);
    }
}, function (err, result) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
});
