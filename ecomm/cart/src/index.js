import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

console.log("Cart Index");
document.querySelector('#dev-cart').innerHTML = cartText;