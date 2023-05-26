console.log('JS OK');

// Esercizio

// KM Request to the user

const userKm = parseInt(prompt('Please enter the km of the route', 37));
console.log(userKm);


// Request User Age

const userAge = parseInt(prompt('Please enter your age', 22));
console.log(userAge);


// Added variable price for km and discount

const kmPrice = 0.21;

const youthDiscount = 20 / 100;

const seniorDiscount = 40 / 100;


// Calculate ticket price

const priceTicket = userKm * kmPrice;
console.log(priceTicket);
