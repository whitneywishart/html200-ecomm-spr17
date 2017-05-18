// console.log("I am the handler of forms");

function capture() {
  event.preventDefault();
  var email = document.customerInfo.email.value;
  console.log("Thanks for signing up for our mailing list, " + email + "!");
}

var cart = [];

$(".add").click(function(event){

  var name = $(event.target.parentElement).find(".name").text();
  var description = $(event.target.parentElement).find(".description").text();
  var price = $(event.target.parentElement).find(".price").text();

  // add the item to array
  cart.push({
    name: name,
    description: description,
    price: price});

  console.log(cart);
  refreshBadge();
});

// show count next to cart
function refreshBadge() {
  /* show count in badge */
  var badge = $("header").find(".badge");
  if (cart) {
    badge.text(cart.length);
  }
  console.log("You have " + cart.length + " items in your cart.");
}
