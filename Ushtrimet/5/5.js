//Cila eshte vlera e x, y, dhe z?
function f() {
  return {
  a: 100,
  b: [1,2,false],
  c: undefined
  }
  }
  function g() {
  return {
  x: f(),
  y: f().c,
  z: 'a' + this.y
  }
  }
  const {x, y, z} = g(f());
  console.log(x,y,z);
  // ????????