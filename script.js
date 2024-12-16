// Smooth scrolling when clicking on a link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields before submitting the form.');
    } else {
        alert('Thank you for your message!');
    }
});

// Change header color on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333';
    } else {
        header.style.backgroundColor = 'linear-gradient(to right, #831bcd, #f9620b)';
    }
});

// Toggle class for responsive menu (if you have one)
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
});
