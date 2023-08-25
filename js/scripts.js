//Business Logic
function Pizza(name, toppings, size) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.toppingsCalc = function () {
  let toppingsCost = 0;
  this.toppings.forEach(function (topping) {
    toppingsCost = toppingsCost + 2;
  });
  return "$" + toppingsCost;
};

Pizza.prototype.sizeCalc = function () {
  let sizeCost = 0;

  if (this.size === "Small") {
    sizeCost += 4;
  } else if (this.size === "Medium") {
    sizeCost += 6;
  } else if (this.size === "Large") {
    sizeCost += 8;
  }
  return "$" + sizeCost;
};