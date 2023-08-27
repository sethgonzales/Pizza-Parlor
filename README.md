Valentino's Pizza Parlor
#### By Seth Gonzales

#### An ordering website for Valentino's Pizza Parlor.

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

Valentino's Pizza Parlor is a user friendly website for customers to place pizza orders online. Customers select their preferred toppings and size, and receive an estimated total cost of the pizza pie,

## Setup/Installation Requirements

* Navigate to the Pizza Parlor repository on [Github](https://github.com/sethgonzales/Pizza-Parlor).
* Clone the code and download into a zip file. 
* Unzip the file and navigate inside the folder.  
* Open the index.html file in your preferred browser and begin exploring! 

## Tests

```
Describe: Pizza()
<!-- Test 1 -->
Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

<!-- Test 2 -->
Test: "It should return a Pizza object with properties for toppings, size, and customer name"
Code: const myPizza = new Pizza("Jeff", ["anchovies",   "pineapple"], "medium");
Expected Output: Pizza { name: "Jeff", toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.prototype.toppingsCalc()
<!-- Test 3 -->
Test: "It should calculate the cost of pizza toppings based on the number added to the order"
Code: const myPizza = new Pizza("Jeff", ["anchovies", "pineapple"], "medium");
  myPizza.toppingsCalc();
Expected Output: toppingsCost = "$4"

Describe: Pizza.prototype.sizeCalc()
<!-- Test 4 -->
Test: "It should calculate the cost of pizza size based on the size added to the order"
Code: const myPizza = new Pizza("Jeff", ["anchovies", "pineapple"], "medium");
  myPizza.sizeCalc();
Expected Output: toppingsCost = "$6"

Describe: Pizza.prototype.totalCostCalc()
<!-- Test 5 -->
Test: "It should calculate the total cost of pizza size based on the toppings and size added to the order"
Code: const myPizza = new Pizza("Jeff", ["anchovies", "pineapple"], "medium");
  myPizza.totalCostCalc();
Expected Output: totalCost = "$10"

<!-- Test 6 -->
Describe Pizza.prototype.toppingsToString() {
  Test: "It list out pizza toppings with correct use of punctuation"
Code: const myPizza = new Pizza("Jeff", ["anchovies", "pineapple"], "medium");
  myPizza.toppingsToString();
Expected Output: toppingsString = "anchovies and pineapple"
}
```

## Known Bugs

* Viewing not optimized for mobile devices or smaller screens.

## License

MIT License

Copyright (c) 2023 Seth Gonzales

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

If you run into any issues, or would like to contribute to our code, please email: sethgonzales157@gmail.com.