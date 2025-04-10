const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let positionX = 0;
let positionY = 0;
let distance = 10;

function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        positionX = positionX - distance;
    }
    if (e.code === 'ArrowRight') {
        positionX = positionX + distance;
    }
    if (e.code === 'ArrowUp') {
        positionY = positionY - distance;
    }
    if (e.code === 'ArrowDown') {
        positionY = positionY + distance;
    }
    if (positionX < 0) {
        positionX = 0;
    }
    if (positionY < 0) {
        positionY = 0;
    }
    refresh();
    distance = distance +10;
}

function refresh() {
    console.log("positionX: " + positionX);
    console.log("positionY: " + positionY);
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
}