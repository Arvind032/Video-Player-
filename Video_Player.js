const video = document.getElementById('myVideo');
  const qualitySwitcher = document.getElementById('quality-switcher');

  qualitySwitcher.addEventListener('change', function () {
    const selectedQuality = this.value;
    const selectedSource = document.querySelector(`source[data-quality="${selectedQuality}"]`);
    
    if (selectedSource) {
      video.src = selectedSource.src;
      video.load();
      video.play();
    }
  });
