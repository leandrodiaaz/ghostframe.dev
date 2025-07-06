function syncSignature() {
  const code = document.getElementById("syncInput").value.trim();
  const status = document.getElementById("syncStatus");

  if (code === "LΣN-07") {
    status.innerHTML = "✅ Signature Sync Successful. Ghostframe Authorized.";
    status.style.color = "#00ffcc";
  } else {
    status.innerHTML = "❌ Invalid Sync Code.";
    status.style.color = "#ff4444";
  }
}
