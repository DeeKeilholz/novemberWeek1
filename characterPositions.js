//program that takes an unlimited number of console arguments
var array = process.argv.slice(2)


function countLetters (array) {

var count = {};

// join converts array to string, split converts string back to array

  // Foreach loop, takes a function
  // 1st parameter - current element
  // 2nd parameter - current index
  // 3rd parameter - array
  // it will run as long as the array
  // you MUST do it in this order
  array.join('').split('').forEach(function(character, index) {
  //if
  if (!count.hasOwnProperty(character)) {
        count[character] = [index];
 // else
  } else {
    count[character].push(index);
  }
});



return count;
}

console.log(countLetters(array));
