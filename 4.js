"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const sum = (numberOne, numberTwo) => {
    return Number(numberOne + numberTwo);
}
const subtraction = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
        return Number(numberOne - numberTwo);
    }
    return Number(numberTwo - numberOne);
}
const multiply = (numberOne, numberTwo) => {
    return Number(numberOne * numberTwo);
}
const division = (numberOne, numberTwo) => {
    return Number(numberOne / numberTwo);
}


console.log(sum(3, 2));
console.log(subtraction(3, 2));
console.log(multiply(3, 2));
console.log(division(3, 3));
