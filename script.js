// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-track-button').addEventListener('click', function() {
        const trackNumber = document.getElementById('track-list-container').childElementCount + 1;

        const trackDiv = document.createElement('div');
        trackDiv.className = 'track-row';

        // Create label for the track
        const trackLabel = document.createElement('label');
        trackLabel.textContent = "Track " + trackNumber;
        trackDiv.appendChild(trackLabel);

        // Create input for the title
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.placeholder = 'Title';
        titleInput.className = 'title-input';
        trackDiv.appendChild(titleInput);

        // Create dropdown for "Single"
        const singleSelect = document.createElement('select');
        singleSelect.className = 'single-select';
        ['Yes', 'No', 'Maybe'].forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            singleSelect.appendChild(opt);
        });
        trackDiv.appendChild(singleSelect);

        // Create dropdown for "Focus Track"
        const focusSelect = document.createElement('select');
        focusSelect.className = 'focus-select';
        ['Yes', 'No', 'Maybe'].forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            focusSelect.appendChild(opt);
        });
        trackDiv.appendChild(focusSelect);

        // Create input for "Track Length"
        const lengthInput = document.createElement('input');
        lengthInput.type = 'text';
        lengthInput.placeholder = 'MM:SS';
        lengthInput.className = 'length-input';
        trackDiv.appendChild(lengthInput);

        // Create input for "ISRC"
        const isrcInput = document.createElement('input');
        isrcInput.type = 'text';
        isrcInput.placeholder = 'ISRC';
        isrcInput.className = 'isrc-input';
        trackDiv.appendChild(isrcInput);

        // Append the new track row to the container
        document.getElementById('track-list-container').appendChild(trackDiv);
    });
});
