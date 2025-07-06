function runCommand() {
    const input = document.getElementById('commandInput').value.trim();
    let output = '';

    if (input === "ghost.check") {
        output = "✅ Ghostframe Status: Stable.";
    } else if (input.startsWith("ghost.open(")) {
        const page = input.slice(12, -2);
        output = "🔗 Attempting to open module: " + page;
        // Add actual redirection logic in next module
    } else {
        output = "⚠️ Unknown command.";
    }

    document.getElementById('output').innerText = output;
}