// console.log("I am the handler of forms");

function capture() {
  event.preventDefault();
  var email = document.customerInfo.email.value;
  console.log("Thanks for signing up for our mailing list, " + email + "!");
}

var cart = [
  { name: "Reversible Plaid", price: 26.99, id: "item01"},
  { name: "Fringed Plaid", price: 18.99, id: "item02"},
  { name: "Multi Color", price: 22.99, id: "item03"},
  { name: "Northern Lights", price: 29.99, id: "item04"},
  { name: "Ombre Infinity", price: 11.99, id: "item05"},
  { name: "Ashby Twill", price: 70.99, id: "item06"},
  { name: "Wool Cable Knit", price: 49.99, id: "item07"},
  { name: "Etro Paisley-Print Silk", price: 26.99, id: "item08"}
];

function handleClick (cart) {
  var cartTotal = 0;
  for (var cart = 0; index < cart.id; index++) {

  cartTotal = cartTotal + cart.id(length);
  }
  console.log("You have " + cartTotal + " items in your cart.");
}
