document.addEventListener("DOMContentLoaded", () => {
    const skillsList = document.querySelector(".skills ul");
    const clone = skillsList.cloneNode(true);
    skillsList.parentElement.appendChild(clone);

    // Adjust container size to fit one row
    const container = skillsList.parentElement;
    container.style.height = `${skillsList.offsetHeight}px`;
});


// Select the theme switch toggle
const themeSwitch = document.getElementById('themeSwitch');

// Check and apply saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }
});

// Toggle theme on switch change
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});
