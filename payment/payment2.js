document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let cardHolder = document.getElementById("cardHolder").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let termsChecked = document.getElementById("terms").checked;
    let rememberCard = document.getElementById("rememberCard").checked;
    let selectedCard = document.querySelector('input[name="cardType"]:checked');

    if (!selectedCard) {
        alert("Please select a card type.");
        return;
    }

    if (!termsChecked) {
        alert("You must agree to the Terms of Service and Privacy Policy.");
        return;
    }

    if (cardNumber.length !== 16) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }

    let maskedCardNumber = cardNumber.substring(0, 4) + " **** **** " + cardNumber.substring(12, 16);
    
    let rememberText = rememberCard ? "\nYour card information will be remembered." : "\nYour card information will NOT be remembered.";

    alert(`Card successfully added!\nName: ${cardHolder}\nCard: ${maskedCardNumber}${rememberText}`);
});
