document.addEventListener("DOMContentLoaded", () => {
    const welcomeTexts = document.querySelectorAll(".welcome h2, .welcome h5");

    setTimeout(() => {
        welcomeTexts.forEach(text => {
            text.style.opacity = "1";
            text.style.transform = "translateX(0)";
        });
    }, 500);

    function handleSeeAllButton(sectionClass, buttonId) {
        const cards = document.querySelectorAll(`${sectionClass} .card`);
        const button = document.getElementById(buttonId);
        
        if (cards.length > 4) {
            button.style.display = "block"; 
            cards.forEach((card, index) => {
                if (index >= 4) {
                    card.classList.add("hidden-card");
                }
            });

            button.addEventListener("click", (e) => {
                e.preventDefault();
                cards.forEach(card => card.classList.remove("hidden-card"));
                button.style.display = "none";
            });
        }
    }

    handleSeeAllButton(".freelancer-cards", "seeAllFreelancers");
    handleSeeAllButton(".course-cards", "seeAllCourses");

    const searchInput = document.querySelector(".search-bar input");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        document.querySelectorAll(".card").forEach(card => {
            let text = card.innerText.toLowerCase();
            card.style.display = text.includes(searchTerm) ? "block" : "none";
        });
    });

    const freelancerCards = document.querySelectorAll(".freelancer-cards .card");
    if (freelancerCards.length > 0) {
        freelancerCards[0].addEventListener("click", () => {
            window.location.href = "../freelancer2/details.html";
        });
    }

    const courseCards = document.querySelectorAll(".course-cards .card");
    courseCards.forEach(card => {
        card.addEventListener("click", () => {
            window.location.href = "courses2.html";
        });
    });
});
