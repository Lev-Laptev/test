// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;

//     this.hello = function() {
//         console.log('hello' + this.name); 
//     }
// }
// User.prototype.exit = function(name) {
//     console.log('пользователь' + this.name + 'ушел');
// }
// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(alex);    
// console.log(ivan);    

// ivan.hello();
// alex.exit();


// es6

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }

    hello() {
        console.log('Hello ${this.name}')
    }
    exit() {
        console.log('пользователь ${this.name} ушел')
    }
}

let ivan = new User('Ivan', 23);
let alex = new User('Alex', 20);

console.log(alex);    
console.log(ivan);    

ivan.hello();
alex.exit();
