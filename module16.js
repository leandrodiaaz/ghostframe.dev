
function executeCommand() {
  const input = document.getElementById("devInput").value.trim();
  const output = document.getElementById("outputLog");

  let response;
  try {
    response = eval(input);
  } catch (e) {
    response = `Error: ${e.message}`;
  }
  output.textContent += `> ${input}\n${response}\n\n`;
}
