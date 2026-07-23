const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
    const input = e.target;
    const suffix = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
};

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
