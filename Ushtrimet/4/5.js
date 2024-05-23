/* Тë shkruhet funksioni i cili simulon funksionalitetin 
filter – dmth funksioni f thirret për çdo element të arr. */

let arr = [9, 50, 3, 4, 12, 6, 2, 6,6];
let narr = []

function _filter(arr, f) { 
  for (n of arr) {
    if (n > 5) 
      narr.push(n);
  }
}


_filter(arr);

console.log(narr);
