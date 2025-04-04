// Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function () {
    let filter = this.value.toLowerCase();
    let courses = document.querySelectorAll('.card');

    courses.forEach(course => {
        let title = course.querySelector('h4').innerText.toLowerCase();
        if (title.includes(filter)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
});


function navigateToCourse() {
    window.location.href = "courses2.html";
}
