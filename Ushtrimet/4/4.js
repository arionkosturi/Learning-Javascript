// Të shkruhet funksioni i cili llogaritë faktorielin e një numri
// në rast se n është numër negativ gjuhet përjashtimi 
          //“Nuk lejohet perdorimi i vlerave negative”, 
//nëse n është më i madh se 10 të gjuhet përjashtimi 
          //“N duhet të jetë më i vogël se 10”.

function factorial(n) {
  if(n < 0) throw 'Nuk lejohet perdorimi i vlerave negative!'
  if(n > 10) throw 'N duhet të jetë më i vogël se 10'
  if(n==0 || n==1) return 1;
  return n * factorial(n-1);

}
  try {
    console.log(factorial(10));
  } catch(e) {
    console.log(e);
  }