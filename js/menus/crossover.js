//variables


// Objecte escenari i els seus metodes
let stageCrossover = function (x, y, width, height, imatge) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imatge = imatge;
    this.frameContador = 0;
    this.frameDelay = 10;

    let sprite = new Image();
    sprite.src = this.imatge;
    this.dibuixa = function () {
        ctx.drawImage(sprite,
            this.canvas_x,
            this.canvas_y,
            this.canvas_w,
            this.canvas_h,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    let currentFrame = 0;
    this.animacio = function () {
        if (this.frameContador >= this.frameDelay) {
            //codi animacio
            currentFrame = (currentFrame + 1) % escenari_crossover.length;
            frame = escenari_crossover[currentFrame];

            this.canvas_x = frame.x;
            this.canvas_y = frame.y;
            this.canvas_w = frame.width;
            this.canvas_h = frame.height;

            this.frameContador = 0;
        } else {
            this.frameContador++;
        }
        this.dibuixa();
        // interval_player1 = requestAnimationFrame(this.animacio.bind(this)); 
    }
}


// Elements visuals
let barra_zoro_groga = new elements(35, 22, 145, 11, 'img/others/textos.png', barra_vida_groga_1);
let barra_sanji_groga = new elements(205, 22, 145, 11, 'img/others/textos.png', barra_vida_groga_2);
let barra_zoro_vermella = new elements(35, 22, 145, 11, 'img/others/textos.png', barra_vida_vermella_1);
let barra_sanji_vermella = new elements(205, 22, 145, 11, 'img/others/textos.png', barra_vida_vermella_2);
let bgOP = new stageCrossover(0, 0, 384, 224, 'img/crossover/fondoOP.png');
let sanji = new player1(50, 122, 103, 95, 'img/crossover/sanji.png', barra_sanji_groga);
let zoro = new player2(230, 120, 104, 92, 'img/crossover/zoro.png', barra_zoro_groga);

function iniciCrossover() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    principalCrossover();
    inici_joc.stop();
    inici_op.play();
}

function esborrarCanvas() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function principalCrossover() {
    esborrarCanvas();

    bgOP.animacio();
    barra_zoro_groga.animacio();
    barra_sanji_groga.animacio();
    barra_zoro_vermella.animacio();
    barra_sanji_vermella.animacio();

    interval = requestAnimationFrame(principalCrossover);
}