
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const operator = document.getElementById('operator').value;
    const feedback = document.getElementById('feedback').value.trim();
    const statusMsg = document.getElementById('statusMsg');

    if (feedback.length < 5) {
        statusMsg.textContent = "Feedback too short.";
        statusMsg.style.color = "#ff4f4f";
        return;
    }

    statusMsg.textContent = "Transmission successful. Feedback logged.";
    statusMsg.style.color = "#00ffc3";
    document.getElementById('feedback').value = '';
});
