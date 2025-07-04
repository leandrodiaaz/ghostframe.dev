
document.getElementById("submit-btn").addEventListener("click", function () {
    const inputKey = document.getElementById("signature-input").value.trim();
    if (inputKey === "LΣN-07") {
        window.location.href = "dashboard.html";
    } else {
        alert("Access Denied");
        window.location.href = "https://google.com"; // Or another neutral redirect
    }
});
