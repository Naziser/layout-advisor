'use strict'

/*
    Напишите аналог встроенного метода forEach
    для работы с массивами 
*/

const array = ['Apple', 'Mango', 'Orange'];

function eachFor(arr, callback){
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}


function doSmth(currentValue, index, array) {
    console.log(`Value: ${currentValue}| Index: ${index}| Array: ${array}`);
}

eachFor(array, doSmth);
