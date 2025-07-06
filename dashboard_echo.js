
function generateEcho() {
  const grid = document.getElementById("echoGrid");
  const echo = document.createElement("div");
  echo.className = "echo-box";
  echo.innerText = "Echo " + (grid.children.length + 1);
  grid.appendChild(echo);
}
