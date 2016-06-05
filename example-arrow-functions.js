// var names = ["emile", "kamilla", "sienna"];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach( (name) => {
//   console.log("arrowFunc", name);
//   console.log(" - - - - -");
// } );
//
// names.forEach((name) => console.log(name));

var addStatement = (a,b) => {
  return a+b;
};

var addExpression = (a,b) => a+b;

console.log(addStatement(1,2));
console.log(addExpression(2,3));
