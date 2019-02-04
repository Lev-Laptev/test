let box = document.getElementById('box'); // #box
let btn = document.getElementsByTagName('button');// <button></button>
let circle = document.getElementsByClassName('circle');// .circle
let heart = document.querySelector('.heart');
let boxs = document.querySelectorAll('.heart');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

heart.fofEach(function(item, i, hearts){
    item.style.backgroundColor = 'blue';
});

let div = document.createElement('div'),
    text = document.createTextNode('youd');

div.classList.add('black');

document.body.appendChild(div);

document.body.insertBefore(div, circle[0]);

document.body.replaceChild(div, circle[0]);

div.innerHTML = '<h1>dfdfdffd</h1>';