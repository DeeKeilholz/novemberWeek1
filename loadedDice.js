// Write a program that takes a single parameter from the command line, a number,
// and rolls that many six-sided dice. For example, the following is a sample
// output of the program:
  // node dice-roller.js 3
  // Rolled 3 dice: 2, 6, 5

var dice = process.argv.slice(2);

function loadedDice (dice) {
var total = [];
// do a loop to roll dice 3 times
   for (var c = 0; c < dice; c++) {
     var randomNum = (" " + Math.floor(Math.random()*6));
    total.push(randomNum);

    }
return total.join(",");
}

console.log(loadedDice(dice));
