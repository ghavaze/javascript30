const allCheckboxes = document.querySelectorAll('.inbox input');

let lastChecked;

const handleCheck = (e) => {
    let inBetween = false;
    if (e.shiftKey && e.target.checked) {
        allCheckboxes.forEach((checkbox) => {
            if (checkbox === e.target || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = e.target;
};

allCheckboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
