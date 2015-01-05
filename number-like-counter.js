// been working with jQuery, so I initially forgot how to use 'this' properly...
function Counter(){
  this.value = 0;
};

Counter.prototype.incr = function() {
  this.value++;
};

// found this function from a Google result
Counter.prototype.valueOf = function () {
  return this.value;
};