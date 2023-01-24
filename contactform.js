// Get the form element
var form = document.querySelector("form");

// Add a 'submit' event listener to the form
form.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the input elements
  var name = document.querySelector("input[name='name']");
  var email = document.querySelector("input[name='email_id']");
  var message = document.querySelector("textarea");

  // Check if the name field is not empty
  if (name.value.trim() === "") {
    alert("Name field is required.");
    return;
  }

  // Check if the email field is not empty and is a valid email address
  if (email.value.trim() === "" || !isValidEmail(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Check if the message field is not empty
  if (message.value.trim() === "") {
    alert("Message field is required.");
    return;
  }

  // If all fields are valid, submit the form
  form.submit();
});

// Function to check if a given string is a valid email address
function isValidEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
