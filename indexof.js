function iof(array,value) {
  for (let i=0; i< array.length; i++) {
    if (array[i]===value) return i;
}
  return -1;
}
const persona = ['Arion', 'Ylber']
console.log(iof(persona, 'Arion'));
