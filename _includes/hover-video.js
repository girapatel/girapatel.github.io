    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // pause hover video effect
    const hoverVideos = document.getElementsByClassName('hoverVideo');

    // Iterate over each element with the class 'hoverVideo'
    Array.from(hoverVideos).forEach(video => {
      // Check if it's a mobile device
      if (isMobile) {
        // Add autoplay attribute for mobile devices
        video.setAttribute('autoplay', '');
      } else {
        // Add hover event listeners for non-touch devices
        video.addEventListener('mouseover', () => {
          video.play();
        });

        video.addEventListener('mouseout', () => {
          video.pause();
        });
      }
    });



