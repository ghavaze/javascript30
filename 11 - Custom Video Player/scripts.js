const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = player.querySelector('.fullscreen__button');

const togglePlay = () => {
    video.paused ? video.play() : video.pause();
};

const updateButton = () => {
    toggle.textContent = video.paused ? '▶︎' : '❚❚';
};

const skip = (e) => {
    video.currentTime += parseFloat(e.currentTarget.dataset.skip);
};

const handleRangeUpdate = (e) => {
    video[e.currentTarget.name] = e.currentTarget.value;
};

const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

const toggleFullscreen = () => {
    video.requestFullscreen();
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));
fullscreenButton.addEventListener('click', toggleFullscreen);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', (e) => (mousedown = true));
progress.addEventListener('mouseup', (e) => (mousedown = false));
