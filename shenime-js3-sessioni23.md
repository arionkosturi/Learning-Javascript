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
### Kur therrasim nje funksion anonim pa e lidhur me nje variabel ose konstante.
```
function() {
  console.log('Hi from an. f.');
}
```
#### Do te ankohet interpretuesi, pasi nuk i kemi dhene emer funksionit.
```console
 Function statements require a function name
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
#### Nese e therrasim pa i dhene parameter.
```
(function(name) {
  console.log('Hi from ' + name )
})();
```
#### Dalja do te jete Hi from undefined.
```console
 Hi from undefined
```

#### Shembull duke i dhene parametra funksionit.
```
(function(name) {
  console.log('Hi from ' + name )
})('Arta');
```
#### Dalja
```console
 Hi from Arta
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

### Shembulli me funksion me sintakse shigjete.
```
var power = (x,y) => {
  return Math.pow(x,y);
}
```
#### eshte i njejte me

```
var power = (x,y) => Math.pow(x,y);
```
## Ushtime me funksionet me sintakse shigjete

### Funksion qe ben mbledhjen e dy parametrave

```
const mbledhje = (x,y) => x + y;
console.log(mbledhje(10,12)); // 22
```

### Funksionin me sintakse shigjete mund t'ia japim si parameter nje funkioni tjeter:
```
let mbledhje = (x,y) => x + y;

function pjesto (a,b) {
  console.log(a / b);
}

pjesto(mbledhje(10,2),6); // 2
pjesto(mbledhje(10,2),8); // 1.5
```
# Funksionet e Rendit te Larte
# Higher-Order Functions

### Merr si parameter nje funksion ose kthen nje funksion. Ose te kombinim i te dyjave.
#### Jane funksione qe bejne veprime brenda funksioneve te tjera.

### Funksioni g pranon si argument nje funksion tjeter
```
function g(f) {
  f();
}
g(function() {
  console.log('Pershendetje')
})
```
### Shembull tjeter.
```
function g(name) {
  return function () {
    console.log('Pershendetje' + name);
  }
}
g('Arta');
```
### Dalja nuk kthen gje.
```console

```
### Nese i shtojme console.log
```
function g(name) {
  return function () {
    console.log('Pershendetje' + name);
  }
}
console.log(g('Arta'));
```
### Dalja.
```console
[Function (anonymous)]
```
### Per ta aktivizuar duhen shtuar kllapat ()
```
console.log(g('Arta')());
```
#### Dalja
```console
Pershendetje Arta
undefined
```
### Qe te jete dalja e sakte:
```
g('Arta')();
```
#### Dalja
```console
Pershendetje Arta.
```
## Funksion qe e pranon nje funksion dhe e kthen nje funksion.