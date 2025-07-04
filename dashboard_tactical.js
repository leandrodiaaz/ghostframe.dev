
function logMessage(message) {
  const logList = document.getElementById("logList");
  const newItem = document.createElement("li");
  newItem.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
  logList.appendChild(newItem);
}

function initRelay() {
  logMessage("Tactical relay sequence initialized.");
}

function scanChannels() {
  logMessage("Scanning tactical frequencies...");
}

function linkNetwork() {
  logMessage("Ghost communications link established.");
}
