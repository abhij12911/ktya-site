//Event section:
// Get the element with the class "event-card"
var eventCards = document.getElementsByClassName("event-card");

// Loop through all the event cards
for (var i = 0; i < eventCards.length; i++) {
  // Get the event date
  var eventDate = new Date(eventCards[i].getAttribute("data-date"));

  // Get the current date
  var today = new Date();

  // Compare the event date to the current date
  if (eventDate < today) {
    // If the event date is in the past, add the "past" class to the card
    eventCards[i].classList.add("past");
  }
  // Add an event listener to the event card
  eventCards[i].addEventListener("click", function() {
    // Toggle the "open" class on the event card
    this.classList.toggle("open");
  });
}

//Services section:
// Get the element with the class "service-card"
var serviceCards = document.getElementsByClassName("service-card");

// Loop through all the service cards
for (var i = 0; i < serviceCards.length; i++) {
  // Add an event listener to the service card
  serviceCards[i].addEventListener("click", function() {
    // Toggle the "open" class on the service card
    this.classList.toggle("open");
  });
}

//Contact section:
// Get the form element
var contactForm = document.getElementById("contactForm");

// Add an event listener to the form submit event
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Get the form data
  var formData = new FormData(contactForm);

  // Send the form data to the server
  fetch("https://example.com/submit-form", {
    method: "POST",
    body: formData
  })
    .then(function(response) {
      // Show a success message
      alert("Thank you for contacting us!");
    })
    .catch(function(error) {
      // Show an error message
      alert("An error occurred. Please try again later.");
    });
});
alert("Book distribution request sent successfully!");
});
const wallpaper = document.getElementById("wallpaper");

// Fade in effect for the wallpaper
wallpaper.style.opacity = 0;

window.onload = function() {
  setTimeout(() => {
    wallpaper.style.transition = "opacity 1s ease-in-out";
    wallpaper.style.opacity = 1;
  }, 1000);
};

// Blood Donation Form
const bloodForm = document.getElementById("blood-donation-form");
bloodForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const bloodType = document.getElementById("blood-type").value;
  // Validate form values
  if (name === "" || email === "" || bloodType === "") {
    alert("Please fill out all fields");
    return;
  }
  // Send form values to server
  // ...
  // Show success message
  alert("Blood donation request sent successfully!");
});

