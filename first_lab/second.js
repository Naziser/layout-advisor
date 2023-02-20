'use strict'

/*
    Функция должна принимать число (если ничего не передано, то воспринимать как 0)
    и возвращать новую функцию (foo). При вызове функции foo, переданное раннее 
    число должно быть увеличено на единицу и возвращено из foo
*/

function func(num = 0) {
    return function foo(){
        num++;
        return num;
    }
}

let result = func(-10);
console.log(result());
console.log(result());
console.log(result());
