// Maestro Fijo - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle icon (hamburguer to close)
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('ri-menu-line');
                    icon.classList.add('ri-close-line');
                } else {
                    icon.classList.remove('ri-close-line');
                    icon.classList.add('ri-menu-line');
                }
            }
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('ri-close-line');
                    icon.classList.add('ri-menu-line');
                }
            });
        });
    }

    // 3. FAQ Accordion
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const allItems = document.querySelectorAll('.faq-item');
            
            // Close other items
            allItems.forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle current item
            currentItem.classList.toggle('active');
        });
    });

    // 4. WhatsApp Cotización Form Logic
    const quoteForm = document.getElementById('whatsapp-quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name').value.trim();
            const projectType = document.getElementById('form-project-type').value;
            const description = document.getElementById('form-description').value.trim();

            if (!name || !description) {
                alert('Por favor complete su nombre y la descripción de su proyecto.');
                return;
            }

            // WhatsApp details
            const phoneNumber = '51948319647'; // +51 948 319 647 (Peru)
            
            // Build pre-filled message
            const message = `¡Hola Maestro Fijo! Me gustaría solicitar una cotización.
            
*Nombre:* ${name}
*Tipo de Trabajo:* ${projectType}
*Descripción del Proyecto:* ${description}

Quedo atento a su respuesta.`;

            // Encode for URL
            const encodedText = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

            // Open in new tab
            window.open(whatsappUrl, '_blank');
        });
    }

    // 5. Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it enters the viewport
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
});
