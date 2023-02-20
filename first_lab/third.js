'use strict'

/*
    Функция должна возвращать все переданные ей аргументы в виде массива.
    Количество переданных аргументов заранее неизвестно.
*/

function func(...args) {
    return args;
}

const array = func('a', 'b', 'c', 1, 2, 3);
console.log(array); 
