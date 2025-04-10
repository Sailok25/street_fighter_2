// Elements visuals
let imgblankaGuanya = new elements(7, 90, 125, 95, 'img/others/pantallaWinLoose.png', blankaGuanya);
let imgblankaPerd = new elements(7, 90, 125, 100, 'img/others/pantallaWinLoose.png', blankaPerd);
let imgMBisonGuanya = new elements(250, 80, 128, 110, 'img/others/pantallaWinLoose.png', mBisonGuanya);
let imgMBisonPerd = new elements(250, 80, 128, 104, 'img/others/pantallaWinLoose.png', mBisonPerd);

function iniciFinal() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    principalFinal();
    stage_mbison.stop();
    victoriaTotal.play();
}

function principalFinal() {
    esborrarCanvas();
    
    if (player1Guanya == true) {
        imgblankaGuanya.animacio();
        imgMBisonPerd.animacio();
        player_text.animacio();
        num_p1_text.animacio();
        win_gran_text.animacio();
    }

    if (player2Guanya == true) {
        imgMBisonGuanya.animacio();
        imgblankaPerd.animacio();
        player_text.animacio();
        num_p2_text.animacio();
        win_gran_text.animacio();
    }

    mostrarFraseVictoria();
    interval = requestAnimationFrame(principalFinal);
}


function esborrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function mostrarFraseVictoria() {
    ctx.font = "10px 'Press Start 2P'";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    
    if (player1Guanya) {
        const xTextBlanka = 192;
        const yTextBlanka = 60; 
        ctx.fillText("¡Ha demostrat ser el millor lluitador!", xTextBlanka, yTextBlanka);
    } else if (player2Guanya) {
        const xTextBison = 192;
        const yTextBison = 60;
        ctx.fillText("¡El seu poder es inigualable!", xTextBison, yTextBison);
    }
}
