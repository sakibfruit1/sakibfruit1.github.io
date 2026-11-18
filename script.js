
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

// SAKIBFRUIT SEARCH FUNCTIONALITY

const fruitSearch = document.getElementById("fruitSearch");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");

const fruitPages = {
    "mango": "mango.html",
    "banana": "banana.html",
    "orange": "orange.html",
    "pineapple": "pineapple.html",
    "watermelon": "watermelon.html",
    "pawpaw": "pawpaw.html",
    "papaya": "pawpaw.html",
    "avocado": "avocado.html",
    "guava": "guava.html",
    "coconut": "coconut.html",
    "passion fruit": "passion-fruit.html",
    "apple": "apple.html",
    "grapes": "grapes.html"
};

function searchFruit() {
    const fruit = fruitSearch.value.trim().toLowerCase();

    if (fruit === "") {
        searchMessage.textContent = "Please enter a fruit name.";
        return;
    }

    if (fruitPages[fruit]) {
        window.location.href = fruitPages[fruit];
    } else {
        searchMessage.textContent =
            "Sorry, we couldn't find that fruit. Try another name.";
    }
}

searchButton.addEventListener("click", searchFruit);

fruitSearch.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchFruit();
    }
});

// HEADER SEARCH ICON

const headerSearch = document.getElementById("headerSearch");

headerSearch.addEventListener("click", function() {
    fruitSearch.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    fruitSearch.focus();
});
