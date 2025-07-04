
function runSystemSync() {
    const statusEl = document.getElementById('syncStatus');
    statusEl.textContent = "Syncing...";
    setTimeout(() => {
        statusEl.textContent = "Sync Complete. Ghostframe is operational.";
    }, 2000);
}
