//variables
let player1Guanya = false;
let player2Guanya = false;
let player1Perd = false;
let player2Perd = false;

// Elements visuals
let imgblankaGuanya = new elements(7, 90, 125, 95, 'img/others/pantallaWinLoose.png', blankaGuanya);
let imgblankaPerd = new elements(7, 90, 125, 100, 'img/others/pantallaWinLoose.png', blankaPerd);
let imgMBisonGuanya = new elements(250, 80, 128, 110, 'img/others/pantallaWinLoose.png', mBisonGuanya);
let imgMBisonPerd = new elements(250, 80, 128, 104, 'img/others/pantallaWinLoose.png', mBisonPerd);

function iniciFinal() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    principalFinal();
    victoriaTotal.play();
}

function esborrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function principalFinal() {
    esborrarCanvas();
    console.log("Dibujando pantalla final...");

    imgblankaGuanya.animacio();
    imgMBisonPerd.animacio();
    imgMBisonGuanya.animacio();
    imgblankaPerd.animacio();

    interval = requestAnimationFrame(principalFinal);
}