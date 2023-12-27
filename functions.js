//Funksionet ne Javascript


// Function Expressions
let funksioni = function(emri){
return "Pershendetje " + emri;
}

console.log(funksioni("Petrit"));


// Function Declarations
function functionName(name) {
  return "Pershendetje " + name;
  }
console.log(functionName('Arion'))  

// Arrow Functions
// Perdoren per te shkurtuar kodin por nuk mund te perdoren "this" ose "arguments" etj.
const funksioniArrow = (emriPersonit) => { 
  return `Pershendetje ${emriPersonit}`;
}
console.log(funksioniArrow('Ardit'));