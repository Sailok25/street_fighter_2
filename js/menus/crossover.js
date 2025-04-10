// Objeto escenario y sus métodos
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
            // Código de animación
            currentFrame = (currentFrame + 1) % escenari_crossover.length;
            let frame = escenari_crossover[currentFrame];

            this.canvas_x = frame.x;
            this.canvas_y = frame.y;
            this.canvas_w = frame.width;
            this.canvas_h = frame.height;

            this.frameContador = 0;
        } else {
            this.frameContador++;
        }
        this.dibuixa();
    }
}

// Objeto jugador1 y sus métodos
let player1OP = function (x, y, width, height, imatge, barraVida) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imatge = imatge;
    this.barraVida = barraVida;

    this.vida = 145;
    this.velocitat = 3;
    this.dreta = true;
    this.frameContador = 0;
    this.frameDelay = 7;
    this.frameDelaySpecial = 3;

    this.base = false;
    this.victoria1 = false;
    this.derrota = false;
    this.patada = false;
    this.cop_especial = false;
    this.en_timeover = false;
    this.endarrere = false;
    this.endavant = false;

    this.ha_guanyat = false;
    this.parar_animacio = false;
    this.mostrarWinPetit = false;
    this.mostrarWinGran = false;
    this.esta_aterritzant = false;

    this.danyPunyetazo = 15;
    this.danyPatada = 10;
    this.danyCopEspecial = 20;
    this.danyBase = 0;
    this.repPatada = false;
    this.repCopEspecial = false;
    this.repPunyetazo = false;

    let sprite = new Image();
    sprite.src = this.imatge;
    this.dibuixa = function () {

        // caminar endevant/endarrere
        if (this.canvas_h == 56) {
            this.y = 146;
        } else{
            this.y = 135;
        }

        // patada
        if (this.canvas_h == 54) {
            this.y = 146;
        } else {
            this.y = 135;
        }

        ctx.drawImage(sprite,
            this.canvas_x,
            this.canvas_y,
            this.canvas_w,
            this.canvas_h,
            this.x,
            this.y,
            this.canvas_w,
            this.canvas_h
        );
    }

    this.mou = function () {
        if (this.dreta == true) {
            if (this.x < 770) {
                this.x += this.velocitat;
            } else {
                this.dreta = false;
            }
        } else {
            if (this.x > 0) {
                this.x -= this.velocitat;
            } else {
                this.dreta = true;
            }
        }
    }

    this.esquerra = function () {
        this.x -= this.velocitat;
        this.endavant = true;
    }

    this.dreta = function () {
        this.x += this.velocitat;
        this.endarrere = true;
    }

    let currentFrame = 0;
    this.animacio = function () {
        if (this.parar_animacio) {
            return;
        }

        if (this.victoria1) {
            if (this.frameContador >= 9) {
                currentFrame = (currentFrame + 1) % sanji_victoria1.length;
                let frame = sanji_victoria1[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === sanji_victoria1.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.derrota) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % sanji_derrota.length;
                let frame = sanji_derrota[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === sanji_derrota.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.endavant) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % sanji_endavant.length;
                let frame = sanji_endavant[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.endarrere) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % sanji_endarrere.length;
                let frame = sanji_endarrere[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.patada) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % sanji_patada.length;
                let frame = sanji_patada[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === sanji_patada.length - 1) {
                    this.patada = false;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.cop_especial) {
            if (this.frameContador >= this.frameDelaySpecial) {
                currentFrame = (currentFrame + 1) % sanji_cop_especial.length;
                let frame = sanji_cop_especial[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === sanji_cop_especial.length - 1) {
                    this.cop_especial = false;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.repCopEspecial) {
            if (this.frameContador >= this.frameDelaySpecial) {
                currentFrame = (currentFrame + 1) % sanji_rep_patada.length;
                let frame = sanji_rep_patada[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === sanji_rep_patada.length - 1) {
                    this.repCopEspecial = false;
                }
            } else {
                this.frameContador++;
            }
        } else {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % sanji_base.length;
                let frame = sanji_base[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        }

        this.dibuixa();
    }

    this.restarVida = function () {
        if (this.vida > 0) {
            this.vida -= 21;
            this.barraVida.width = this.vida;
            this.barraVida.x += 21;
        }
    }
}

// Objeto jugador2 y sus métodos
let player2OP = function (x, y, width, height, imatge, barraVida) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imatge = imatge;
    this.barraVida = barraVida;

    this.vida = 145;
    this.velocitat = 3;
    this.dreta = true;
    this.frameContador = 0;
    this.frameDelay = 8;

    this.base = false;
    this.victoria1 = false;
    this.derrota = false;
    this.cop_puny = false;
    this.patada = false;
    this.cop_especial = false;
    this.en_timeover = false;
    this.endarrere = false;
    this.endavant = false;

    this.ha_guanyat = false;
    this.parar_animacio = false;
    this.mostrarWinPetit = false;
    this.mostrarWinGran = false;
    this.esta_aterritzant = false;

    this.danyPunyetazo = 15;
    this.danyPatada = 10;
    this.danyCopEspecial = 20;
    this.danyBase = 0;
    this.repPatada = false;
    this.repCopEspecial = false;
    this.repPunyetazo = false;

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
            this.canvas_w,
            this.canvas_h
        );
    }

    this.mou = function () {
        if (this.dreta == true) {
            if (this.x < 770) {
                this.x += this.velocitat;
            } else {
                this.dreta = false;
            }
        } else {
            if (this.x > 0) {
                this.x -= this.velocitat;
            } else {
                this.dreta = true;
            }
        }
    }

    this.esquerra = function () {
        this.x -= this.velocitat;
        this.endavant = true;
    }

    this.dreta = function () {
        this.x += this.velocitat;
        this.endarrere = true;
    }

    let currentFrame = 0;
    this.animacio = function () {
        if (this.parar_animacio) {
            return;
        }

        if (this.victoria1) {
            if (this.frameContador >= 9) {
                currentFrame = (currentFrame + 1) % zoro_victoria1.length;
                let frame = zoro_victoria1[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === zoro_victoria1.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.derrota) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % zoro_derrota.length;
                let frame = zoro_derrota[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === zoro_derrota.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.cop_puny) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % zoro_cop_puny.length;
                let frame = zoro_cop_puny[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === zoro_cop_puny.length - 1) {
                    this.cop_puny = false;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.cop_especial) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % zoro_cop_especial.length;
                let frame = zoro_cop_especial[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === zoro_cop_especial.length - 1) {
                    this.cop_especial = false;
                }

                this.x += this.velocitat + 20;
            } else {
                this.frameContador++;
            }
        } else if (this.endarrere) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % zoro_endarrere.length;
                let frame = zoro_endarrere[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.endavant) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % zoro_endavant.length;
                let frame = zoro_endavant[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.repCopEspecial) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % zoro_electrocutat.length;
                let frame = zoro_electrocutat[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === zoro_electrocutat.length - 1) {
                    this.repCopEspecial = false;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.repPatada) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % zoro_rep_patada.length;
                let frame = zoro_rep_patada[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === zoro_rep_patada.length - 1) {
                    this.repPatada = false;
                }
            } else {
                this.frameContador++;
            }
        } else {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % zoro_base.length;
                let frame = zoro_base[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        }

        this.dibuixa();
    }

    this.restarVida = function () {
        if (this.vida > 0) {
            this.vida -= 21;
            this.barraVida.width = this.vida;
        }
    }
}

