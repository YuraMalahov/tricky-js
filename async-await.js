"use strict";

async function test() {
    console.log("start");
    
    var a = await request(1000);
    console.log(a);
    
    var b = await fetch();
    console.log(b);
    
    console.log("end");
    
    return "finish";
}

async function request(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("hi!");
        }, time)
    });
}

async function fetch() {
    return "world";
}

console.log("1");
test().then((result) => console.log(result));
console.log("2");


Promise
    .all([test(), test(), test()])
    .then(results => console.log(results));

test().then(result => console.log("1: ", result));
test().then(result => console.log("2: ", result));
test().then(result => console.log("3: ", result));
