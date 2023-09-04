"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const inputNumberOne = Number(prompt("Введите 1-е число"));
const inputNumberTwo = Number(prompt("Введите 2-е число"));
const inputNumberThree = Number(prompt("Введите 3-е число"));

function findMaxNumber(inputNumberOne, inputNumberTwo, inputNumberThree) {
    let max = inputNumberOne;
    if (max <= inputNumberTwo) {
        max = inputNumberTwo;
    }
    if (max <= inputNumberThree) {
        max = inputNumberThree;
    }
    return Number(max);
}

const maxNumber = findMaxNumber(inputNumberOne, inputNumberTwo, inputNumberThree);

console.log(`Максимальное значение среди чисел 
            ${inputNumberOne}, ${inputNumberTwo}, ${inputNumberThree} равно 
            ${maxNumber}`);