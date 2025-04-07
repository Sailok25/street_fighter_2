// Variables
let colorFondo = 'black';
let posicioAvioneta = 1;

// Elements visuals
let text_SF2 = new elements(70, 20, 250, 90, 'img/others/logoSf2.png', StreetFighter2);
let text_game_start = new elements(151, 140, 85, 8, 'img/others/textos.png', game_start);
let text_vs_battle = new elements(152, 160, 83, 8, 'img/others/textos.png', vs_battle);
let text_crossover = new elements(153, 180, 80, 8, 'img/others/textos.png', crossover);
let avioneta_flecha = new elements(130, 137, 12, 14, 'img/others/logoSf2.png', avioneta);

document.addEventListener('DOMContentLoaded', iniciMenus);

function iniciMenus() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    principalMenus();
    inici_joc.play();

    // Tecles per escollir
    document.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowDown') {
            posicioAvioneta += 1;
            moureAvioneta();
        } else if (e.key == 'ArrowUp') {
            posicioAvioneta -= 1;
            moureAvioneta();
        } else if (e.key == 'Enter') {
            if (posicioAvioneta == 1) {
                clearInterval(interval);
                iniciPersonatge();
            }
        }
    });
}

function principalMenus() {
    esborrarCanvas();

    text_SF2.animacio();
    text_game_start.animacio();
    text_vs_battle.animacio();
    text_crossover.animacio();
    avioneta_flecha.animacio();

    interval = requestAnimationFrame(principalMenus);
}

function esborrarCanvas() {
    ctx.fillStyle = colorFondo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function moureAvioneta() {
    if (posicioAvioneta < 1) {
        posicioAvioneta = 3;
    } else if (posicioAvioneta > 3) {
        posicioAvioneta = 1;
    }

    if (posicioAvioneta == 1) {
        avioneta_flecha.y = 137;
    } else if (posicioAvioneta == 2) {
        avioneta_flecha.y = 157;
    } else if (posicioAvioneta == 3) {
        avioneta_flecha.y = 177;
    }
}