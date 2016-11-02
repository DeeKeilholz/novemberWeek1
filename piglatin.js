// function that takes first letter of each word and modifies it

  function piglatin(word){
    // makes a new string
  var backWord = "";
    // slices of the first letter of a word
  var firstLetter = word.slice(0, 1);
    for (var i = 0; i < word.length; i++) {
      //if statment that removes first letter of word
        if (word.substr(0,1) == word[i]) {
          word = word.substr(1);
        }
    backWord += word[i];
    }
  return backWord + firstLetter + 'ay'
  }

// loops through the argv array
var input = process.argv;
  for (var i = 2; i < input.length; i++) {
    console.log(piglatin(input[i]));
  }
