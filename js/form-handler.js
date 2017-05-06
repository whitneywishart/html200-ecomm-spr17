// console.log("I am the handler of forms");

function capture() {
  event.preventDefault();
  var email = document.customerInfo.email.value;

  console.log("Thanks for signing up for our mailing list, " + email + "!");
}
