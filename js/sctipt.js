'use strict';


//                  Homework


const myQuestion = prompt('How is your name?', '');

if(myQuestion == 'Alex') {
    alert('Hello, Alex! How r u?')
}else {
    console.log('You are not Alex!')
};
 


// Write functions 


const a = +prompt('Write down first number', '');
const b = +prompt('Write down second number', '');



  function sum (firstQuestion, secondQuestion) {

    if(firstQuestion == 2 && secondQuestion == 3) {
        return `The result: ${firstQuestion + secondQuestion}`
    }else {
        return console.log('Write down 2 or 5, please')
    }
};

function minus (firstQuestion, secondQuestion) {
    if(firstQuestion == 2 && secondQuestion == 3) {
        return `The result: ${secondQuestion - firstQuestion}`
    }else {
        return console.log('Write down 2 or 5, please')
    }
};

function divided (firstQuestion, secondQuestion) {
    if(firstQuestion == 2 && secondQuestion == 3) {
        return `The result: ${Math.round(secondQuestion / firstQuestion)}`
    }else {
        return console.log('Write down 2 or 5, please')
    }
};

function multiply (firstQuestion, secondQuestion) {
    if(firstQuestion == 2 && secondQuestion == 3) {
        return `The result: ${secondQuestion * firstQuestion}`
    }else {
        return console.log('Write down 2 or 5, please')
    }
};

console.log(sum(a, b)); 
console.log(minus(a, b));
console.log(divided(a, b));
console.log(multiply(a, b)); 


//              First Task

let admiName = '';
let admin = '';

admiName += 'John';
admin = admiName;

alert(admin);

//    Second Task

const planetEarth = '';
const currentUser = '';

//                Third Task


const numbers = '10' + 10;
console.log(numbers);   // Когда мы слаживаем что-то со строкой, в данном случае строка плюс число, нам выведется строка и результат будет не 20 как мы ожидаем, а ='1010'. Потому что число читается как строка и слаживает по итогу он строки, а не числа.














 