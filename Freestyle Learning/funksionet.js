// const f= function (x) {
//   return x++;
// }
// {
//   var y=f(10);
// }
// console.log(y);

const f = (x,y) => x/y;
// const g = (a,b) => f(a,b);
const g = () => f;

console.log(g()(10,0)); 
g(10,0); 