const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const main = async () => {
  try {
    const KEY = 'video-muted';
    const videoMutedSettings = JSON.parse(localStorage.getItem(KEY));
    const newVideoMutedSettings = JSON.stringify({
      ...videoMutedSettings,
      carousel: true,
    });
    localStorage.setItem(KEY, newVideoMutedSettings);
    if (
      videoMutedSettings.hasOwnProperty('carousel') &&
      !videoMutedSettings['carousel']
    ) {
      console.log('*** VIDEO HAS BEEN MUTED ***');
    }
    await sleep(10000);
    const vid = document.querySelector('video');
    if (vid) {
      if (window.location.href === 'https://www.twitch.tv/') {
        vid.pause();
        console.log('*** VIDEO HAS BEEN PAUSED ***');
      }
    }
  } catch (e) {
    console.log(e);
  }
};
main();
