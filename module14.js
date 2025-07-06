
document.addEventListener("DOMContentLoaded", () => {
  const logOutput = document.getElementById("logOutput");
  const feedbackLog = localStorage.getItem("ghostFeedbackLog");
  if (feedbackLog) {
    logOutput.textContent = feedbackLog;
  } else {
    logOutput.textContent = "No logs available.";
  }
});
