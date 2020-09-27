// Insert awesome game here!
const userName = prompt("What's your name ?");
const randNumber = Math.floor(Math.random() * 100) + 1;
let userTry = null;
const initialTries = 10;
let remainingTries = initialTries;

while (randNumber !== userTry && remainingTries > 0) {
userTry = parseInt(prompt("What's your guess ? (1~100)"));
remainingTries--;
if (userTry > randNumber) {
    console.log("That's less");
} else if (userTry < randNumber) {
    console.log("That's more");
}
}
if (randNumber === userTry) {
console.log("You win! " + userName + ", the winner is you !");
console.log(`(You used ${initialTries - remainingTries} tries.)`);
} else {
console.log("BOOO! YOU LOSE !");
}
