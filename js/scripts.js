//Business Logic
function Pizza(name, toppings, size) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.toppingsCalc = function() {
  let toppingsCost = 0;
  this.toppings.forEach(function(topping) {
    toppingsCost = toppingsCost + 2;
  });
  return "$" + toppingsCost;
};