console.log(2345)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var boxes_Text = document.getElementsByClassName('box');
var boxes_Color = document.getElementsByClassName('box');
console.log(boxes_Text);
var symbols = new Array();
symbols = [" ♪", " ◉", " ❤", " ✪", " ☺", " ♚", " ☯", " ☮"];
var colors = new Array();
colors = ["blue", "red", "grey", "pink", "green", "yellow", "purple", "silver"];

function getRandomSymbol() {
    var z;
    var x = getRandomInt(0, 8);
    z = symbols[x];
    return z + z + z;
}

function getRandomColor() {
    var z;
    var x = getRandomInt(0, 8);
    z = colors[x];
    return z;
}

for (var i = 0; i < boxes_Text.length; i++) {
    var randomNumber = getRandomInt(2, 90);
    var symbol = getRandomSymbol();
    console.log(randomNumber);
    var text = '';
    for (var k = 0; k < randomNumber; k++) {
        text = text + symbol;
    }
    boxes_Text[i].innerHTML = text;
    boxes_Color[i].style.backgroundColor = getRandomColor();
}
