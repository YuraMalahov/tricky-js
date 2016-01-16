"use strict";

function request(cb) {
    let delay = Math.round(Math.random() * 1000);

    setTimeout(function () {
        cb(null, `ms delay: ${delay} - ok`);
    }, delay);
}

class Mp {
    constructor(cb) {
        this.result = null;
        this.thenCb = null;

        //let resolve = this.resolve.bind(this);
        let self = this,
            resolve = function () {
                return self.resolve.apply(self, arguments);
            };

        cb(resolve);
        return this;
    }

    resolve(result) {
        this.result = result;
        if (this.thenCb) {
            this.thenCb(result);
        }
    }

    then(cb) {
        this.thenCb = cb;
        if (this.result) {
            cb(this.result);
        }
    };
}

var promise = new Mp(function (resolve) {
    request(function (err, result) {
        resolve(result);
    });
}).then(function (result) {
    console.log('promise', result);
});