// Declaración de elementos visuales en la pantalla
let barra_zoro_groga = new elements(35, 22, 145, 11, 'img/others/textos.png', barra_vida_groga_1);
let barra_sanji_groga = new elements(205, 22, 145, 11, 'img/others/textos.png', barra_vida_groga_2);
let barra_zoro_vermella = new elements(35, 22, 145, 11, 'img/others/textos.png', barra_vida_vermella_1);
let barra_sanji_vermella = new elements(205, 22, 145, 11, 'img/others/textos.png', barra_vida_vermella_2);
let bgOP = new stageCrossover(0, 0, 384, 224, 'img/crossover/fondoOP.png');
let sanji = new player1OP(300, 135, 27, 67, 'img/crossover/sanji.png', barra_sanji_groga);
let zoro = new player2OP(40, 150, 27, 67, 'img/crossover/zoro.png', barra_zoro_groga);
let text_nom_zoro = new elements(40, 35, 36, 9, 'img/others/textos.png', nom_zoro);
let text_nom_sanji = new elements(310, 35, 42, 9, 'img/others/textos.png', nom_sanji);

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
    barra_zoro_vermella.animacio();
    barra_sanji_vermella.animacio();
    barra_zoro_groga.animacio();
    barra_sanji_groga.animacio();
    text_nom_zoro.animacio();
    text_nom_sanji.animacio();

    ko_text.animacio();
    
    tempsEsquerra.animacio();
    tempsDreta.animacio();

    numero_1.animacio();
    numero_2.animacio();

    lletra_p1.animacio();
    lletra_p2.animacio();


    sanji.dibuixa();
    zoro.dibuixa();
    sanji.animacio();
    zoro.animacio();

    interval = requestAnimationFrame(principalCrossover);
}

// Eventos de teclado
document.addEventListener('keydown', (e) => {
    // Bloquear controles si el juego está pausado o ha acabado la partida
    if (jocpausat ||
        cantitatVictoriesP1 >= maxVictories ||
        cantitatVictoriesP2 >= maxVictories ||
        sanji.victoria1 || sanji.derrota ||
        zoro.victoria1 || zoro.derrota) {
        return;
    }

    // Cambiar escenario con la tecla '1'
    if (e.key == '1') {
        escenariActual = (escenariActual + 1) % escenaris.length;
        bgOP.imatge = escenaris[escenariActual].imatge; // Corregido aquí
        bgOP.sprite.src = bgOP.imatge; // Actualizar la imagen del sprite
    }

    // Teclas Jugador 1 (Sanji)
    if (e.key == 'a') {
        sanji.esquerra();
    }
    if (e.key == 'd') {
        sanji.dreta();
    }
    if (e.key == 'f') {
        sanji.patada = true;
    }
    if (e.key == 'e') {
        sanji.cop_especial = true;
    }

    // Teclas Jugador 2 (Zoro)
    if (e.key == 'ArrowLeft') {
        zoro.esquerra();
    }
    if (e.key == 'ArrowRight') {
        zoro.dreta();
    }
    if (e.key == '0') {
        zoro.cop_especial = true;
    }
    if (e.key == '9') {
        zoro.cop_puny = true;
    }
});

document.addEventListener('keyup', (e) => {
    // Teclas Jugador 1 (Sanji)
    if (e.key == 'a') {
        sanji.endavant = false;
    }
    if (e.key == 'd') {
        sanji.endarrere = false;
    }

    // Teclas Jugador 2 (Zoro)
    if (e.key == 'ArrowLeft') {
        zoro.endavant = false;
    }
    if (e.key == 'ArrowRight') {
        zoro.endarrere = false;
    }
});
