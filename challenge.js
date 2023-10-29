// Good Luck! You got this 💪🏾
// Write your code here.

const bill = 275;

let tip;
if (bill >= 50 && bill <= 300) {
  tip = bill * 0.15;
} else {
  tip = bill * 0.20; 
}

const totalValue = bill + tip;

const resultString = `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}.`;

console.log(resultString);