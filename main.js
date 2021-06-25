const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const main = async () => {
  const KEY = 'video-muted';
  const videoMutedSettings = JSON.parse(localStorage.getItem(KEY));
  const newVideoMutedSettings = JSON.stringify({
    ...videoMutedSettings,
    carousel: true,
  });
  localStorage.setItem(KEY, newVideoMutedSettings);
  console.log('*** VIDEO HAS BEEN MUTED ***');
  await sleep(10000);
  const vid = document.querySelector('video');
  if (vid) {
    vid.pause();
    console.log('*** VIDEO HAS BEEN PAUSED ***');
  }
};
main();
