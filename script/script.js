console.log('JS OK');

// Esercizio

// Take the element from DOM

const priceTicketPlaceholder = document.getElementById('price-ticket');
console.log(priceTicketPlaceholder);


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


// Calculate ticket price and discount

let finalTicketPrice = priceTicket

if (userAge < 18) {
    finalTicketPrice -= finalTicketPrice * youthDiscount;
} else if (userAge >= 65) {
    finalTicketPrice -= finalTicketPrice * seniorDiscount;
}

console.log(finalTicketPrice.toFixed(2));

// Write final price into DOM 

priceTicketPlaceholder.innerText = finalTicketPrice.toFixed(2);