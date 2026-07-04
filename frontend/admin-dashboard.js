const zone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const uploadLabel = document.getElementById('uploadLabel');

zone.addEventListener('click', () => {
    fileInput.click();
});

zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('dragover');
});

zone.addEventListener('dragleave', () => {
    zone.classList.remove('dragover');
});

zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('dragover');

    if (e.dataTransfer.files.length) {
        showFile(e.dataTransfer.files[0]);
    }
});

fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
        showFile(fileInput.files[0]);
    }
});

function showFile(file) {
    uploadLabel.innerHTML =
        '📎 ' +
        file.name +
        '<br><span style="font-size:12px;">' +
        Math.round(file.size / 1024) +
        ' KB selected</span>';
}

document.getElementById('submitForm').addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Demo only — would upload file + explanation to the backend.');

    window.location.href = 'class-detail.html';
});