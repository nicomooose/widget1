// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-track-button').addEventListener('click', function() {
        const trackDiv = document.createElement('div');
        trackDiv.className = 'track-row';
        trackDiv.textContent = "Track " + (document.getElementById('track-list-container').childElementCount + 1);
        document.getElementById('track-list-container').appendChild(trackDiv);
    });
});
