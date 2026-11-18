
// SAKIBFRUIT SCROLL REVEAL

const revealElements = document.querySelectorAll(
    '.nutrition-section, .benefit-card, .shopping-section, .about-section'
);

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});
