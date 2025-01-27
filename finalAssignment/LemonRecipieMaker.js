// Array of dish data
const dishData = [
    { name: "Pasta", price: 8 },
    { name: "Pizza", price: 12 },
    { name: "Salad", price: 5 }
  ];
  
  // Tax value
  const tax = 1.2; // 20% tax
  
  // Step 1: Define the `getPrices()` function with the `taxBoolean` parameter
  function getPrices(taxBoolean) {
    // Step 2: Loop over the `dishData` array
    for (let dish of dishData) {
      // Step 3: Declare the `finalPrice` variable
      let finalPrice;
  
      // Step 4: Check if `taxBoolean` is true
      if (taxBoolean === true) {
        finalPrice = dish.price * tax; // Price with tax
      } 
      // Step 5: Check if `taxBoolean` is false
      else if (taxBoolean === false) {
        finalPrice = dish.price; // Price without tax
      } 
      // Step 6: Handle invalid `taxBoolean` values
      else {
        console.log("You need to pass a boolean to the getPrices call!");
        return; // Exit the function
      }
  
      // Step 7: Log the dish name and final price
      console.log("Dish: " + dish.name, "Price: $" + finalPrice.toFixed(2));
    }
  }
  
  // Step 8: Define the `getDiscount()` function with `taxBoolean` and `guests` parameters
  function getDiscount(taxBoolean, guests) {
    // Step 9: Invoke `getPrices()` with the `taxBoolean` parameter
    getPrices(taxBoolean);
  
    // Step 10: Check if `guests` is a number between 1 and 29
    if (typeof guests === "number" && guests > 0 && guests < 30) {
      // Step 11: Declare the `discount` variable
      let discount = 0;
  
      if (guests < 5) {
        discount = 5; // 5% discount for less than 5 guests
      } else if (guests >= 5) {
        discount = 10; // 10% discount for 5 or more guests
      }
  
      console.log("Discount is: $" + discount);
    } 
    // Step 12: Handle invalid `guests` values
    else {
      console.log("The second argument must be a number between 0 and 30");
    }
  }
  
  // Example calls
  getDiscount(true, 2); // Valid: tax applied, 2 guests
  getDiscount(false, 10); // Valid: no tax, 10 guests
  getDiscount(false, 31); // Invalid: guests exceed limit
  getDiscount("true", 5); // Invalid: taxBoolean is not a boolean
  getDiscount(true); // Invalid: guests argument missing
  