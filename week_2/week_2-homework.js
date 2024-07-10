let pizzaPlace = "Daina's Pizza";
let numberOfToppings = 10;

console.log(typeof pizzaPlace);
console.log(pizzaPlace);

console.log(typeof numberOfToppings);
console.log(numberOfToppings);

console.log(`at ${pizzaPlace}, we have ${numberOfToppings} toppings.`);

if (numberOfToppings > 10) {
  console.log("You can't have more than 10 toppings.");
} else {
  console.log("You can have as many toppings as you want.");
}
