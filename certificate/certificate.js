document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("certificate1.html")) {
        // This is the certificate page (certificate1.html)
        const name = localStorage.getItem("name");
        const commitment = localStorage.getItem("commitment");

        if (!name || commitment !== "true") {
            window.location.href = "certificate.html"; // Redirect back to the entry page if data is not valid
            return;
        }

        // Set the name and date on the certificate
        const date = new Date().toLocaleDateString();
        document.getElementById("certificate-name").innerText = name;
        document.getElementById("certificate-date").innerText = date;

        // Show the certificate
        document.getElementById("certificate").classList.remove("hidden");

        // Download PDF button functionality
        document.getElementById("download").addEventListener("click", function () {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Add the certificate image to the PDF
            doc.addImage('certificate.jpg', 'JPEG', 10, 10, 180, 160);  // Adjust the size and position as needed

            // Add name on top of the certificate image (positioned in the center)
            doc.setFont("helvetica", "bold");
            doc.setFontSize(30);
            doc.text(name, 105, 90, { align: 'center' });  // Center the name on the certificate

            // Add date on top of the certificate image (positioned just below the name)
            doc.setFontSize(20);
            doc.text(date, 105, 110, { align: 'center' });  // Center the date below the name

            // Save the document as certificate.pdf
            doc.save("certificate.pdf");
        });
    } else if (window.location.pathname.includes("certificate.html")) {
        // This is the entry page (certificate.html)
        document.getElementById("generate").addEventListener("click", function () {
            const name = document.getElementById("name").value.trim();
            const commitment = document.getElementById("commitment").checked;

            if (name === "" || !commitment) {
                alert("Please enter your name and confirm commitment.");
                return;
            }

            // Save the data to localStorage
            localStorage.setItem("name", name);
            localStorage.setItem("commitment", commitment.toString());

            // Redirect to certificate1.html page
            window.location.href = "certificate1.html";
        });
    }
});
