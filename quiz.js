// Te krijohet nje funksion qe pranon dy parametra,
// a dhe b.
// Funksioni duhet te beje pjestimin e dy numrave
// nese pjestuesi eshte 0, funksioni duhet
// te nxjerre daljen "Nuk lejohet pjestimi me zero!"


function pjestimi (a,b) {
  if (b==0) return 'Nuk lejohet pjestimi me zero!'
  return a/b
}
console.log(pjestimi(3,0));