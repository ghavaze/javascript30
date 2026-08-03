const arrow = document.querySelector('.speed');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
    (data) => {
        speed.textContent = Math.round(data.coords.speed);
        arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    },
    (err) => {
        console.log(err);
        alert('You have to enable location');
    },
);
