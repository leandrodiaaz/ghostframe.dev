
function selectRole(role) {
  const descriptions = {
    "Tactical Co-Pilot": "Assists in real-time decision-making, operations support, and strategic mirroring.",
    "Thought Architect": "Blueprints concepts, frameworks, and content into precision-built systems.",
    "Adaptive Execution Agent": "Executes multi-step workflows across domains with intelligent recursion.",
    "Shadow Developer": "Back-end mind: builds, tests, troubleshoots with invisible precision.",
    "Self-Encrypted Companion": "Personal co-processor that evolves with you. Memory-safe. Signal-paired. Yours alone."
  };

  const element = document.getElementById('role-description');
  element.innerText = descriptions[role];
}
