// Form Validation
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Get form values
  const name = document.querySelector("input[name='username']").value;
  const email = document.querySelector("input[name='email_id']").value;
  const rollNo = document.querySelector("input[name='number']").value;
  // Validate form values
  if (name === "" || email === "" || rollNo === "") {
    alert("Please fill out all fields");
    return;
  }
  // Validate email address
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-
