// Javascript Functions
// Funksionet ne Javascript


// Function Expressions ose Anonime
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
// Are used to shorten code but cannot use "this" or "arguments" etc.
// Perdoren per te shkurtuar kodin por nuk mund te perdoren "this" ose "arguments" etj.
const funksioniArrow = (emriPersonit) => { 
  return `Pershendetje ${emriPersonit}`;
}
console.log(funksioniArrow('Ardit'));