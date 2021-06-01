// Create Scissors Paper Stone Game with formatting

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
  var myOutputValue = `Sorry, you lost! 😿 <br> You chose ${userGuess} <br>  The computer chose ${computerChoice} <br> <br>Please try again! ✂️🧻🗿`;
  // Create condition where scissors beats paper and user wins
  // Create condition where paper beats stone and user wins
  // Create condition where stone beats scissors and user wins
  if (
    (userGuess == "scissors" && computerChoice == "paper") ||
    (userGuess == "paper" && computerChoice == "stone") ||
    (userGuess == "stone" && computerChoice == "scissors")
  ) {
    myOutputValue = `Congratulations, you won! 😁 <br> You chose ${userGuess} <br> The computer chose ${computerChoice}  <br> <br>Wanna try again? ✂️🧻🗿`;
  }
  // Create condition where input = program output and result is a draw
  if (userGuess == computerChoice) {
    myOutputValue = `Darn, it's a draw! 😡 <br> You chose ${userGuess} <br> The computer chose the same! <br><br> Please try again! ✂️🧻🗿`;
  }
  // If user types anything other than "scissors", "paper" or "stone", inform them that only these 3 words are vaild options
  if (userGuess != "scissors" && userGuess != "paper" && userGuess != "stone") {
    myOutputValue =
      "Sorry, you entered an invalid option! 😅 <br> Please enter one of the following options: <br> <br> ✂️ scissors  <br><br>🧻 paper  <br><br> 🗿 stone ";
  }
  return myOutputValue;
};
