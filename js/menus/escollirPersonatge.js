// variables
let posicioP1 = 1;
let posicioP2 = 12;
let player1Slected = false;
let player2Slected = false;

// Elements visuals
let req1 = new elements(96, 140, 32, 36, 'img/others/escollirPersonatge.png', opcionsP1);
let req2 = new elements(256, 176, 32, 35, 'img/others/escollirPersonatge.png', opcionsP2);
let opcionsPersonatges = new elements(0, 0, 384, 224, 'img/others/escollirPersonatge.png', fondoPersonatges);
let optMBison = new elements(0, 120, 96, 88, 'img/others/escollirPersonatge.png', opcioMBison);
let optBlanka = new elements(288, 113, 96, 95, 'img/others/escollirPersonatge.png', opcioBlanka);

// document.addEventListener('DOMContentLoaded', iniciPersonatge);

function iniciPersonatge() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    principalPersonatges();

    // Tecles per escollir
    document.addEventListener('keydown', (e) => {
        if (e.key == 'a') {
            posicioP2 -= 1;
            moureSelector();
            p2Audio.play();
        } else if (e.key == 'd') {
            posicioP2 += 1;
            moureSelector();
            p2Audio.play();
        } else if (e.key == 'ArrowLeft') {
            posicioP1 -= 1;
            moureSelector();
            p1Audio.play();
        } else if (e.key == 'ArrowRight') {
            posicioP1 += 1;
            moureSelector();
            p1Audio.play();
        } else if (e.key == 'Enter') {
            console.log('Iniciant el joc...');
            inici();
        }
    });
}

function principalPersonatges() {
    esborrarCanvas();
    opcionsPersonatges.animacio();

    req1.animacio();
    req2.animacio();
    optBlanka.animacio();
    optMBison.animacio();

    interval = requestAnimationFrame(principalPersonatges);
}

function esborrarCanvas() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moureSelector() {   
    if (posicioP1 < 1) {
        posicioP1 = 12;
    } else if (posicioP1 > 12) {
        posicioP1 = 1;
    }

    if (posicioP2 < 1) {
        posicioP2 = 12;
    } else if (posicioP2 > 12) {
        posicioP2 = 1;
    }


    // Asignar nova posició al selector P1
    if (posicioP1 == 1) {
        req1.x = 96;
        req1.y = 140;
    } else if (posicioP1 == 2) {
        req1.x = 128;
        req1.y = 140;
    } else if (posicioP1 == 3) {
        req1.x = 160;
        req1.y = 140;
    } else if (posicioP1 == 4) {
        req1.x = 192;
        req1.y = 140;
    } else if (posicioP1 == 5) {
        req1.x = 224;
        req1.y = 140;
    } else if (posicioP1 == 6) {
        req1.x = 256;
        req1.y = 140;
    } else if (posicioP1 == 7) {
        req1.x = 96;
        req1.y = 172;
    } else if (posicioP1 == 8) {
        req1.x = 128;
        req1.y = 172;
    } else if (posicioP1 == 9) {
        req1.x = 160;
        req1.y = 172;
    } else if (posicioP1 == 10) {
        req1.x = 192;
        req1.y = 172;
    } else if (posicioP1 == 11) {
        req1.x = 224;
        req1.y = 172;
    } else if (posicioP1 == 12) {
        req1.x = 256;
        req1.y = 172;
    }

    // Asignar nova posició al selector P2
    if (posicioP2 == 1) {
        req2.x = 96;
        req2.y = 144;
    } else if (posicioP2 == 2) {
        req2.x = 128;
        req2.y = 144;
    } else if (posicioP2 == 3) {
        req2.x = 160;
        req2.y = 144;
    } else if (posicioP2 == 4) {
        req2.x = 192;
        req2.y = 144;
    } else if (posicioP2 == 5) {
        req2.x = 224;
        req2.y = 144;
    } else if (posicioP2 == 6) {
        req2.x = 256;
        req2.y = 144;
    } else if (posicioP2 == 7) {
        req2.x = 96;
        req2.y = 176;
    } else if (posicioP2 == 8) {
        req2.x = 128;
        req2.y = 176;
    } else if (posicioP2 == 9) {
        req2.x = 160;
        req2.y = 176;
    } else if (posicioP2 == 10) {
        req2.x = 192;
        req2.y = 176;
    } else if (posicioP2 == 11) {
        req2.x = 224;
        req2.y = 176;
    } else if (posicioP2 == 12) {
        req2.x = 256;
        req2.y = 176;
    }
}