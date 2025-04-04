document.addEventListener("DOMContentLoaded", function() {
    let editButtons = document.querySelectorAll(".edit");
    let saveButtons = document.querySelectorAll(".save-button");
    let addServiceBtn = document.getElementById("add-service-btn");
    let addServiceForm = document.getElementById("add-service-form");
    let serviceContainer = document.getElementById("services-container");
    let resumeInput = document.getElementById("resume-upload");
    let resumeDownload = document.getElementById("resume-download");


    document.querySelectorAll("input, textarea").forEach(input => input.setAttribute("disabled", "true"));
    document.getElementById("resume-upload").style.display = "none";

    const profilePic = document.querySelector(".profile-pic");
    const profilePicInput = document.getElementById("profile-pic-upload");
    profilePic.style.cursor = "default";

    editButtons.forEach(edit => {
        edit.addEventListener("click", function() {
            let container = edit.parentElement;
            let fields = container.querySelectorAll("[contenteditable]");
            fields.forEach(field => {
                field.setAttribute("contenteditable", "true");
                field.focus();
            });

            let inputFields = container.querySelectorAll("input, textarea");
            inputFields.forEach(input => input.removeAttribute("disabled"));

            if (container.contains(profilePic)) {
                profilePic.style.cursor = "pointer";
            }

            if (container.contains(resumeInput)) {
                resumeInput.style.display = "inline-block";
            }

            let saveButton = container.querySelector(".save-button");
            if (saveButton) saveButton.style.display = "block";
        });
    });


    saveButtons.forEach(button => {
        button.addEventListener("click", function() {
            let container = button.parentElement;
            let fields = container.querySelectorAll("[contenteditable]");
            fields.forEach(field => {
                field.setAttribute("contenteditable", "false");
            });

            let inputFields = container.querySelectorAll("input, textarea");
            inputFields.forEach(input => input.setAttribute("disabled", "true"));

            if (container.contains(profilePic)) {
                profilePic.style.cursor = "default";
            }

            if (container.contains(resumeInput)) {
                resumeInput.style.display = "none";
            }

            button.style.display = "none";
        });
    });


    addServiceBtn.addEventListener("click", function() {
        addServiceForm.style.display = addServiceForm.style.display === "none" ? "flex" : "none";
    });


    addServiceForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let title = document.getElementById("service-title").value;
        let description = document.getElementById("service-description").value;
        let imageInput = document.getElementById("service-image");
        let imageFile = imageInput.files[0];

        let newCard = document.createElement("div");
        newCard.classList.add("subject-card");

        if (imageFile) {
            let reader = new FileReader();
            reader.onload = function(e) {
                newCard.innerHTML = `<img src="${e.target.result}" alt="${title}"><p>${title}</p><p>${description}</p>`;
                serviceContainer.appendChild(newCard);
            };
            reader.readAsDataURL(imageFile);
        } else {
            newCard.innerHTML = `<p>${title}</p><p>${description}</p>`;
            serviceContainer.appendChild(newCard);
        }

        addServiceForm.style.display = "none";
        addServiceForm.reset();
    });

    profilePic.addEventListener("click", function() {
        if (!profilePic.hasAttribute("data-editable")) return;
        profilePicInput.click();
    });

    profilePicInput.addEventListener("change", function(event) {
        let reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    });
});
