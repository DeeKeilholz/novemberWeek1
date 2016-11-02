var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList (conceptList);
//
//   function joinList (conceptList) {
//     var output = "";
//     output += conceptList.join("");
//       return output;
//   }


function joinList (array) {
  var output = "";
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      output += array[i] + ", ";
    } else {
      output += array[i]
    }
  }
  return output;
}


console.log("Today I learned about " + concepts + ".");
