var foo = “Global variable”;

function globalFunc() {
  var bar = “Scoped variable”;
    function scopedFunc() {
      console.log(‘foo is: ‘ + foo);
      console.log(‘bar is: ‘ + bar);
    }
};

scopedFunc(); } globalFunc(); scopedFunc();
