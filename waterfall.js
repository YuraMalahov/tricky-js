"use strict";

function waterfall(pull, finalCallback) {
    let next = 0;

    (function callback() {
        let args = [].slice.call(arguments);

        try {
            if (next >= pull.length) {
                finalCallback(null, args[args.length - 1]);
                return;
            }
            if (args[0]) {
                throw args[0];
            }

            args.shift();
            args.push(callback);
            next++;
            pull[next - 1].apply(null, args);
        } catch (err) {
            finalCallback(err);
        }
    })();
}

waterfall([
    function (callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 300);
    },
    function (a, callback) {
        console.log(a);
        setTimeout(function () {
            callback(null, 2, 3);
        }, 200);
    },
    function (a, b, callback) {
        console.log(a, b);
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
