const KEY = 'video-muted';
const videoMutedSettings = JSON.parse(localStorage.getItem(KEY));
const newVideoMutedSettings = JSON.stringify({
  ...videoMutedSettings,
  carousel: true,
});

localStorage.setItem(KEY, newVideoMutedSettings);
