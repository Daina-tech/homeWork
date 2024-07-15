//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["pepperoni", "mushrooms", "pineapple", "cheese"];

//i.e. "Welcome to Fun House Pizza, our toppings are: a, b, c, ..."
const alert = ("Welcome to Fun House Pizza, our toppings are: " + pizzaToppings.join(", "));
//Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, toppings) {
  console.log("Order up! Here's your " + size + " " + crust + " pizza with " + toppings.join(", ") + " coming up!");
  console.log(size, crust, toppings);
}
//Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza(pizza) {
  console.log("Cooking pizza...");
  return {
    size: pizza[0],
    crust: pizza[1],
    toppings: pizza[2]
  };
}
//Create a servePizza function that
//has a parameter of a pizza Object
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in
function servePizza(pizza) {
  console.log("Order up! Here's your " + pizza.size + " " + pizza.crust + " pizza with " + pizza.toppings.join(", ") + " Enjoy!");
  return pizza;
}
//Call the getPizzaOrder function with the size, crust, and toppings as inputs
getPizzaOrder("large", "thick", pizzaToppings);
//Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
//i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"
function listToppings(toppings) {
  toppings[toppings.length - 1] = "and " + toppings[toppings.length - 1];
  return toppings;
}
//In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.
function getPizzaOrder(size, crust, toppings) {
  if (toppings.length === 0) {
    console.log("One " + size + " " + crust + " cheese pizza coming up!");
  } else {
    console.log("One " + size + " " + crust + " plain cheese pizza " + listToppings(!toppings).join(", ") + " coming up!");
  }
  console.log(size, crust, toppings);
}
//In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
getPizzaOrder("large", "thick", ["pepperoni", "mushrooms", "pineapple", "cheese", "onions"]);
return alert ("We do not offer onions, please order again");

