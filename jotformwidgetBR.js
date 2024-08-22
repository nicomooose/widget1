<script src="//js.jotform.com/JotFormCustomWidget.min.js"></script>
<script type="text/javascript">
  (function() {
    // Initialize the track counter
    let trackCounter = 1;

    // Set up the widget when the form is ready
    JFCustomWidget.subscribe("ready", function(data) {
      // Initialize the widget with existing data, if any (for edits)
      if (data.value) {
        const savedData = JSON.parse(data.value);
        savedData.forEach((track, index) => {
          createTrackRow(index + 1, track);
          trackCounter = index + 2;
        });
      } else {
        createTrackRow(trackCounter);  // Add the first row
      }
    });

    // Handle form submission
    JFCustomWidget.subscribe("submit", function() {
      const tracks = [];
      const trackRows = document.querySelectorAll('.track-row');
      trackRows.forEach(row => {
        const track = {
          title: row.querySelector('.title-input').value,
          single: row.querySelector('.single-select').value,
          focusTrack: row.querySelector('.focus-select').value,
          length: row.querySelector('.length-input').value,
          isrc: row.querySelector('.isrc-input').value
        };
        tracks.push(track);
      });

      const result = {
        valid: true,
        value: JSON.stringify(tracks)
      };
      JFCustomWidget.sendSubmit(result);
    });

    // Function to create a new track row
    function createTrackRow(trackNumber, trackData = {}) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'track-row';

      const trackLabel = document.createElement('label');
      trackLabel.textContent = 'Track ' + trackNumber;
      rowDiv.appendChild(trackLabel);

      const titleInput = document.createElement('input');
      titleInput.type = 'text';
      titleInput.placeholder = 'Title';
      titleInput.className = 'title-input';
      titleInput.value = trackData.title || '';
      rowDiv.appendChild(titleInput);

      const singleSelect = document.createElement('select');
      singleSelect.className = 'single-select';
      ['Yes', 'No', 'Maybe'].forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        if (trackData.single === option) opt.selected = true;
        singleSelect.appendChild(opt);
      });
      rowDiv.appendChild(singleSelect);

      const focusSelect = document.createElement('select');
      focusSelect.className = 'focus-select';
      ['Yes', 'No', 'Maybe'].forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        if (trackData.focusTrack === option) opt.selected = true;
        focusSelect.appendChild(opt);
      });
      rowDiv.appendChild(focusSelect);

      const lengthInput = document.createElement('input');
      lengthInput.type = 'text';
      lengthInput.placeholder = 'MM:SS';
      lengthInput.className = 'length-input';
      lengthInput.value = trackData.length || '';
      rowDiv.appendChild(lengthInput);

      const isrcInput = document.createElement('input');
      isrcInput.type = 'text';
      isrcInput.placeholder = 'ISRC';
      isrcInput.className = 'isrc-input';
      isrcInput.value = trackData.isrc || '';
      rowDiv.appendChild(isrcInput);

      document.getElementById('track-list-container').appendChild(rowDiv);
    }

    // Attach the click event to the "Add Track" button
    document.getElementById('add-track-button').addEventListener('click', function() {
      createTrackRow(trackCounter);
      trackCounter++;
    });

    // Initialize the widget container
    document.write('<div id="track-list-container"></div>');
    document.write('<button type="button" id="add-track-button">+ Add Track</button>');
  })();
</script>