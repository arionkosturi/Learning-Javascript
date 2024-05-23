// Te shkruhet funksioni i cili pranon objektin e definuar ne vijim 
//dhe kthen daljen: ‘Une jam John, jam 24 vjec’

let person = { 
  name: 'John', 
  surname: 'Smith', 
  birth: 1999
}
function printPerson({name, birth} = person) { 
  return `Une jam ${name}, jam ${(2024-birth)}`}
console.log(printPerson());;