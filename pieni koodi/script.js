const squaresContainer = document.querySelector('#squares')

const number0Squares = 16;

let i  = 0;

let square1, square2;

let clickCount = 0;

let score = 0;

const playAgainBtn = document.querySelector("button")

playAgainBtn.style.visibility = "hidden"

playAgainBtn.addEventListener('click', playAgain)

 

document.querySelector("#score").style.visiblity = "hidden";

 

let colors = [

    "#33f33",

    "#33f33",

    "#ff944d",

    "#ff944d",

    "#88ccff",

    "#88ccff",

    "#ffff66",

    "#ffff66",

    "#ff4dff",

    "#ff4dff",

    "#ff1a1a",

    "ff1a1a",

    "#ddddd",

    "#ddddd",

    "#00099",

    "#00099",

];

 

function selectColor() {

    // 0-15

    const random = Math.floor(Math.random() * colors.length)

    const selected = colors[random]

    colors.splice(random, 1);

    return selected;

}

while ( i < number0Squares) {

    const square = document.createElement("li");

    const color = selectColor();

    square.setAttribute("data-color", color);

    squaresContainer.appendChild(square);

    i++;

}

 

const squares = document.querySelectorAll('li')

for (const square of squares) {

    square.addEventListener('click', squareClicked);

}

 

function squareClicked() {

    clickCount++;

    clickCount === 1 ? (square1 = this) : (square2 = this);

    if (clickCount === 1) {

        square1.style.background = square1.getAttribute("data-color");

    } else {

        square2.style.background = square2.getAttribute("data-color");

        checkMatch();

    }

}

 

function checkMatch() {

    let match =

    square1.getAttribute("data-color") === square2.getAttribute("data-color")

    if (!match) {

        setTimeout(function() {

            noMatch();

        }, 500);

    } else {

        isMatch();

        checkGameEnded()

    }

}

 

function noMatch() {

    square1.style.background = "";

    square2.style.background = "";

    clickCount = 0;

    console.log("no match")

}

function isMatch() {

    score++;

    document.querySelector("#score").innerText = score;

    document.querySelector("#score").style.visibility = "visible";

    square1.style.border = "none";

    square2.style.border = "none";

    square1.removeEventListener("click", squareClicked);

    square2.removeEventListener("click", squareClicked);

    clickCount = 0;

    console.log("is a match")

}

 

function checkGameEnded() {

    const target = number0Squares / 2;

    const gameOver = score === target ? true : false;

    if(gameOver) {

        playAgainBtn.style.visibility = "visible";

 

    }

}

 

function playAgain() {

    window.location.reload();

 

}

 

 

// selectColor();

// selectColor();

 

// console.log(selectColor());