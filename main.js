function variableHoisting() {
  var myvar = "bye";
  var myvar = "value";
  var myvar; // does nothing

  console.log(myvar); // value

  (function() { // I am a self invoking function
    var myvar;
    console.log(myvar); // undefined
    var myvar = "value";
    console.log(myvar); // value

    myvar = "inside";
    console.log(myvar); // inside
  })();
  console.log(myvar); // value
}

// variableHoisting();

function functionHoisting() {
  fnExpression(); //  error: fn is not defined, fnExpression is not a function
  var fnExpression = function() {
    console.log("I don't hoist");
  };
  fnExpression(); // I work!

  fnDeclaration(); // I work because I hoist!
  function fnDeclaration() {
    console.log("I hoist");
  }
  fnDeclaration(); // I work!
}

ex2();
