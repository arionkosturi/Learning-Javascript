// Cila eshte vlera e x, y, dhe z?
function f() {
  return {
  a: 100,
  // a: 100
  b: [1,2,false],
  // b: [1,2,false]
  c: undefined
  // c: undefined
  }
  }
  function g() {
  return {
  x: f(),
  // { a: 100, b: [ 1, 2, false ], c: undefined }
  y: f().c,
  // undefined
  z: 'a' + this.y
  // 'aundefined'
  }
  }
  const result = {x, y, z} = g(f());
  /*
  x: { a: 100, b: [ 1, 2, false ], c: undefined },
  y: undefined,
  z: 'aundefined'
  */