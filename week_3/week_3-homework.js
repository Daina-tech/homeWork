//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["pepperoni", "mushrooms", "pineapple", "cheese"];

//i.e. "Welcome to Fun House Pizza, our toppings are: a, b, c, ..."
function greetCustomer() {
  let greeting = `Welcome to Fun House Pizza, our toppings are: `;

  for (let toppings of pizzaToppings) {
    greeting += `${toppings},`;
  }

  console.log(greeting);
}
greetCustomer();
//Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping},`;
  }

  console.log(`${order} coming up!`);

  return [size, crust, toppings];
}

//Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza([size, crust, toppings]) {
  console.log("Cooking pizza...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}
//Create a servePizza function that
//has a parameter of a pizza Object
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in
function servePizza(pizza) {
  let yourPizza = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    yourPizza += `${topping},`;
  }

  yourPizza += ` ..Enjoy!`;

  console.log(yourPizza);

  return pizza;
}
//Call the getPizzaOrder function with the size, crust, and toppings as inputs
servePizza(preparePizza(getPizzaOrder("large", "thin", "pepperoni", "cheese")));
