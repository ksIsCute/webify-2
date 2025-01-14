const root = document.documentElement;

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.getElementById('backgroundColor').addEventListener('input', (e) => {
    root.style.setProperty('--background-color', e.target.value);
});

document.getElementById('textColor').addEventListener('input', (e) => {
    root.style.setProperty('--text-color', e.target.value);
});

document.getElementById('accentColor').addEventListener('input', (e) => {
    root.style.setProperty('--accent-color', e.target.value);
});

document.getElementById('navbarColor').addEventListener('input', (e) => {
    root.style.setProperty('--navbar-color', e.target.value);
});

document.getElementById('buttonColor').addEventListener('input', (e) => {
    root.style.setProperty('--button-color', e.target.value);
});

document.getElementById('buttonTextColor').addEventListener('input', (e) => {
    root.style.setProperty('--button-text-color', e.target.value);
});

document.getElementById('fontFamily').addEventListener('change', (e) => {
    root.style.setProperty('--font-family', e.target.value);
});

function copyToClipboard(property) {
    const value = getComputedStyle(root).getPropertyValue(property).trim();
    navigator.clipboard.writeText(value);
    alert(`Copied ${property}: ${value}`);
}

function randomizeColor(property, elementId) {
    const randomColor = getRandomColor();
    root.style.setProperty(property, randomColor);
    document.getElementById(elementId).value = randomColor;
}

document.getElementById('randomizeAll').addEventListener('click', () => {
    randomizeColor('--background-color', 'backgroundColor');
    randomizeColor('--text-color', 'textColor');
    randomizeColor('--accent-color', 'accentColor');
    randomizeColor('--navbar-color', 'navbarColor');
    randomizeColor('--button-color', 'buttonColor');
    randomizeColor('--button-text-color', 'buttonTextColor');
});

['backgroundColor', 'textColor', 'accentColor', 'navbarColor', 'buttonColor', 'buttonTextColor'].forEach(id => {
    document.getElementById(`copy${id}`).addEventListener('click', () => {
        copyToClipboard(`--${id.toLowerCase()}`);
    });

    document.getElementById(`randomize${id}`).addEventListener('click', () => {
        randomizeColor(`--${id.toLowerCase()}`, id);
    });
});