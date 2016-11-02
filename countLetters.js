//program that takes an unlimited number of console arguments
var array = process.argv.slice(2)


function countLetters (array) {

var count = {};

// join converts array to string, split converts string back to array
array.join('').split('').forEach(function(character) {
  //if theres's more than one instance of letters, increment
  if (count[character] == true) {
     count[character]++
 // else, set character count to 1
} else {
     count[character] = 1
}
  // alternative way of writing this if statemetn:
  //count[character] ? count[character]++ : count[character] = 1;
})
return count;
}

console.log(countLetters(array));
