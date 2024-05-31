let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
        isRunning = false;
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').innerText = 'Stop';
        isRunning = true;
    }
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function displayTime() {
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('display').innerText = formattedTime;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
    document.getElementById('startStop').innerText = 'Start';
}