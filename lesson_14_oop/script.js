let btn = document.getElementsByTagName('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

btn[0].addEventListener("click", function(event)  {
    let target = event.target;
    target.style.display = "none";
    console.log('событие: ' + event.type + ' на элементе: ' + event.target); 
});

wrap.addEventListener("click", function()  {
   console.log('событие: ' + event.type + ' на элементе: ' + event.target); 
});

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('событие: ' + event.type + ' на элементе: ' + event.target); 
});

btn.forEach(function(item) {
    item.addEventListener('mouseleavte', function() {
       console.log('vkli'); 
    });
});