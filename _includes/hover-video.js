// pause hover video effect
const hoverVideos = document.getElementsByClassName('hoverVideo');

// Iterate over each element with the class 'hoverVideo'
Array.from(hoverVideos).forEach(video => {
  video.addEventListener('mouseover', () => {
    video.play();
  });

  video.addEventListener('mouseout', () => {
    video.pause();
  });
});