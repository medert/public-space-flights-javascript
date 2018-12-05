// Your code here!
const dehydratedBanana = 1.27;
const tofuCake = 4.17;
const cheeseSpread = 3.79;
const dehydratedIceCreamSandwich = 0.75;

console.log(`It's working so far!`);

console.log(`Hello brave customer! Welcome to our exclusive space flight tours.`);
let numAdultTickets = prompt(`How many adult tickets would you like?`);
console.log(`> ` + numAdultTickets);
let numChildTickets = prompt(`How many child tickets would you like?`);
console.log(`> ` + numChildTickets);
console.log(`Here are your ${numAdultTickets} adult tickets and ${numChildTickets} child tickets!`);

console.log(`Two tofu cakes and two dehydrated ice cream sandwiches cost $${2 * (tofuCake + dehydratedIceCreamSandwich)}`);
console.log(`Eight cheese spreads and a dehydrated banana cost $${(8 * cheeseSpread + dehydratedBanana)}`);
let sum = 3 * (dehydratedBanana + tofuCake + cheeseSpread + dehydratedIceCreamSandwich);
console.log(`Three of each item on the menu cost $${(sum)}`);
