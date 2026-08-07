const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

let isDragging = false;

const handleSpeed = (e) => {
    if (!isDragging) return;
    const y = e.pageY - e.currentTarget.offsetTop;
    const percent = y / e.currentTarget.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(1) + 'x';
    video.playbackRate = playbackRate;
};

const stopDragging = () => {
    isDragging = false;
};

speed.addEventListener('mousedown', (e) => {
    isDragging = true;
    handleSpeed(e);
});

speed.addEventListener('mousemove', handleSpeed);
speed.addEventListener('mouseup', stopDragging);
speed.addEventListener('mouseleave', stopDragging);
