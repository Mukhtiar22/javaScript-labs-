// Step 1: Iterate over an array
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (const item of dairy) {
        console.log(item);
    }
}

// Call the function to log dairy products
logDairy();
// Expected Output:
// cheese
// sour cream
// milk
// yogurt
// ice cream
// milkshake

// Step 2: Iterate over an object's own properties
const animal = {
    canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}

// Call the function to log bird's own properties
birdCan();
// Expected Output:
// canFly: true
// hasFeathers: true

// Step 3: Iterate over an object's properties, including prototype
function animalCan() {
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}

// Call the function to log all properties (own + prototype)
animalCan();
// Expected Output:
// canFly: true
// hasFeathers: true
// canJump: true
