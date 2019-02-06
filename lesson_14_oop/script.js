let drink = 1;
function shoot(arrow, headshot, fail)  {
    console.log('you  can shot');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("you looser"); 
        }, 3000)
    });

    return promise;
}
function win() {
    console.log("you fun");
    (drink == 1) ? buyBeer() : giveMoney();
}
function buyBeer() {
    console.log("buy beer");
}
function giveMoney() {
    console.log("get money");
}
function loose() {
    console.log("you loose");
}
shoot({},
    function(mark) {
        console.log("you fun");
        win(mark, buyBeer, giveMoney);
    },
    function(miss) {
        console.log("you loos");
        loose();
    }
)




// let drink = 1;
// function shoot(arrow, headshot, fail)  {
//     console.log('you  can shot');

//     setTimeout(function () {
//        Math.random() > .5 ? headshot({}) : fail("you looser"); 
//     }, 3000)
// }
// function win() {
//     console.log("you fun");
//     (drink == 1) ? buyBeer() : giveMoney();
// }
// function buyBeer() {
//     console.log("buy beer");
// }
// function giveMoney() {
//     console.log("get money");
// }
// function loose() {
//     console.log("you loose");
// }
// shoot({},
//     function(mark) {
//         console.log("you fun");
//         win(mark, buyBeer, giveMoney);
//     },
//     function(miss) {
//         console.log("you loos");
//         loose();
//     }
// )