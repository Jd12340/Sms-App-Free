document.getElementById("smsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phoneNumber").value;
    const message = document.getElementById("message").value;
    const responseElement = document.getElementById("response");

    responseElement.innerText = "Sending...";

    fetch("https://textbelt.com/text", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            phone: phoneNumber,
            message: message,
            key: "textbelt"
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            responseElement.innerText = "SMS sent successfully!";
            responseElement.style.color = "#4CAF50";
        } else {
            responseElement.innerText = "Error: " + data.error;
            responseElement.style.color = "#FF5733";
        }
    })
    .catch(error => {
        responseElement.innerText = "Error: " + error.message;
        responseElement.style.color = "#FF5733";
    });
});
