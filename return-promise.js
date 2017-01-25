"use strict";

function req(e) {
    return new Promise(function (resolve, reject) {
        if (e) {
            setTimeout(function () {
                reject(new Error(e));
            }, 500);
            return;
        }
        
        setTimeout(function () {
            resolve(Math.random() * 1000);
        }, 500);
    });
}

function reqJSON(e) {
    return req(e)
        .then(function (result) {
            return {result: result};
        })
        .catch(function (error) {
            console.log('reqJSON', error);
            throw {message: 'reqJSON error'};
        });
}

function reqGetJSON(e) {
    return reqJSON(e)
        .then(function (result) {
            result.status = 'OK';
            return result;
        })
        .catch(function (error) {
            console.log('reqGetJSON', error);
            throw {message:'reqGetJSON error'};
        });
}

reqGetJSON('crit')
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
        console.log(1+1);
    });

reqGetJSON()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
        console.log(1+1);
    });
    
