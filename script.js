// Create Scissors Paper Stone Game with reverse rules!

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
  // Create variable where user guess is turned into string which only outputs scissors/paper/stone
  if (userGuess == "reversed scissors") {
    var playerChoice = "scissors";
  }
  if (userGuess == "reversed paper") {
    playerChoice = "paper";
  }
  if (userGuess == "reversed stone") {
    playerChoice = "stone";
  }
  // Call function which generates computer's choice into main function
  var computerChoice = assignNumToOptions();
  // Create defaults statement where user loses
  var myOutputValue = `Sorry, you lost reverse Scissors Paper Stone 😂  <br> You chose ${playerChoice} <br>  The computer chose ${computerChoice} <br> <br>Please try again! ✂️🧻🗿`;
  // Create condition where scissors beats stone and user wins
  // Create condition where paper beats scissors and user wins
  // Create condition where stone beats paper and user wins
  if (
    (playerChoice == "scissors" && computerChoice == "stone") ||
    (playerChoice == "paper" && computerChoice == "scissors") ||
    (playerChoice == "stone" && computerChoice == "paper")
  ) {
    myOutputValue = `Congratulations, you won reverse Scissors Paper Stone! 😁 <br> You chose ${playerChoice} <br> The computer chose ${computerChoice}  <br> <br>Wanna try again? ✂️🧻🗿`;
  }
  // Create condition where input = program output and result is a draw
  if (playerChoice == computerChoice) {
    myOutputValue = `Darn, it's a draw! 😡 <br> You chose ${playerChoice} <br> The computer chose the same! <br><br> Please try again! ✂️🧻🗿`;
  }
  // If user types anything other than "reversed scissors", "reversed paper" or "reversed stone", inform them that only these 3 words are vaild options
  if (
    userGuess != "reversed scissors" &&
    userGuess != "reversed paper" &&
    userGuess != "reversed stone"
  ) {
    myOutputValue =
      "Sorry, you entered an invalid option! 😅 <br> Please enter one of the following options: <br> <br> ✂️ reversed scissors  <br><br>🧻 reversed paper  <br><br> 🗿 reversed stone ";
  }
  return myOutputValue;
};
