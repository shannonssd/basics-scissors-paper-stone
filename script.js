// Global variable to keep track of lastest winner
/// I've made changes over here.
var latestWinner = "It seems you drew on the first try! Please try again.";
// Global variables to keep track of game outcomes
var userWin = 0;
var compWin = 0;
var draws = 0;
// Global variable to store user's name
var userName = "";
// Global variable to change game state
var gameMode = "waiting for user to enter name";

var generateRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var assignNumToWord = function () {
  var randomNum = generateRandomNum();
  var programOutput = "";
  if (randomNum == 1) {
    programOutput = "scissors";
  }
  if (randomNum == 2) {
    programOutput = "paper";
  }
  if (randomNum == 3) {
    programOutput = "stone";
  }
  return programOutput;
};

// Function to determine message to player based on winning percentage
var displayMessage = "";
var winPercentage = 0;
var toDetermineMessage = function () {
  var message = "";
  if (winPercentage >= 50) {
    message = `Keep it up ${userName}! You're doing well!`;
  } else {
    message = `You're losing quite a bit ${userName}! But I believe in you! 😬`;
  }
  return message;
};

// Function to calculcate win percentage
var calculateWinPercentage = function () {
  return (userWin / (userWin + compWin + draws)) * 100;
};

// Function to execute normal SPS game
var normalSPS = function (userName, input) {
  var spsOutputValue = "";
  spsOutputValue = `Welcome to normal SPS!`;
  // Output message when changing modes
  if (input == "Computer") {
    spsOutputValue = `Welcome to computer's choice SPS! Type 'computer' to play!`;
  }
  if (input == "korean") {
    spsOutputValue = `Welcome to korean SPS!`;
  }
  if (
    input != "paper" &&
    input != "scissors" &&
    input != "stone" &&
    input != "reversed" &&
    input != "normal" &&
    input != "Computer" &&
    input != "korean"
  ) {
    spsOutputValue = `Invalid input ${userName}. <br> Please enter either scissors, paper or stone. <br> If you would like to play reversed mode type in reversed. <br> If you would like to go back to normal mode type in normal.`;
  }
  var computerChoice = assignNumToWord();

  if (
    (input == "scissors" && computerChoice == "stone") ||
    (input == "paper" && computerChoice == "scissors") ||
    (input == "stone" && computerChoice == "paper")
  ) {
    compWin = compWin + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    spsOutputValue = `Sorry ${userName}, you lost! 😿 <br> You chose ${input} <br>  The computer chose ${computerChoice} <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage} <br> <br>Please try again! ✂️🧻🗿`;
  }

  if (
    (input == "scissors" && computerChoice == "paper") ||
    (input == "paper" && computerChoice == "stone") ||
    (input == "stone" && computerChoice == "scissors")
  ) {
    userWin = userWin + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    spsOutputValue = `Congratulations ${userName}, you won! 😁 <br> You chose ${input} <br> The computer chose ${computerChoice}. <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage}  <br> <br>Wanna try again? ✂️🧻🗿`;
  }
  if (input == computerChoice) {
    draws = draws + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    spsOutputValue = `Darn ${userName}, it's a draw! 😡 <br> You chose ${input} <br> The computer chose the same! <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage} <br><br> Please try again! ✂️🧻🗿`;
  }

  return spsOutputValue;
};

// Function for game state where computer chooses for player
var comChoiceSPS = function (userName, input) {
  if (input == "computer") {
    var comChooseForPlayer = assignNumToWord();
  }
  var comChoiceOutputValue = "";
  comChoiceOutputValue = `Welcome to computer selected SPS! Type 'computer' to play!`;
  // Output message when changing modes
  if (input == "normal") {
    comChoiceOutputValue = `Welcome to normal SPS!`;
  }
  if (input == "korean") {
    comChoiceOutputValue = `Welcome to korean SPS!`;
  }
  if (
    input != "paper" &&
    input != "scissors" &&
    input != "stone" &&
    input != "reversed" &&
    input != "normal" &&
    input != "Computer" &&
    input != "korean" &&
    input != "computer"
  ) {
    comChoiceOutputValue = `Invalid input ${userName}. <br> Please enter either scissors, paper or stone. <br> If you would like to play reversed mode type in reversed. <br> If you would like to go back to normal mode type in normal.`;
  }
  var computerChoice = assignNumToWord();

  if (
    (comChooseForPlayer == "scissors" && computerChoice == "stone") ||
    (comChooseForPlayer == "paper" && computerChoice == "scissors") ||
    (comChooseForPlayer == "stone" && computerChoice == "paper")
  ) {
    compWin = compWin + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    comChoiceOutputValue = `Sorry ${userName}, you lost computer selected SPS! 😿 <br> The computer chose ${comChooseForPlayer} for you. <br>  The computer chose ${computerChoice} <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage} <br> <br>Please try again! ✂️🧻🗿`;
  }

  if (
    (comChooseForPlayer == "scissors" && computerChoice == "paper") ||
    (comChooseForPlayer == "paper" && computerChoice == "stone") ||
    (comChooseForPlayer == "stone" && computerChoice == "scissors")
  ) {
    userWin = userWin + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    comChoiceOutputValue = `Congratulations ${userName}, you won computer selected SPS! 😁 <br> The computer chose ${comChooseForPlayer} for you.  <br> The computer chose ${computerChoice}. <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage}  <br> <br>Wanna try again? ✂️🧻🗿`;
  }
  if (comChooseForPlayer == computerChoice) {
    draws = draws + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    comChoiceOutputValue = `Darn ${userName}, it's a draw! 😡 <br> You chose ${comChooseForPlayer} <br> The computer chose the same! <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage} <br><br> Please try again! ✂️🧻🗿`;
  }

  return comChoiceOutputValue;
};

