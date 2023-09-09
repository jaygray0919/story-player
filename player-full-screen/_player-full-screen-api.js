// source:
// https://mdn.github.io/dom-examples/fullscreen-api/index.html
// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
// add to amp-story-player
// <script src="https://mdn.github.io/dom-examples/fullscreen-api/main.js"></script>
// set target type; replace "video"

window.addEventListener("load", startup, false);

function startup() {
  // Get the reference to video
  const video = document.getElementById("video");

  // On pressing ENTER call toggleFullScreen method
  document.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      toggleFullScreen(video);
    }
  }, false);
}

function toggleFullScreen(video) {
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    video.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}


