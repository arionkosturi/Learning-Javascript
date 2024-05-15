//JS Exercieses

//Funksion per mbledhje, e njejta gje eshte dhe per zbritje, shumezim dhe pjestim.
function sum(num1, num2) {
  return num1 + num2;
}
sum(5, 10);

//Funksion per te pare nese nje numer eshte cift apo tek.
function isEven(num) {
  return num % 2 === 0;
}
isEven(0);

// Numrat cift nga 0 deri ne N
function numratCift(n) {
    for (i=0; i<=n; i++)
      if (i % 2 == 0) {
        console.log(i);
      }
  
}
numratCift(20);

// Te krijohet nje funksion qe pranon 2 paramentra (psh a dhe b)
// funksioni duhet te beje pjestimin e dy numrave
// nese pjestuesi i funksionit eshte 0 duhet te nxjerre
// daljen "Nuk lejohet pjestimi me zero!"
function pjestimi (a,b) {
    if (b == 0) {
      return 'Nuk lejohet pjestimi me zero'
    }
      return a/b;
  }
pjestimi(3,2);
