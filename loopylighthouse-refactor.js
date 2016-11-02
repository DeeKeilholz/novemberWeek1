for (var counter = 100; counter <= 200; counter++) {
  var output = "";

  if (counter % 3 === 0) {
    output += "Loopy";
  }
  if (counter % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? counter : output);
}
