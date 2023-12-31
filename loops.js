// Loops in Javascripts

//This loop counts from 0 to 10.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Do While loop
// Be careful with this one because, unlike while, it will always run at least once
// and then checks if the condition is true.
let j = 0;
do {
  j += 1;
  console.log(j);
} while (j <= 0);

// While loops
// While the condition is TRUE, run the program.
  let k=0;
   while (k < 10) {   
      k++;
      console.log(k);
    }
    
// Exercieses
// Ushtrime

// Create a loop that gets two numbers from the user and prints the sum of all numbers between them.
// Krijo nje loop qe merr dy numra nga perdoruesi dhe nxjerr shumen e te gjithe numrave ndermjet tyre.
let num1 = parseInt(prompt("Enter first number: ")); 
let num2 = parseInt(prompt("Enter second number: "));
let sum = 0;
// Handle if the first number is greater than the second number.
if(num1 > num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
}
for(let i = num1; i <= num2; i++) {
  sum += i;
}
document.write(`First Number was: ${num1} </br>`);
document.write(`Second Number was: ${num2}</br>`);
document.write(`The sum of the numbers between the given numbers is: ${sum}`);
