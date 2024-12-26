// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    // Grab form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display response message
    const response = document.getElementById("form-response");
    
    // Simulate form submission (you would typically send this data to a server)
    response.textContent = `Thank you, ${name}! Your message has been sent. We will get back to you at ${email}.`;
    
    // Clear the form
    document.getElementById("contact-form").reset();
}
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }  // Reset to first slide
  slides[slideIndex - 1].style.display = "block";  // Show current slide
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides(); // Start the slideshow
