Describe: Pizza()
<!-- Test 1 -->
Test: "It should return a Pizza object with two properties for toppings and size"
Code: 
  const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

<!-- Test 2 -->
Test: "It should return a Pizza object with properties for toppings, size, and customer name"
Code: 
  const myPizza = new Pizza("Jeff", ["anchovies",   "pineapple"], "medium");
Expected Output: Pizza { name: "Jeff", toppings: ["anchovies", "pineapple"], size: "medium" }


Describe: Pizza.prototype.toppingsCalc()
<!-- Test 3 -->
Test: "It should calculate the cost of pizza toppings based on the number added to the order"
Code: 
  const myPizza = new Pizza("Jeff", ["anchovies", "pineapple"], "medium");
  myPizza.toppingsCalc();
Expected Output: toppingsCost = "$4"


Describe: Pizza.prototype.sizeCalc()
<!-- Test 4 -->
Test: "It should calculate the cost of pizza size based on the size added to the order"
Code: 
  const myPizza = new Pizza("Jeff", ["anchovies", "pineapple"], "medium");
  myPizza.sizeCalc();
Expected Output: toppingsCost = "$6"


Describe: Pizza.prototype.totalCostCalc()
<!-- Test 5 -->
Test: "It should calculate the total cost of pizza size based on the toppings and size added to the order"
Code: 
  const myPizza = new Pizza("Jeff", ["anchovies", "pineapple"], "medium");
  myPizza.totalCostCalc();
Expected Output: totalCost = "$10"