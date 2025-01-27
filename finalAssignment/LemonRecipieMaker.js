// Updated dishData based on the test cases
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax value
const tax = 1.2; // 20% tax

// Function to calculate and display prices
function getPrices(taxBoolean) {
  // Loop through all dishes
  for (let dish of dishData) {
    let finalPrice; // Declare finalPrice variable

    if (taxBoolean === true) {
      // Apply tax if taxBoolean is true
      finalPrice = dish.price * tax;
    } else if (taxBoolean === false) {
      // Use base price if taxBoolean is false
      finalPrice = dish.price;
    } else {
      // Handle invalid taxBoolean
      console.log("You need to pass a boolean to the getPrices call!");
      return; // Exit the function
    }

    // Log dish name and price
    console.log("Dish: " + dish.name, "Price: $" + finalPrice.toFixed(2));
  }
}

// Function to calculate and display discount
function getDiscount(taxBoolean, guests) {
  // Invoke getPrices() function
  getPrices(taxBoolean);

  // Check if guests parameter is valid
  if (typeof guests === "number" && guests > 0 && guests < 30) {
    let discount = 0; // Initialize discount

    if (guests < 5) {
      discount = 5; // Discount for less than 5 guests
    } else if (guests >= 5) {
      discount = 10; // Discount for 5 or more guests
    }

    console.log("Discount is: $" + discount);
  } else {
    // Handle invalid guests parameter
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Test Cases
getDiscount(true, 2);  // Tax applied, 2 guests
getDiscount(true, 10); // Tax applied, 10 guests
getDiscount(false, 3); // No tax, 3 guests
getDiscount(false, 25); // No tax, 25 guests
getDiscount(true, 35); // Invalid guests value
getDiscount(false, "five"); // Invalid guests value
