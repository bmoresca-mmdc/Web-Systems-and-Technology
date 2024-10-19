

// Modal Functionality for Image Zoom on Issue Page
function openModal(imageElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "block";   // Show the modal
    modalImg.src = imageElement.src; // Set modal image to clicked image
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}

// Smooth scrolling between sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Subscription Form Validation
document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById('subscribe-email').value;
    const subscribeStatus = document.getElementById('subscribe-status');

    // Basic email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
        subscribeStatus.innerText = 'Thank you for subscribing!';
        subscribeStatus.style.color = 'green';
        // Optionally, you can clear the input field
        document.getElementById('subscribe-email').value = '';
    } else {
        subscribeStatus.innerText = 'Please enter a valid email address.';
        subscribeStatus.style.color = 'red';
    }
});