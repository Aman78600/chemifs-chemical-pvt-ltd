// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Sticky header


// Contact form with MailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Initialize EmailJS with your public key
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key

    const formData = new FormData(this);
    const templateParams = {
        from_name: formData.get('name'),
        from_company: formData.get('company'),
        from_email: formData.get('email'),
        from_phone: formData.get('phone'),
        message: formData.get('message'),
        to_email: 'chemifschemical@gmail.com'
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Replace with your service ID and template ID
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});