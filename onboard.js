
const params = new URLSearchParams(window.location.search);
const role = params.get("role");

const roleTitle = document.getElementById("role-title");
const roleDesc = document.getElementById("role-desc");
const input = document.getElementById("signature");

switch (role) {
  case "thought":
    roleTitle.textContent = "👁 Thought Architect";
    roleDesc.textContent = "Deploying modular cognition systems...";
    break;
  case "tactical":
    roleTitle.textContent = "🛰 Tactical Co-Pilot";
    roleDesc.textContent = "Calibrating precision support interface...";
    break;
  case "adaptive":
    roleTitle.textContent = "🔧 Adaptive Execution Agent";
    roleDesc.textContent = "Bootstrapping situational command layer...";
    break;
  case "ghostframe":
    roleTitle.textContent = "👻 Ghostframe Operator";
    roleDesc.textContent = "Initializing full-spectrum ops console...";
    break;
  default:
    roleTitle.textContent = "👤 Unknown Role";
    roleDesc.textContent = "Please return to mainframe.";
}

function sync() {
  const key = input.value.trim();
  if (!key) return alert("Enter your signature key.");
  roleTitle.textContent = "🧠 Syncing...";
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
}
