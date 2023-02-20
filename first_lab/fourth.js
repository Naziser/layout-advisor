'use strict'

/*
    Напишите функцию pow(x.n) , которая возводит x в степень n
    и возвращает результат
*/

function pow(x, n) {
    let num = x; 

    if (n === 0) {
        return 1;
    }

    for (let i = 1; i < n; i++) {
        num *= x;
    }
    return num;
}

console.log(pow(3,0));