// Cila eshte vlera e x, name, dhe b?
function f(x, name, ...args) {
        // 10 'john' ['s', 23, false, true]
  return {
  x: args,
  // x: ['s', 23, false, true]
  name: args[0] + x[0],
  // name: 'sundefinded'
  b: 200 + name
  // '200john'
  }
  }
  const result = {x, name, b} = f(10, 'john', 's', 23, false, true);
  // [ 's', 23, false, true ] sundefined 200john
  // {x: ['s', 23, false, true], name: 'sundefinded', b: '200john'}