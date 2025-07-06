
document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("syncStatus");
  const details = document.getElementById("syncDetails");

  setTimeout(() => {
    status.textContent = "Synced ✅";
    details.innerHTML = "<p>Ghostframe modules up-to-date. No discrepancies found.</p>";
  }, 1500);
});
