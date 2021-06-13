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

// Function to implement input validation
var createInputValidation = function (input) {
  if (
    input != "paper" &&
    input != "scissors" &&
    input != "stone" &&
    input != "reversed" &&
    input != "normal"
  ) {
    validationMessage = `Invalid input ${userName}. <br> Please enter either scissors, paper or stone. <br> If you would like to play reversed mode type in reversed. <br> If you would like to go back to normal mode type in normal.`;
  }
  return validationMessage;
};

// Function to calculcate win percentage
var calculateWinPercentage = function () {
  return (userWin / (userWin + compWin + draws)) * 100;
};

// Function to execute normal SPS game
var normalSPS = function (userName, input) {
  var spsOutputValue = "";
  spsOutputValue = createInputValidation(userName, input);
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

// Function to execute reverse SPS game
var reverseSPS = function (userName, input) {
  computerChoice = assignNumToWord();
  var reverseSPSOutputValue = "";
  reverseSPSOutputValue = createInputValidation(userName, input);
  if (
    (input == "scissors" && computerChoice == "paper") ||
    (input == "paper" && computerChoice == "stone") ||
    (input == "stone" && computerChoice == "scissors")
  ) {
    compWin = compWin + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    reverseSPSOutputValue = `Sorry ${userName}, you lost reversed SPS! 😿 <br> You chose ${input} <br>  The computer chose ${computerChoice} <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage} <br> <br>Please try again! ✂️🧻🗿`;
  }

  if (
    (input == "scissors" && computerChoice == "stone") ||
    (input == "paper" && computerChoice == "scissors") ||
    (input == "stone" && computerChoice == "paper")
  ) {
    userWin = userWin + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    reverseSPSOutputValue = `Congratulations ${userName}, you won reversed SPS! 😁 <br> You chose ${input} <br> The computer chose ${computerChoice}. <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage}  <br> <br>Wanna try again? ✂️🧻🗿`;
  }
  if (input == computerChoice) {
    draws = draws + 1;
    winPercentage = calculateWinPercentage();
    displayMessage = toDetermineMessage();
    reverseSPSOutputValue = `Darn ${userName}, it's a draw in reversed SPS! 😡 <br> You chose ${input} <br> The computer chose the same! <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> ${displayMessage} <br><br> Please try again! ✂️🧻🗿`;
  }
  return reverseSPSOutputValue;
};

var main = function (input) {
  var myOutputValue = "";

  if (gameMode == "waiting for user to enter name") {
    userName = input;

    myOutputValue = `Hello ${userName}! Ready to play SPS?`;
    gameMode = "SPS";
  } else if (gameMode == "SPS") {
    myOutputValue = normalSPS(userName, input);
    // Change game state to reverse mode if player types 'reversed'
    if (input == "reversed") {
      gameMode = "reversed mode";
    }
  }
  if (gameMode == "reversed mode") {
    myOutputValue = reverseSPS(userName, input);
    // Change game state back to normal mode if player types 'normal'
    if (input == "normal") {
      gameMode = "SPS";
    }
  }

  return myOutputValue;
};
