document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    // Close nav menu when a link is clicked (for mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('is-active');
                navMenu.classList.remove('active');
            }
        });
    });

    // ScrollReveal initialization
    ScrollReveal().reveal('.reveal', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        interval: 100,
        easing: 'ease-in-out',
        mobile: true
    });

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            // Close all other open answers
            document.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
                if (activeQuestion !== question) {
                    activeQuestion.classList.remove('active');
                    activeQuestion.nextElementSibling.style.maxHeight = null;
                    activeQuestion.nextElementSibling.style.paddingBottom = '0';
                }
            });

            // Toggle current answer
            if (isActive) {
                question.classList.remove('active');
                answer.style.maxHeight = null;
                answer.style.paddingBottom = '0';
            } else {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.paddingBottom = 'var(--spacing-sm)';
            }
        });
    });
});
