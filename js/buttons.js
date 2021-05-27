function toggleColor() {
    if(color === 'black') {
        color = 'darkred';
        segments = new Segments('darkred'); 
        document.getElementById('but1Val').value = 'OFF: Red';
    } else {
        color = 'black';
        segments = new Segments('black');
        document.getElementById('but1Val').value = 'OFF: Black';
    };
}; 

function toggleLoop() {
    if(Loop === true) {
        Loop = false;
        document.getElementById('but2Val').value = 'Resume';
    } else {
        Loop = true;
        document.getElementById('but2Val').value = 'Pause';
    };
};

function toggleCount() {
    if(count === 'up') {
        count = 'down';
        document.getElementById('but3Val').value = 'Count Up';
    } else {
        count = 'up';
        document.getElementById('but3Val').value = 'Count Down';
    };
}

function toggleSpeed() {
    if(speed === 1) {
        speed = 2;
        document.getElementById('but4Val').value = 'Speed: 2x';
    } else if(speed === 2) {
        speed = 4;
        document.getElementById('but4Val').value = 'Speed: 4x';
    } else if(speed === 4) {
        speed = 0.5;
        document.getElementById('but4Val').value = 'Speed: 0.5x';
    } else {
        speed = 1;
        document.getElementById('but4Val').value = 'Speed: 1x';
    };
};

function insertNum(num) {
    loopIndex = num;
};