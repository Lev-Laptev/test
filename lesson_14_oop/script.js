let name = 'ivan',
    age = 30,
    mail = 'ax@jhdb.com';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
    console.log(this);
};

fun();

let obj = {
    numder: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        }
        say();
    }
}

obj.sayNumber();


function cailOrDouble(numder, basis) {
    basis = basis || 2;
    console.log(numder * basis);
}
cailOrDouble(3, 5);
cailOrDouble(2);

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'blogger', 'livejournal'],
    internet = [...video, ...blogs, 'vk'];

    console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
let numders = [2, 7, 5];

log(...numbers);