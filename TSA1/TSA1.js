const themeToggleButton = document.getElementById('theme');
const body = document.body;

const themes = ['default-theme', 'dark-theme', 'cute-theme'];
let currentThemeIndex = 0;

themeToggleButton.addEventListener('click', () => {
    body.classList.remove(themes[currentThemeIndex]);

    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    body.classList.add(themes[currentThemeIndex]);

    themeToggleButton.textContent = `Theme: ${themes[currentThemeIndex].replace('-theme', '').replace(/-/g, ' ').toUpperCase()}`;
});
