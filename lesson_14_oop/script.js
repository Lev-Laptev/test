'use strict'
function showThis(a, b) {
    console.log(this); 
    function sum() {
        console.log(this); 
        return a + b;
    }
    console.log(sum()); 
}

showThis(4,5);
showThis(7,5);
// 1) просто вызов функции - window/undefined

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
    }
}

obj.sum();

// 2) метод обьекта - this = обьект
// 3)  конструктор (new) - this = новый созданый обьект

let  user = {
    name: "joe"
}

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smit'));
console.log(sayName.apply(user, ['Show']));

function count(number) {
    return this * number;
}

let double = count.bind(2);

console.log(double(5));
console.log(double(10));

// 4) указание конкретного контекста - call apply bind

let btn = document.querySelector('button');
btn.addEventListener('click', function () {
    console.log(this);
    this.style.marginRight = '10px';
});