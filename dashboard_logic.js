
function switchTab(tab) {
    const content = document.getElementById('content');
    if (tab === 'ai') {
        content.innerHTML = "Deploying AI Protocols... Systems check passed.";
    } else if (tab === 'tactical') {
        content.innerHTML = "Initializing Tactical Relay... Secure comms enabled.";
    } else if (tab === 'constructs') {
        content.innerHTML = "Launching Construct Engine... Framework initializing.";
    }
}
