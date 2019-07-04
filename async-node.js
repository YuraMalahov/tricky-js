const fs = require('fs');

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('./private.pem', (error, data) => {
      if (error) {
        reject(error);

        return;
      }

      resolve(data);
    });
  })
}

console.log('Start script');

Promise.resolve(1).then(data => console.log(data, 'Promise.resolve'));

setTimeout(() => console.log(2, 'setTimeout'));

setImmediate(() => console.log(3, 'setImmediate'));

process.nextTick(() => console.log(4, 'nextTick'));

readFile().then(data => console.log(5, 'readFile')).catch(error => console.error(error));

console.log('Middle script');

process.nextTick(() => console.log(6, 'nextTick'));

setImmediate(() => console.log(7, 'setImmediate'));

setTimeout(() => console.log(8, 'setTimeout'));

Promise.resolve(9).then(data => console.log(data, 'Promise.resolve'));

readFile().then(data => console.log(10, 'readFile')).catch(error => console.error(error));

console.log('End script');


readFile().then(() => {
  console.log('---------------------------------');
  console.log('Start script');

  Promise.resolve(1).then(data => console.log(data, 'Promise.resolve'));

  setTimeout(() => console.log(2, 'setTimeout'));

  setImmediate(() => console.log(3, 'setImmediate'));

  process.nextTick(() => console.log(4, 'nextTick'));

  readFile().then(data => console.log(5, 'readFile')).catch(error => console.error(error));

  console.log('Middle script');

  process.nextTick(() => console.log(6, 'nextTick'));

  setImmediate(() => console.log(7, 'setImmediate'));

  setTimeout(() => console.log(8, 'setTimeout'));

  Promise.resolve(9).then(data => console.log(data, 'Promise.resolve'));

  readFile().then(data => console.log(10, 'readFile')).catch(error => console.error(error));

  console.log('End script');
});

/*

Start script
Middle script
End script
4 'nextTick'
6 'nextTick'
1 'Promise.resolve'
9 'Promise.resolve'
2 'setTimeout'
8 'setTimeout'
3 'setImmediate'
7 'setImmediate'
5 'readFile'
10 'readFile'
---------------------------------
Start script
Middle script
End script
1 'Promise.resolve'
9 'Promise.resolve'
4 'nextTick'
6 'nextTick'
3 'setImmediate'
7 'setImmediate'
2 'setTimeout'
8 'setTimeout'
5 'readFile'
10 'readFile'

*/
