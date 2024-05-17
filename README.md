# Learning-Javascript
# Mesimi i Javascript

First we'll learn variables and functions in Javascript</br>
Si fillim do te mesojme variablat dhe funksionet ne Javascript.</br>

## Variables
## Variablat

Variables are var, let and const. </br>
Variablat jane var, let dhe const.</br>
</br>
Var - you can reassign the value, has global scope, but is no longer used.</br>
Var - mund te rishkruhet vlera, ka skop global, por nuk perdoret me. </br>
</br>
Let - you can reassign the value, has block scope. It is the replacement for var.</br>
Let - mund te rishkruhet vlera, ka skop blok. Eshte zevendesuesi i var.</br>
</br>
Const - cannot reassign value, has block scope. For constants and when you want the value to only be changed from a function.</br>
Const - nuk mund te rishkruhet vlera, ka skop blok. Per konstante dhe kur deshiron qe te nderrohet vlera vetem 
nga nje funksion.</br>



# Loopet

### Llogarit fuqine a^b
```
let a=2;
let b=3;
let i=0;
let p=1;

for (i; i<b; i++) {
  p *= a;
  console.log(p);
}
```
### Llogarit Faktorialin 5! = 5x4x3x2x1
```
let x=5;
let j=1;
let f=1;

for (j; j<=x; j++) {
  f *=j;
}
```

### Loop qe numeron nga 0 deri ne 10
```
for (let i = 0; i <= 10; i++) {
  console.log(i);
} 
```


### Nje Unaze/loop qe printon numrat cift nga 0 deri ne "n"
```
const n=20;
for (let i=0; i<=n; i++)
  if (i % 2 ==0 ) {
    console.log(i);
  }
```

### While Loop
#### Perderisa kushti eshte TRUE, ekzekuto kodin.
```
  let k=0;
   while (k < 10) {   
      k++;
      console.log(k);
    }
```
### Do While loop
#### Duhet pasur kujdes kur perdoret do-while pasi programi e ben nje cikel pastaj kontrollon nese kushti eshte i vertete.
```
let j = 0;
do {
  j += 1;
  console.log(j);
} while (j <= 0);    
```


## Funksionet
