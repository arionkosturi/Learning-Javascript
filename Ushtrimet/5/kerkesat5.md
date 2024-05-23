DETYRA
##### 1. Te shkruhet funksioni i cili pranon objektin e definuar ne vijim dhe kthen daljen: ‘Une jam John, jam 24 vjec’
DONE
```js
let person = { name: ‘John’, surname: ‘Smith’, birth: 1999}
function printPerson(…) { … }
```

2. Te shkruhet funksioni i cili implementon funksionalitetin e metodes reduce
```js
function _reduce(…) {
   // … 
   }
```
##### 3. Te krijohet klasa Circle e cila llogarite perimetrin dhe syprinen e rrethit – rrezja r ruhet si veti e klases.
DONE

##### 4. Cila eshte vlera e x, name, dhe b? 
Done
```js
function f(x, name, ...args) {
return {
x: args,
name: args[0] + x[0],
b: 200 + name
}
}
const {x, name, b} = f(10, 'john', 's', 23, false, true)
```
##### 5. Cila eshte vlera e x, y, dhe z? 
Done
```js
function f() {
return {
a: 100,
b: [1,2,false],
c: undefined
}
}
function g() {
return {
x: f(),
y: f().c,
z: 'a' + this.y
}
}
const {x, y, z} = g(f())
```