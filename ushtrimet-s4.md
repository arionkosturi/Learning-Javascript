# Shenime dhe Ushtrime nga Javascript, Sesioni 23.

## Quiz 1
#### Nje Unaze/loop qe printon numrat cift nga 0 deri ne "n"
```
const n=20;
for (let i=0; i<=n; i++)
  if (i % 2 ==0 ) {
    console.log(i); /* 0,2,4,6,8,10,12,14,16,18,20 */
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
## Fusha e qasshmerise ne funksion.
##### Variablat dhe konstantet e definuara **BRENDA** funksionit **JANE** te qasshme vetem brenda tij. Variablat dhe konstantet e definuara **BRENDA** funksionit **NUK JANE** te qasshme vetem brenda tij. 
### Pra cdo gje qe definohet brenda funksionit mbetet e qasshme brenda funksionit por jo jashte tij!
```
function f() {
  let x = 10;
  var y = 20;
  const z = 30;
  console.log(x,y,z); /*10 20 30 */

 }
 f();
 console.log(x); /* x is not defined */
 console.log(y); /* y is not defined */
 console.log(z); /* z is not defined */
```
# Funksionet Anonime.
### Funksionet qe nuk kane emer, jane funksione anonime!

```
  function() {
    // body
  }
```
#### Zakonisht funksionet anonime perdoren si argument brenda nje funksioni tjeter.
```
function g(f) {
  f();
}

g( function() {
  console.log('Hi from f()')
  } ); // Hi from f()
```

#### Po ashtu i jepet si vlere nje variable ose konstante.
```
let funksioni = function(emri){
return "Pershendetje " + emri;
}
```

### Shembull me funksion anonim.
```
const zbritja = function(x,y) {
  console.log(x,y);
}
```
##### Aktivizimi i funksionit behet nepermjet emrit te konstantes.

```
zbritja(10,4); //6
```

#### Qe nje funksion anonim te qendroje i pavarur e fusim ne kllapa (). Pra e bejme wrap
```
(function() {
  console.log('Hi from an. f.')
});
```
#### Per ta aktivizuar funksionin shtojme () mbrapa
```
(function() {
  console.log('Hi from an. f.')
})();
```
# Funksionet me sintakse shigjete / Arrow Functions.
##### Kur ka vetem nje parameter nuk vendosen kllapat. Dhe kur kodi ka vetem nje rresht, nuk ka nevoje per **return**.
```
param => expression
```
#### Kur ka disa parametra, duhen kllapat. Parametrat ndahen me presje. Kur kodi ka vetem nje rresht, nuk ka nevoje per **return**.
```
(param1, paramN) => expression
```