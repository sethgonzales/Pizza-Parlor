//Business Logic
function Pizza(name, toppings, size) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
  this.totalCost = 0;
}

Pizza.prototype.toppingsCalc = function () {
  let toppingsCost = 0;
  this.toppings.forEach(function (topping) {
    toppingsCost = toppingsCost + 2;
  });
  return toppingsCost;
};

Pizza.prototype.sizeCalc = function () {
  let sizeCost = 0;
  if (this.size === "Small") {
    sizeCost = 4;
  } else if (this.size === "Medium") {
    sizeCost = 6;
  } else if (this.size === "Large") {
    sizeCost = 8;
  }
  return sizeCost;
};

Pizza.prototype.totalCostCalc = function () {
  this.totalCost = this.toppingsCalc() + this.sizeCalc();
  return "$" + this.totalCost;
};

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();

  const customerName = document.querySelector("input#customer-name").value;
  const pizzaSize = document.querySelector("input[name=size-order]:checked").value;
  const pizzaToppings = document.querySelectorAll("input[type=checkbox]:checked");
  const toppingsArray = []

  pizzaToppings.forEach(function (checkbox) {
    toppingsArray.push(checkbox.value);
  });

  const myPizza = new Pizza(customerName, toppingsArray, pizzaSize);

  document.getElementById("show-cost").removeAttribute("class");
  document.getElementById("cost-value").innerText = myPizza.totalCostCalc();

}



window.addEventListener("load", function () {
  document.querySelector("form#order-form").addEventListener("submit", handleFormSubmission);
});