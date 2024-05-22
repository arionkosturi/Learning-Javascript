// Implementimi i indexof
const arr = [4, 5, 10, 3, 8, 6];
let result = [];

function _indexof(array,value) {
  for (let i=0; i< array.length; i++) {
    if (array[i]===value) return i;
}
  return 'Nuk eshte ne Array';
}
console.log(_indexof(arr,6));
