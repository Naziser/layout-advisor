'use strict'

/*
    Функция должна принимать другую функцию и возвращать
    результат вызова этой функции
*/

function func(callback) {
    return callback();
}

function doSmth() {
    console.log('smth...');
}

func(doSmth);
