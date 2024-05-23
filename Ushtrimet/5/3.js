// Te krijohet klasa Circle e cila llogarite 
// perimetrin dhe syprinen e rrethit – 
// rrezja r ruhet si veti e klases.

const PI = 3.14
class Circle {
  constructor(r) {
    this.r = r;
    let syprina = r * r * PI;
    let perimetri = 2 * PI * r;
   return  {syprina, perimetri, r};
  }
}

circle = new Circle(5);
console.log(`Rrethi me rreze r=${circle.r}cm ka syprinen=${circle.syprina}cm dhe perimetrin=${circle.perimetri}cm`);
