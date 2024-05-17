function f(a,b,...args) {
  return `${a+args[0]}${b}`
}
const [x,y,z] = Array.from(f('a',10,'ge','s1','b').slice(2))
console.log(x,y,z);