function c(a,x,...g) {
  return {
    x: [g],
    a: g[0] 
  }
}
function f(x) {
  return c('t', x, 'g', 'p')
}


const {x,a} = f('e');
console.log(x[0][1]);
console.log(a);