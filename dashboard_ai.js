
function activateProtocol(protocolName) {
  const output = document.getElementById('protocol-output');
  output.innerHTML = `<strong>${protocolName}</strong> is now deploying...<br>Status: <em>Online</em>`;
  output.style.color = '#00ffc3';
}
