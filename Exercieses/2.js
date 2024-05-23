function f(x, y, ...args) {
  return [x,y, ...args]
}
function g() {
  return {...f('a','b','c','d')}
}
const {0: x,1: y} = g();
console.log(x,y)