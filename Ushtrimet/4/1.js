// Implementimi i Map
const arr = [4, 5, 10, 3, 8, 6];
let result = [];

function _map(arr,f) {
  for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
  }
  return result
}
console.log(_map(result));
