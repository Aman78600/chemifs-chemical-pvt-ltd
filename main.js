// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on any link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Sticky header


// Contact form with MailJS
// Initialize EmailJS with your public key
emailjs.init('EgPzrBz3_2Gh0J6RE');

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');
        const btnIcon = document.getElementById('btn-icon');
        const formMessage = document.getElementById('form-message');

        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
        btnText.textContent = 'Sending...';
        if (btnIcon) btnIcon.classList.add('animate-spin');

        const formData = new FormData(this);
        const templateParams = {
            from_name: formData.get('name'),
            from_company: formData.get('company') || 'N/A',
            from_email: formData.get('email'),
            from_phone: formData.get('phone'),
            subject: formData.get('subject') || 'General Inquiry',
            message: formData.get('message'),
            to_email: 'chemifschemical@gmail.com'
        };

        emailjs.send('service_0yc8hc7', 'template_ntqw25h', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                formMessage.innerHTML = `
                    <div class="flex items-center text-green-800 bg-green-100 border border-green-300">
                        <svg class="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div>
                            <p class="font-bold">Message Sent Successfully!</p>
                            <p class="text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                        </div>
                    </div>
                `;
                formMessage.classList.remove('hidden');
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
            }, function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                formMessage.innerHTML = `
                    <div class="flex items-center text-red-800 bg-red-100 border border-red-300">
                        <svg class="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div>
                            <p class="font-bold">Failed to Send Message</p>
                            <p class="text-sm">Please try again or contact us directly at info@chemifs.com</p>
                        </div>
                    </div>
                `;
                formMessage.classList.remove('hidden');
                
                // Hide error message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
            })
            .finally(function() {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                btnText.textContent = 'Send Message';
                if (btnIcon) btnIcon.classList.remove('animate-spin');
            });
    });
}

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