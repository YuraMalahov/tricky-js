function func() {
    try {
        console.log('try');
        return 'return';
    } catch (e) {
        console.log('catch');
    } finally {
        console.log('finally');
    }
}

function func2() {
    try {
        console.log('try');
        throw new Error('Error :)');
        return 'return';
    } catch (e) {
        console.log('catch');
    } finally {
        console.log('finally');
    }
}

console.log(func());
console.log(func2());
