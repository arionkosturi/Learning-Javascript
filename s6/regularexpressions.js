// sentence = 'lorem qkodkqda 2 23 saadl 2 31 230'

// function num(s) {
//   words = s.split(" ")
//   return words;
// }
// console.log(num(sentence));

function f(s, p, r) { 
  // kur thirret f- s eshte stringu, p paterna e cila nese gjindet ne s atehere zevendesohet me r
    s.replace(p,r)

}
console.log(
  f('Une jam Arti jam 22 vjec', /\d{1,}/g, 'x')
);
// Une jam Arti jam x vjec