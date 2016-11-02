// Write a program named password.js that takes a single command line argument,
// a string, and obfuscates it by applying the following rules:
  // Every "a" in the string should be replaced with a "4".
  // Every "e" in the string should be replaced with a "3".
  // Every "o" (oh) in the string should be replaced with a "0" (zero).
  // Every "l" (el) in the string should be replaced with a "1" (one).

var string = process.argv.[2];


function obfuscate (string) {
  var newString = '';
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === 'a') {
        newString += 4;
      } else if (string.charAt(i) === 'e') {
        newString += 3;
      } else if (string.charAt(i) === 'o') {
        newString += 0;
      } else if (string.charAt(i) === 'l') {
        newString += 1;
      } else {
        newString += string.charAt(i);
        }
    }
  return newString;
}

console.log(obfuscate(string));
