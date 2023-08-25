Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should return a Pizza object with properties for toppings, size, and customer name"
Code: const myPizza = new Pizza("Jeff", ["anchovies", "pineapple"], "medium");
Expected Output: Pizza { name: "Jeff", toppings: ["anchovies", "pineapple"], size: "medium" }