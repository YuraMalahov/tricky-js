"use strict";

function getStockSymbol(name) {
    var symbol = ({
        'John & John': 'JAJ'
    })[name];

    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve(symbol);
       }, 500);
    });
}

function getStockPrice(symbol) {
    var price = ({
        JAJ: 123.123
    })[symbol];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(price);
        }, 500);
    });
}

function* getStock(name) {
    var symbol = yield getStockSymbol(name);
    var price = yield getStockPrice(symbol);
    return {
        symbol: symbol,
        price: price
    }
}

function spawn(generator) {
    return new Promise((resolve, reject) => {
        var onResult = (lastPromise) => {
            var {value, done} = generator.next(lastPromise);
            if (!done) {
                value.then(onResult, reject);
            } else {
                resolve(value);
            }
        };

        onResult();
    });
}

spawn(getStock('John & John'))
    .then(console.log)
    .catch(console.error);
