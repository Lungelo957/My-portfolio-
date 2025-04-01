document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
    hideLoader();
});

function showLoader() {
    document.getElementById('loader').style.display = 'flex';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Show loader when navigating to a new page
window.addEventListener('beforeunload', function() {
    showLoader();
});
