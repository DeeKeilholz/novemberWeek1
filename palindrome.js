function isPalindrome(str) {
  var noSpaces = str.split(" ").join("").toLowerCase();  // splits string at " " and joins all letters
  var mid = Math.floor(noSpaces.length/2); //divides length of string by 2 and rounds down
  //e.g. racecar has seven letters, rounded down to 6
  var last = noSpaces.length - 1; // takes string lenght and substracts one to match index
  //e.g. racecar would be length 6

      for (var i = 0; i <= mid; i++) {
        if (noSpaces[i] !== noSpaces[last - i])
          return false;
  }
    return true
}
// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);
