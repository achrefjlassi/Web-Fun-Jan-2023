// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);


// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

function pizzaOven(crustType,sauceType,cheeses,toppings) {
    var sandwich = {} ;
    sandwich.crustType = crustType;
    sandwich.sauceType = sauceType;
    sandwich.cheeses = cheeses;
    sandwich.toppings = toppings;
    return sandwich;
}
var s2 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni", "sausage"])
var s3 = pizzaOven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"])
console.log(s2);
console.log(s3);
var s4 = pizzaOven("deep dish","traditional",["mozzarella"],["maiyonaise", "harisa"]);
var s5 = pizzaOven("hand tossed","marinara",["mozzarella", "feta"],["motard","olives","barbaque"])
console.log(s4);
console.log(s5);


function randomPizza(){
    var pizzas = [s2,s3,s4,s5]
    return pizzas[Math.floor(Math.random()*pizzas.length)]
}
var pizza = randomPizza()
console.log(pizza)