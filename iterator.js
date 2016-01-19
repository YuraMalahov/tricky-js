"use strict";

class Fibonacci {
    constructor(end) {
        this.end = end;
        this.value = 0;
        this.prev = 1;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        if (this.value + this.prev > this.end) {
            return {done: true};
        }

        let res = {done: false, value: 0};

        res.value = this.value + this.prev;
        this.prev = this.value;
        this.value = res.value;

        return res;
    }
}

for (let num of new Fibonacci(20)) {
    console.log(num);
}
