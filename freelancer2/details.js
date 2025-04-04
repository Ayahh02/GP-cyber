document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded"); // Check if the script is loaded correctly

    let ratingElements = document.querySelectorAll(".rating");
    
    ratingElements.forEach(rating => {
        rating.addEventListener("click", function() {
            let newRating = prompt("Enter new rating (1-5 stars):");
            if (newRating >= 1 && newRating <= 5) {
                rating.innerHTML = "★".repeat(newRating) + "☆".repeat(5 - newRating);
            } else {
                alert("Invalid rating. Please enter a number between 1 and 5.");
            }
        });
    });


});
