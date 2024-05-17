# Shenime dhe Ushtrime nga Javascript, Sesioni 23.

## Quiz 1
#### Nje Unaze/loop qe printon numrat cift nga 0 deri ne "n"
```
const n=20;
for (let i=0; i<=n; i++)
  if (i % 2 ==0 ) {
    console.log(i); /* 0,2,4,6,8,10,12,14,16,18,20*/
  }
```
## Quiz 2
### Te krijohet nje funksion qe pranon dy parametra, a dhe b.
#### Funksioni duhet te beje pjestimin e dy numrave, nese pjestuesi eshte 0, funksioni duhet te nxjerre daljen "Nuk lejohet pjestimi me zero!"
```
function pjesto (a,b) {
  if (b==0) return 'Nuk lejohet pjestimi me zero!'
  return a/b
}
console.log(pjesto(3,0)); /* Nuk lejohet pjestimi me zero! */
console.log(pjesto(4,2)); /* 2 */
```

