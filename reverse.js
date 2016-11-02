var input = process.argv[2];

function reverse (original) {
  if (input) {
    return original.split('').reverse().join('');
  }
}

console.log(reverse(input));