// Function to execute korean SPS game
var koreanSPS = function (userName, input) {
  var koreanSPSOutputValue = "";

  koreanSPSOutputValue = `Welcome to korean SPS!`;
  // Output message when changing modes
  if (input == "normal") {
    koreanSPSOutputValue = `Welcome to normal SPS!`;
  }
  if (input == "Computer") {
    koreanSPSOutputValue = `Welcome to computer's choice SPS! Type 'computer' to play!`;
  }
  if (
    input != "paper" &&
    input != "scissors" &&
    input != "stone" &&
    input != "reversed" &&
    input != "normal" &&
    input != "Computer" &&
    input != "korean"
  ) {
    koreanSPSOutputValue = `Invalid input ${userName}. <br> Please enter either scissors, paper or stone. <br> If you would like to play reversed mode type in reversed. <br> If you would like to go back to normal mode type in normal.`;
  }
  var computerChoice = assignNumToWord();

  if (
    (input == "scissors" && computerChoice == "stone") ||
    (input == "paper" && computerChoice == "scissors") ||
    (input == "stone" && computerChoice == "paper")
  ) {
    compWin = compWin + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    latestWinner = "It's a draw! <br> The computer is the ultimate winner!";
    koreanSPSOutputValue = `Sorry ${userName}, you lost Korean SPS! 😿 <br> You chose ${input} <br>  The computer chose ${computerChoice} <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage} <br> <br>Please try again! ✂️🧻🗿`;
  }

  if (
    (input == "scissors" && computerChoice == "paper") ||
    (input == "paper" && computerChoice == "stone") ||
    (input == "stone" && computerChoice == "scissors")
  ) {
    userWin = userWin + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    latestWinner = "It's a draw! <br> You are the ultimate winner!";
    koreanSPSOutputValue = `Congratulations ${userName}, you won Korean SPS! 😁 <br> You chose ${input} <br> The computer chose ${computerChoice}. <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage}  <br> <br>Wanna try again? ✂️🧻🗿`;
  }
  if (input == computerChoice) {
    draws = draws + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    koreanSPSOutputValue = `${latestWinner}`;
    latestWinner = "It seems you drew on the first try! Please try again.";
  }

  return koreanSPSOutputValue;
};

var main = function (input) {
  var myOutputValue = "";

  if (gameMode == "waiting for user to enter name") {
    userName = input;
    // Instructions for various game modes
    myOutputValue = `Hello ${userName}! <br> Ready to play SPS? <br> Select 'scissors', 'paper' or 'stone' to play. <br> You can also toggle between different game modes by typing either <br> 'korean' <br>'Computer' <br>'normal' <br><br> For computer mode, the computer will choose for you, all you have to do is type 'computer'`;
    gameMode = "SPS";
  } else if (gameMode == "SPS") {
    myOutputValue = normalSPS(userName, input);
    // Change game state to reverse mode if player types 'reversed'
    if (input == "korean") {
      gameMode = "korean SPS";
    }
    if (input == "Computer") {
      gameMode = "computer choice SPS";
    }
  }
  if (gameMode == "korean SPS") {
    myOutputValue = koreanSPS(userName, input);
    // Change game state back to normal mode or computer mode
    if (input == "normal") {
      gameMode = "SPS";
    }
    if (input == "Computer") {
      gameMode = "computer choice SPS";
    }
  }
  if (gameMode == "computer choice SPS") {
    myOutputValue = comChoiceSPS(userName, input);
    // Change game state back to normal mode or computer mode
    if (input == "normal") {
      gameMode = "SPS";
    }
    if (input == "korean") {
      gameMode = "korean SPS";
    }
  }

  return myOutputValue;
};
