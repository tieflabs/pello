alert("Hello, \n This is Futuristic web based video & audio player \n created by ▱tieflab▰. \n HOW TO USE IT? \n You can open Video/audio files by clicking 'Upload Icon` and then click 'SELECT` button, \n Other wise You can drag & drop a Video files only! \n Dnate ( patreon.com/tieflabs ) So that we can make Real App");
    // loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  })
});
 // Video function upload

    function playSelected() {
      var mediaFile = document.querySelector('input[type="file"]').files[0];
      if (mediaFile) {
        var mediaType = mediaFile.type.split('/')[0];
        if (mediaType === 'video') {
          var videoPlayer = document.querySelector('video');
          videoPlayer.src = URL.createObjectURL(mediaFile);
          videoPlayer.load();
          videoPlayer.play();
        } else if (mediaType === 'audio') {
          var audioPlayer = document.querySelector('audio');
          audioPlayer.src = URL.createObjectURL(mediaFile);
          audioPlayer.load();
          audioPlayer.play();
        }
      } else {
        alert('Please Upload a file. !▱tieflab▰!');
      }
    }
    // Video function Drag & Drop
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const videoPlayer = document.getElementById('video-player');
const audioPlayer = document.getElementById('audio-player');

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropZone.classList.remove('drag-over');
  const files = event.dataTransfer.files;
  handleFiles(files);
});

fileInput.addEventListener('change', () => {
  const files = fileInput.files;
  handleFiles(files);
});

// feed back from Dragged & Dropped
function handleFiles(files) {
  for (const file of files) {
    if (file.type.startsWith('video/')) {
      const videoURL = URL.createObjectURL(file);
      videoPlayer.src = videoURL;
      audioPlayer.src = '';
    } else if (file.type.startsWith('audio/')) {
      const audioURL = URL.createObjectURL(file);
      audioPlayer.src = audioURL;
      videoPlayer.src = '';
    } else {
      alert('This File Is Not Supported. !▱tieflab▰!');
    }
  }
}
