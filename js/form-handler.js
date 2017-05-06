console.log("I am the handler of forms");

function capture() {
  event.preventDefault();
  console.log(document.customerInfo.email.value);
  var email = document .customerInfo.email.value;

  console.log("Thanks for submitting your email, " + email + "!");
}
