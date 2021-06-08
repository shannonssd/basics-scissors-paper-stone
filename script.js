// Create Scissors Paper Stone Game with Win-Loss Record and formatting

// Create global variable to track user and computer win as well as no of draws
var userWin = 0;
var compWin = 0;
var draws = 0;

// Create function which generates random number
var generateRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// Create function where randomly generated number is assigned to one of the 3 options
var assignNumToOptions = function () {
  // Call random number function into assigment function
  var randomNum = generateRandomNum();
  if (randomNum == 1) {
    var programOutput = "scissors";
  }
  if (randomNum == 2) {
    programOutput = "paper";
  }
  if (randomNum == 3) {
    programOutput = "stone";
  }
  return programOutput;
};

var main = function (userGuess) {
  // Call function which generates computer's choice into main function
  var computerChoice = assignNumToOptions();
  // Create default statement
  var myOutputValue = "";
  // Create condition where user loses
  if (
    (userGuess == "scissors" && computerChoice == "stone") ||
    (userGuess == "paper" && computerChoice == "scissors") ||
    (userGuess == "stone" && computerChoice == "paper")
  ) {
    // Update value of global variable for computer win count
    compWin = compWin + 1;
    // Create variable which outputs user win percentage
    var winPercentage = (userWin / (userWin + compWin + draws)) * 100;
    myOutputValue = `Sorry, you lost! 😿 <br> You chose ${userGuess} <br>  The computer chose ${computerChoice} <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> <br>Please try again! ✂️🧻🗿`;
  }

  // Create condition where scissors beats paper and user wins
  // Create condition where paper beats stone and user wins
  // Create condition where stone beats scissors and user wins
  if (
    (userGuess == "scissors" && computerChoice == "paper") ||
    (userGuess == "paper" && computerChoice == "stone") ||
    (userGuess == "stone" && computerChoice == "scissors")
  ) {
    // Update value of global variable for user win count
    userWin = userWin + 1;
    // ?Call win percentage variable into winning conditional
    winPercentage = (userWin / (userWin + compWin + draws)) * 100;
    myOutputValue = `Congratulations, you won! 😁 <br> You chose ${userGuess} <br> The computer chose ${computerChoice}. <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%.  <br> <br>Wanna try again? ✂️🧻🗿`;
  }
  // Create condition where input = program output and result is a draw
  if (userGuess == computerChoice) {
    // Update value of global variable for draws count
    draws = draws + 1;
    // ?Call win percentage variable into winning conditional
    winPercentage = (userWin / (userWin + compWin + draws)) * 100;
    myOutputValue = `Darn, it's a draw! 😡 <br> You chose ${userGuess} <br> The computer chose the same! <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br><br> Please try again! ✂️🧻🗿`;
  }
  // If user types anything other than "scissors", "paper" or "stone", inform them that only these 3 words are vaild options
  if (userGuess != "scissors" && userGuess != "paper" && userGuess != "stone") {
    myOutputValue =
      "Sorry, you entered an invalid option! 😅 <br> Please enter one of the following options: <br> <br> ✂️ scissors  <br><br>🧻 paper  <br><br> 🗿 stone ";
  }
  return myOutputValue;
};
