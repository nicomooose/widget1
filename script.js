// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to create a new track row
    function createTrackRow(trackNumber) {
        const trackDiv = document.createElement('div');
        trackDiv.className = 'track-row';

        // Create label for the track
        const trackLabel = document.createElement('label');
        trackLabel.textContent = "Track " + trackNumber;
        trackLabel.style.width = '100%';
        trackDiv.appendChild(trackLabel);

        // Title input with label
        const titleLabel = document.createElement('label');
        titleLabel.textContent = "Title";
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.placeholder = 'Title';
        titleInput.className = 'title-input';
        trackDiv.appendChild(titleLabel);
        trackDiv.appendChild(titleInput);

        // Single dropdown with label
        const singleLabel = document.createElement('label');
        singleLabel.textContent = "Single";
        const singleSelect = document.createElement('select');
        singleSelect.className = 'single-select';
        ['Yes', 'No', 'Maybe'].forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            singleSelect.appendChild(opt);
        });
        trackDiv.appendChild(singleLabel);
        trackDiv.appendChild(singleSelect);

        // Focus Track dropdown with label
        const focusLabel = document.createElement('label');
        focusLabel.textContent = "Focus Track";
        const focusSelect = document.createElement('select');
        focusSelect.className = 'focus-select';
        ['Yes', 'No', 'Maybe'].forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            focusSelect.appendChild(opt);
        });
        trackDiv.appendChild(focusLabel);
        trackDiv.appendChild(focusSelect);

        // Track Length input with label
        const lengthLabel = document.createElement('label');
        lengthLabel.textContent = "Track length";
        const lengthInput = document.createElement('input');
        lengthInput.type = 'text';
        lengthInput.placeholder = 'MM:SS';
        lengthInput.className = 'length-input';
        trackDiv.appendChild(lengthLabel);
        trackDiv.appendChild(lengthInput);

        // ISRC input with label
        const isrcLabel = document.createElement('label');
        isrcLabel.textContent = "ISRC";
        const isrcInput = document.createElement('input');
        isrcInput.type = 'text';
        isrcInput.placeholder = 'ISRC';
        isrcInput.className = 'isrc-input';
        trackDiv.appendChild(isrcLabel);
        trackDiv.appendChild(isrcInput);

        // Append the new track row to the container
        document.getElementById('track-list-container').appendChild(trackDiv);
    }

    // Create the first track row by default
    createTrackRow(1);

    // Add event listener for adding more rows
    document.getElementById('add-track-button').addEventListener('click', function() {
        const trackNumber = document.getElementById('track-list-container').childElementCount + 1;
        createTrackRow(trackNumber);
    });
});
