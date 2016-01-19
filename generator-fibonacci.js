"use strict";

function * fibonacci (end) {
    let current = 0,
        prev = 1;

    while (current + prev < end) {
        current = current + prev;
        prev = current - prev;

        current = yield current;
    }
}

let it = fibonacci(20),
    result = it.next();

while (!result.done) {
    console.log(result.value);
    result = it.next(result.value);
}
