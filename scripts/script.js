const root = document.documentElement;

// Change colors dynamically
function setCssVariable(varName, value) {
    root.style.setProperty(varName, value);
}

document.getElementById('backgroundColor').addEventListener('input', (e) => {
    setCssVariable('--background-color', e.target.value);
});

document.getElementById('textColor').addEventListener('input', (e) => {
    setCssVariable('--text-color', e.target.value);
});

document.getElementById('accentColor').addEventListener('input', (e) => {
    setCssVariable('--accent-color', e.target.value);
});

document.getElementById('navbarColor').addEventListener('input', (e) => {
    setCssVariable('--navbar-color', e.target.value);
});

document.getElementById('buttonColor').addEventListener('input', (e) => {
    setCssVariable('--button-color', e.target.value);
});

document.getElementById('buttonTextColor').addEventListener('input', (e) => {
    setCssVariable('--button-text-color', e.target.value);
});

document.getElementById('fontFamily').addEventListener('change', (e) => {
    setCssVariable('--sample-font-family', e.target.value);
});

// Copy to clipboard functionality
function copyToClipboard(value) {
    navigator.clipboard.writeText(value).then(() => {
        alert(`Copied: ${value}`);
    }).catch((err) => {
        console.error('Failed to copy: ', err);
    });
}

document.getElementById('copybackgroundColor').addEventListener('click', () => {
    const value = document.getElementById('backgroundColor').value;
    copyToClipboard(value);
});

document.getElementById('copytextColor').addEventListener('click', () => {
    const value = document.getElementById('textColor').value;
    copyToClipboard(value);
});

document.getElementById('copyaccentColor').addEventListener('click', () => {
    const value = document.getElementById('accentColor').value;
    copyToClipboard(value);
});

document.getElementById('copynavbarColor').addEventListener('click', () => {
    const value = document.getElementById('navbarColor').value;
    copyToClipboard(value);
});

document.getElementById('copybuttonColor').addEventListener('click', () => {
    const value = document.getElementById('buttonColor').value;
    copyToClipboard(value);
});

document.getElementById('copybuttonTextColor').addEventListener('click', () => {
    const value = document.getElementById('buttonTextColor').value;
    copyToClipboard(value);
});

// Randomize colors functionality
function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.getElementById('randomizebackgroundColor').addEventListener('click', () => {
    const randomValue = randomColor();
    document.getElementById('backgroundColor').value = randomValue;
    setCssVariable('--background-color', randomValue);
});

document.getElementById('randomizetextColor').addEventListener('click', () => {
    const randomValue = randomColor();
    document.getElementById('textColor').value = randomValue;
    setCssVariable('--text-color', randomValue);
});

document.getElementById('randomizeaccentColor').addEventListener('click', () => {
    const randomValue = randomColor();
    document.getElementById('accentColor').value = randomValue;
    setCssVariable('--accent-color', randomValue);
});

document.getElementById('randomizenavbarColor').addEventListener('click', () => {
    const randomValue = randomColor();
    document.getElementById('navbarColor').value = randomValue;
    setCssVariable('--navbar-color', randomValue);
});

document.getElementById('randomizebuttonColor').addEventListener('click', () => {
    const randomValue = randomColor();
    document.getElementById('buttonColor').value = randomValue;
    setCssVariable('--button-color', randomValue);
});

document.getElementById('randomizebuttonTextColor').addEventListener('click', () => {
    const randomValue = randomColor();
    document.getElementById('buttonTextColor').value = randomValue;
    setCssVariable('--button-text-color', randomValue);
});

document.getElementById('randomizeAll').addEventListener('click', () => {
    const colors = {
        '--background-color': randomColor(),
        '--text-color': randomColor(),
        '--accent-color': randomColor(),
        '--navbar-color': randomColor(),
        '--button-color': randomColor(),
        '--button-text-color': randomColor(),
    };
    Object.entries(colors).forEach(([varName, value]) => {
        setCssVariable(varName, value);
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
// Automatically go into fullscreen on page load
document.getElementById('fullscreen').addEventListener('click', () => {
    function launchIntoFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    
    launchIntoFullscreen(document.documentElement);
});
