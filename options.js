// https://developer.chrome.com/docs/extensions/mv2/options/

// Saves options to chrome.storage
function save_options() {
    var backgroundColor = document.getElementById('backgroundColor').value;
    var textColor = document.getElementById('textColor').value;
    var openInNewPage = document.getElementById('openInNewPage').checked;

    chrome.storage.sync.set({
        textColor: textColor,
        backgroundColor: backgroundColor,
        openInNewPage: openInNewPage
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value
    chrome.storage.sync.get({
        backgroundColor: '#fafbfc',
        textColor: "#24292e",
        openInNewPage: false
    }, function(items) {
        document.getElementById('backgroundColor').value = items.backgroundColor;
        document.getElementById('textColor').value = items.textColor;
        document.getElementById('openInNewPage').checked = items.openInNewPage;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);