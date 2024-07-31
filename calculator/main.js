function displayContent(value) {
    const screen = document.getElementById('screen');
    if (screen.value === '0') {
        screen.value = value;
    } else {
        screen.value += value;
    }
}

function clearScreen() {
    document.getElementById('screen').value = '0';
}

function deleteLast() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1) || '0';
}

function calculateResult() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}
