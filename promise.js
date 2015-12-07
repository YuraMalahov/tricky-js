"use strict";

function requestPromise(value) {
  var time = Math.floor((Math.random() * 1000));

  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(value), time);
  });
}

//***

Promise.resolve(requestPromise(1.1))
  .then((result) => console.log(result))
  .catch((error) => console.log('error1'));

//***

var p2 = requestPromise(2.1)
  .then(function (resultOfRequest) {
    console.log(resultOfRequest);
    return resultOfRequest;
  })
  .catch(function (error) {
    console.log('error2');
  });


//***

var p3 = requestPromise(3.1)
  .then(function (resultOfRequest) {
    console.log(resultOfRequest);
    return requestPromise(3.2);
  })
  .then(function (resultOfRequest2) {
    console.log(resultOfRequest2);
    return resultOfRequest2;
  })
  .catch(function (error) {
    console.log('error3');
  });

//***

var p4 = Promise.all([requestPromise(4.1), requestPromise(4.2)])
  .then(function (result) {
    console.log(result);
    return result;
  })
  .catch(function (error) {
    console.log('error4');
  });

//***

var p5 = Promise.race([requestPromise(5.1), requestPromise(5.2)])
  .then(function (result) {
    console.log(result);
    return result;
  })
  .catch(function (error) {
    console.log('error5');
  });

//***

var p6 = requestPromise(6.1)
  .then(function (result1) {
    return requestPromise(6.2)
      .then(function (result2) {
        console.log(result1, result2);
        return [result1, result2];
      });
  })
  .catch(function (error) {
    console.log('error5');
  });
