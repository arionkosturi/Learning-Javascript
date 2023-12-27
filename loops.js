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

// Create a loop that gets two numbers from the user and prints the sum of all numbers between them.
let num1 = parseInt(prompt("Enter first number: ")); 
let num2 = parseInt(prompt("Enter second number: "));({sigint:true});
let sum = 0;
for(let i = num1; i <= num2; i++) {
  sum += i;
}
console.log(sum);
