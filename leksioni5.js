function f(x,a,c) {
  return function() {
    return {
    d: c,
    g: a
  }
}
}
function ga() {
  return {
    ...f(10, 'te', 'a', 'g', 'j')(),
    d: 'a',
    g: [1,2]
  }
}

const {d: x, g} = ga();
console.log(x,g);