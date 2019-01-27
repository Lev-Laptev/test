function first() {
    setTimeout( function() {
        console.log(1);
    }, 1000);
}
function second() {
    console.log(2);
}

first();
second();

function learnJs(lang, callback) {
    console.log("я учу" + lang);
    callback();
}

function done() {
    console.log("rdrdefdfdf");
}
learnJs("javaScript", done);