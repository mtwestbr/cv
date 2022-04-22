

var images = ["images//dice1.png", "images//dice2.png", "images//dice3.png", "images//dice4.png", "images//dice5.png", "images//dice6.png" ];
var randDie1 = Math.floor(Math.random() * 6);
var randDie2 = Math.floor(Math.random() * 6);
document.querySelector("div.dice .img1").setAttribute('src', images[randDie1]);
document.querySelector("div.dice .img2").setAttribute('src', images[randDie2]);
if (randDie1 > randDie2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
} else if (randDie1 < randDie2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
} else {
  document.querySelector("h1").textContent = "Draw!"
}
