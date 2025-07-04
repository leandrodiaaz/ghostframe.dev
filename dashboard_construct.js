
function addConstruct() {
  const input = document.getElementById("constructInput");
  const name = input.value.trim();
  if (!name) return;

  const container = document.getElementById("constructList");
  const card = document.createElement("div");
  card.className = "construct-card";
  card.innerText = `🔹 Construct "${name}" deployed.`;
  container.appendChild(card);
  input.value = "";
}
