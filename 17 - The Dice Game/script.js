var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random()* 6) + 1;

if (p1 > p2) {
    document.querySelector(".header").innerHTML = "Player 1 Wins!";
} else if (p1 < p2) {
    document.querySelector(".header").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector(".header").innerHTML = "It's a Tie!";
}

document.querySelectorAll("img")[0].src = "./images/dice" + p1 + ".png";
document.querySelectorAll("img")[1].src = "./images/dice" + p2 + ".png";