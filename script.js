// Create Scissors Paper Stone Game

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
  // Create defaults statement where user loses
  var myOutputValue = `Sorry, you lost! 😿 You chose ${userGuess} but the computer chose ${computerChoice}. Please try again! ✂️🧻🗿`;
  // Create condition where scissors beats paper and user wins
  // Create condition where paper beats stone and user wins
  // Create condition where stone beats scissors and user wins
  if (
    (userGuess == "scissors" && computerChoice == "paper") ||
    (userGuess == "paper" && computerChoice == "stone") ||
    (userGuess == "stone" && computerChoice == "scissors")
  ) {
    myOutputValue = `Congratulations, you won! 😁 You chose ${userGuess} and the computer chose ${computerChoice} ✂🧻🗿.`;
  }
  // Create condition where input = program output and result is a draw
  if (userGuess == computerChoice) {
    myOutputValue = `Darn, it's a draw! 😡 You chose ${userGuess} and the computer chose the same! Please try again! ✂️🧻🗿`;
  }

  return myOutputValue;
};
