function launchRole(role) {
  const encoded = encodeURIComponent(role);
  window.location.href = `onboard.html?role=${encoded}`;
}