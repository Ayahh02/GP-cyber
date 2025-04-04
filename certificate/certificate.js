document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("certificate1.html")) {

        const name = localStorage.getItem("name");
        const commitment = localStorage.getItem("commitment");

        if (!name || commitment !== "true") {
            window.location.href = "certificate.html"; 
            return;
        }


        const date = new Date().toLocaleDateString();
        document.getElementById("certificate-name").innerText = name;
        document.getElementById("certificate-date").innerText = date;


        document.getElementById("certificate").classList.remove("hidden");

        document.getElementById("download").addEventListener("click", function () {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.addImage('certificate.jpg', 'JPEG', 10, 10, 180, 160);  

            
            doc.setFont("helvetica", "bold");
            doc.setFontSize(30);
            doc.text(name, 105, 90, { align: 'center' });  

            
            doc.setFontSize(20);
            doc.text(date, 105, 110, { align: 'center' });  

            doc.save("certificate.pdf");
        });
    } else if (window.location.pathname.includes("certificate.html")) {
      
        document.getElementById("generate").addEventListener("click", function () {
            const name = document.getElementById("name").value.trim();
            const commitment = document.getElementById("commitment").checked;

            if (name === "" || !commitment) {
                alert("Please enter your name and confirm commitment.");
                return;
            }

          
            localStorage.setItem("name", name);
            localStorage.setItem("commitment", commitment.toString());

          
            window.location.href = "certificate1.html";
        });
    }
});
