//Business Logic

//Pizza constructor
function Pizza(name, toppings, size) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
  this.totalCost = 0;
}
//calculation prototypes 
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

//returning string of toppings
Pizza.prototype.toppingsToString = function() {
  if (this.toppings.length === 0) {
    return "just bread ";
  }

  let toppingsString = "";
  for (let i = 0; i < this.toppings.length; i++) {
    if (this.toppings.length === 1) {
      toppingsString = this.toppings[i];
    } else if (this.toppings.length === 2) {
      toppingsString = this.toppings[0] + " and " + this.toppings[1];
    } else if (i === this.toppings.length - 1) {
      toppingsString += "and " + this.toppings[i];
    } else {
      toppingsString += this.toppings[i] + ", ";
    }
  }
  return toppingsString.toLowerCase();
};


//UI Logic
//order form submission handler
function handleFormSubmission(event) {
  event.preventDefault();

  //gather input values from form
  const customerName = document.querySelector("input#customer-name").value;
  const pizzaSize = document.querySelector("input[name=size-order]:checked").value;
  const pizzaToppings = document.querySelectorAll("input[type=checkbox]:checked");
  const toppingsArray = []
  pizzaToppings.forEach(function (checkbox) {
    toppingsArray.push(checkbox.value);
  });

  //create new instance of Pizza
  const myPizza = new Pizza(customerName, toppingsArray, pizzaSize);

  //update html with results of myPizza form data
  document.getElementById("show-form").setAttribute("class", "hidden");
  document.getElementById("show-cost").removeAttribute("class");
  document.getElementById("show-name").innerText = myPizza.name.toUpperCase() + ", ";
  document.getElementById("show-size").innerText = myPizza.size.toLowerCase();
  document.getElementById("show-toppings").innerText = myPizza.toppingsToString();
  document.getElementById("cost-value").innerText = myPizza.totalCostCalc();
}

//go back to original form that is now reset
function goBack() {
  document.getElementById("order-form").reset();
  document.getElementById("show-form").removeAttribute("class");
  document.getElementById("show-cost").setAttribute("class", "hidden");
}

//listeners
window.addEventListener("load", function () {
  document.querySelector("form#order-form").addEventListener("submit", handleFormSubmission);
  document.getElementById("go-back").addEventListener("click", goBack);
});