var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var gameLevel = 0;
var gameInProgress = false;

function printLevel(gameLevel) {
  $("h1").html("Level " + gameLevel);
}

$(document).keydown( function(event) {
  if (gameInProgress === false) {
    gameLevel = 0;
    printLevel(gameLevel);
    nextSequence();
    gameInProgress = true;
  }
})

function startOver() {
  gameInProgress = false;
  gameLevel = 0;
  gamePattern = [];
  userClickedPattern = [];
}

function playSound(currentColor) {
  var audio = new Audio("sounds/" + currentColor + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  var gameOver = false;
  for (var i = 0; (gameOver === false) && (i < currentLevel); i++) {
    if (userClickedPattern[i] !== gamePattern[i]) {
      gameOver = true;
    }
  }
  if (gameOver !== false) {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").html("Game Over, Press Any Key to Restart");
    startOver();
  } else {
    if (currentLevel === gameLevel) {
      setTimeout(function() {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  }
}

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gameLevel++;
  printLevel(gameLevel);
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  playSound(randomChosenColour);
}

$(".btn").click(function(event) {
  var userChosenColor = this.id;
  playSound(userChosenColor);
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length);
});
