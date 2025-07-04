document.getElementById('syncForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const syncStatus = document.getElementById('syncStatus');
    const input = document.getElementById('signature').value.trim();
    syncStatus.classList.remove('hidden');

    setTimeout(() => {
        if (input.toUpperCase() === "LΣN-07" || input.toLowerCase() === "len-07") {
            syncStatus.innerText = "✅ Sync complete. Welcome, Operator Ghost.";
        } else {
            syncStatus.innerText = "❌ Invalid Signature. Please try again.";
        }
    }, 1500);
});
