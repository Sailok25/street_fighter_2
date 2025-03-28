// Variables globals
var canvas, ctx, interval;
let decimes = 9; // Dècimes del temporitzador
let unitats = 9; // Unitats del temporitzador
let intervalTemps; // Interval per actualitzar el temporitzador
let estatContador = false; // Indica si s'ha acabat el temps (00s)
let maxVictories = 2; // Màxim de victòries per guanyar
let cantitatVictoriesP1 = 0; // Victòries del Jugador 1
let cantitatVictoriesP2 = 0; // Victòries del Jugador 2
let jocpausat = false; // Indica si el joc està en pausa
let jocAcabat = false; // Indica si el joc ha acabat del tot (algu a guanyat)


// Objecte escenari i els seus metodes
let stage = function (x, y, width, height, imatge) {
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
            currentFrame = (currentFrame + 1) % escenari_campana.length;
            frame = escenari_campana[currentFrame];

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

// Objecte jugador1 i els seus metodes
let player1 = function (x, y, width, height, imatge, barraVida) {
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

    this.base = false;
    this.victoria1 = false;
    this.victoria2 = false;
    this.derrota = false;
    this.cop_puny = false;
    this.patada = false;
    this.cop_especial = false;
    this.salta = false;
    this.en_timeover = false;

    this.ha_guanyat = false;
    this.parar_animacio = false;
    this.mostrarWinPetit = false;
    this.mostrarWinGran = false;

    let sprite = new Image();
    sprite.src = this.imatge;
    this.dibuixa = function () {

        if (this.canvas_h > 113) {
            this.y = 70;
        } else {
            this.y = 122;
        }

        // derrota
        if (this.canvas_h == 102) {
            this.y = 115;
            this.x = 40;
        }

        //base
        if (this.canvas_h == 98) {
            this.y = 122;
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
    }

    this.dreta = function () {
        this.x += this.velocitat;
    }

    let currentFrame = 0;
    this.animacio = function () {
        if (this.parar_animacio) {
            return;
        }

        if (this.victoria1) {
            if (this.frameContador >= 9) {
                currentFrame = (currentFrame + 1) % blanka_victoria1.length;
                frame = blanka_victoria1[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === blanka_victoria1.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.victoria2) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % blanka_victoria2.length;
                frame = blanka_victoria2[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === blanka_victoria2.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.derrota) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % blanka_derrota.length;
                frame = blanka_derrota[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === blanka_derrota.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.endavant) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % blanka_endavant.length;
                frame = blanka_endavant[currentFrame];

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
                currentFrame = (currentFrame + 1) % blanka_endarrere.length;
                frame = blanka_endarrere[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.saltar) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % blanka_saltar.length;
                frame = blanka_saltar[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.cop_puny) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % blanka_cop_puny.length;
                frame = blanka_cop_puny[currentFrame];

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
                currentFrame = (currentFrame + 1) % blanka_patada.length;
                frame = blanka_patada[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.cop_especial) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % blanka_cop_especial.length;
                frame = blanka_cop_especial[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % blanka_base.length;
                frame = blanka_base[currentFrame];

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

// Objecte jugador2 i els seus metodes
let player2 = function (x, y, width, height, imatge, barraVida) {
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

    this.base = false;
    this.victoria1 = false;
    this.victoria2 = false;
    this.derrota = false;
    this.cop_puny = false;
    this.patada = false;
    this.cop_especial = false;
    this.salta = false;
    this.en_timeover = false;

    this.ha_guanyat = false;
    this.parar_animacio = false;
    this.mostrarWinPetit = false;
    this.mostrarWinGran = false;

    let sprite = new Image();
    sprite.src = this.imatge;


    this.dibuixa = function () {
        // derrota
        if (this.canvas_h == 70) {
            this.y = 150;
            console.log(this.y);
        } else {
            this.y = 120;
        }

        // victoria1
        if (this.canvas_h == 110) {
            this.x = 250;
            this.y = 110;
        }

        //base
        if (this.canvas_h == 96) {
            this.y = 120;
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
    }

    this.dreta = function () {
        this.x += this.velocitat;
    }

    let currentFrame = 0;
    this.animacio = function () {
        if (this.parar_animacio) {
            return;
        }

        if (this.victoria1) {
            if (this.frameContador >= 9) {
                currentFrame = (currentFrame + 1) % m_bison_victoria1.length;
                frame = m_bison_victoria1[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === m_bison_victoria1.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.victoria2) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % m_bison_victoria2.length;
                frame = m_bison_victoria2[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === m_bison_victoria2.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.derrota) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % m_bison_derrota.length;
                frame = m_bison_derrota[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;

                if (currentFrame === m_bison_derrota.length - 1) {
                    this.parar_animacio = true;
                }
            } else {
                this.frameContador++;
            }
        } else if (this.cop_puny) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % m_bison_cop_puny.length;
                frame = m_bison_cop_puny[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.cop_especial) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % m_bison_cop_especial.length;
                frame = m_bison_cop_especial[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.salta) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % m_bison_salta.length;
                frame = m_bison_salta[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else if (this.en_timeover) {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % m_bison_timeover.length;
                frame = m_bison_timeover[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        } else {
            if (this.frameContador >= this.frameDelay) {
                currentFrame = (currentFrame + 1) % m_bison_base.length;
                frame = m_bison_base[currentFrame];

                this.canvas_x = frame.x;
                this.canvas_y = frame.y;
                this.canvas_w = frame.width;
                this.canvas_h = frame.height;

                this.frameContador = 0;
            } else {
                this.frameContador++;
            }
        }
        console.log("tyu");

        this.dibuixa();
    }

    this.restarVida = function () {
        if (this.vida > 0) {
            this.vida -= 21;
            this.barraVida.width = this.vida;
        }
    }
}


// Objecte elements/objectes i els seus metodes
let elements = function (x, y, width, height, imatge, tipusElement) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imatge = imatge;
    this.tipusElement = tipusElement;

    this.velocitat = 3;
    this.dreta = true;
    this.frameContador = 0;
    this.frameDelay = 5;

    let sprite = new Image();
    sprite.src = this.imatge;
    this.dibuixa = function (ctx) {
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
    };

    this.animacio = function () {
        if (this.frameContador >= this.frameDelay) {
            let frame = this.tipusElement[0];

            this.canvas_x = frame.x;
            this.canvas_y = frame.y;
            this.canvas_w = frame.width;
            this.canvas_h = frame.height;

            this.frameContador = 0;
        } else {
            this.frameContador++;
        }

        this.dibuixa(ctx);
    };
};

// Declaració de elements visuals a la pantalla
let barra_p1_groga = new elements(35, 22, 145, 11, 'img/others/textos.png', barra_vida_groga_1);
let barra_p2_groga = new elements(205, 22, 145, 11, 'img/others/textos.png', barra_vida_groga_2);
let barra_p2_vermella = new elements(35, 22, 145, 11, 'img/others/textos.png', barra_vida_vermella_1);
let barra_p1_vermella = new elements(205, 22, 145, 11, 'img/others/textos.png', barra_vida_vermella_2);
let blanka = new player1(50, 122, 103, 95, 'img/characters/blanka_sprite2.png', barra_p1_groga);
let m_bison = new player2(230, 120, 104, 92, 'img/characters/m_bison_sprite.png', barra_p2_groga);
let escenari = new stage(0, 0, 384, 224, 'img/backgrounds/bg1.png');
let pose_victoria1 = new elements(3, 20, 14, 14, 'img/others/textos.png', pose_victoria);
let pose_victoria2 = new elements(19, 20, 14, 14, 'img/others/textos.png', pose_victoria);
let pose_victoria3 = new elements(368, 20, 14, 14, 'img/others/textos.png', pose_victoria);
let pose_victoria4 = new elements(352, 20, 14, 14, 'img/others/textos.png', pose_victoria);
let ko_text = new elements(177, 20, 32, 14, 'img/others/textos.png', ko);
let win_petit_text = new elements(200, 100, 30, 9, 'img/others/textos.png', win_petit);
let win_gran_text = new elements(220, 100, 40, 14, 'img/others/textos.png', win_gran);
let numero_1 = new elements(3, 4, 8, 12, 'img/others/textos.png', num_1_player);
let lletra_p1 = new elements(10, 4, 12, 12, 'img/others/textos.png', lletra_p);
let numero_2 = new elements(358, 4, 12, 12, 'img/others/textos.png', num_2_player);
let lletra_p2 = new elements(369, 4, 12, 12, 'img/others/textos.png', lletra_p);
let tempsEsquerra = new elements(179, 35, 13, 19, 'img/others/textos.png', num_9_temps);
let tempsDreta = new elements(193, 35, 13, 19, 'img/others/textos.png', num_9_temps);
let time_over_text = new elements(160, 80, 65, 32, 'img/others/textos.png', time_over);
let txt_blanka = new elements(40, 35, 59, 11, 'img/others/textos.png', nom_blanka);
let txt_blanka_win = new elements(130, 98, 59, 11, 'img/others/textos.png', nom_blanka);
let txt_m_bison = new elements(280, 35, 63, 11, 'img/others/textos.png', nom_m_bison);
let txt_m_bison_win = new elements(125, 98, 63, 11, 'img/others/textos.png', nom_m_bison);
let ready_text = new elements(152, 112, 93, 14, 'img/others/textos.png', ready);
let fight_text = new elements(162, 112, 63, 18, 'img/others/textos.png', fight);
let num_p1_text = new elements(192, 100, 9, 14, 'img/others/textos.png', num_p_1);
let num_p2_text = new elements(192, 100, 13, 14, 'img/others/textos.png', num_p_2);
let player_text = new elements(112, 100, 75, 14, 'img/others/textos.png', player);

//events de teclat
document.addEventListener('keydown', (e) => {
    // Bloquejar controls si el joc está pausat o a acabat la partida
    if (jocpausat ||
        cantitatVictoriesP1 >= maxVictories ||
        cantitatVictoriesP2 >= maxVictories ||
        blanka.victoria1 || blanka.victoria2 || blanka.derrota ||
        m_bison.victoria1 || m_bison.victoria2 || m_bison.derrota) {
        return;
    }


    // Tecles Jugador 1
    if (e.key == 'a') {
        blanka.esquerra();
    }
    if (e.key == 'd') {
        blanka.dreta();
    }
    if (e.key == 'r') {
        blanka.restarVida();
    }

    // Tecles Jugador 2
    if (e.key == 'ArrowLeft') {
        m_bison.esquerra();
    }
    if (e.key == 'ArrowRight') {
        m_bison.dreta();
    }
    if (e.key == 'Enter') {
        m_bison.restarVida();
    }
});

document.addEventListener('DOMContentLoaded', inici);

function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    principal();
}

// crida de metodes i elements de pantalla
function principal() {
    if (cantitatVictoriesP1 >= maxVictories || cantitatVictoriesP2 >= maxVictories) {
        // esborrarCanvas();
        escenari.dibuixa();

        // Mostrar animacions finals
        if (blanka.ha_guanyat) {
            player_text.animacio();
            num_p1_text.animacio();
            win_gran_text.animacio();
            m_bison.animacio();
            blanka.animacio();
            barra_p1_vermella.animacio();
            barra_p2_vermella.animacio();
            barra_p1_groga.animacio();
            barra_p2_groga.animacio();

            ko_text.animacio();

            tempsEsquerra.animacio();
            tempsDreta.animacio();

            numero_1.animacio();
            numero_2.animacio();

            lletra_p1.animacio();
            lletra_p2.animacio();

            txt_blanka.animacio();
            txt_m_bison.animacio();

            controlarVida();
            dibuixarVictories();
        } else if (m_bison.ha_guanyat) {
            player_text.animacio();
            num_p2_text.animacio();
            win_gran_text.animacio();
            blanka.animacio();
            m_bison.animacio();
            barra_p1_vermella.animacio();
            barra_p2_vermella.animacio();
            barra_p1_groga.animacio();
            barra_p2_groga.animacio();

            ko_text.animacio();

            tempsEsquerra.animacio();
            tempsDreta.animacio();

            numero_1.animacio();
            numero_2.animacio();

            lletra_p1.animacio();
            lletra_p2.animacio();

            txt_blanka.animacio();
            txt_m_bison.animacio();

            controlarVida();
            dibuixarVictories();
        }

        // Pausar les animacións cuan a arribat a l'ultima posició
        if ((blanka.ha_guanyat && blanka.parar_animacio && m_bison.parar_animacio) || (m_bison.ha_guanyat && m_bison.parar_animacio && blanka.parar_animacio)) {
            jocpausat = true;
            return;
        }

        interval = requestAnimationFrame(principal);
        return;
    }

    if (jocpausat) return;

    esborrarCanvas();

    escenari.dibuixa();
    escenari.animacio();

    m_bison.dibuixa();
    m_bison.animacio();

    blanka.dibuixa();
    blanka.animacio();

    barra_p1_vermella.animacio();
    barra_p2_vermella.animacio();
    barra_p1_groga.animacio();
    barra_p2_groga.animacio();

    ko_text.animacio();

    tempsEsquerra.animacio();
    tempsDreta.animacio();

    numero_1.animacio();
    numero_2.animacio();

    lletra_p1.animacio();
    lletra_p2.animacio();

    txt_blanka.animacio();
    txt_m_bison.animacio();

    controlarVida();
    dibuixarVictories();

    // ready_text.animacio();
    // fight_text.animacio();

    if (blanka.ha_guanyat) {
        if (blanka.mostrarWinPetit) {
            txt_blanka_win.animacio();
            win_petit_text.animacio();
        } else if (blanka.mostrarWinGran) {
            player_text.animacio();
            num_p1_text.animacio();
            win_gran_text.animacio();
        }
    } else if (m_bison.ha_guanyat) {
        if (m_bison.mostrarWinPetit) {
            txt_m_bison_win.animacio();
            win_petit_text.animacio();
        } else if (m_bison.mostrarWinGran) {
            player_text.animacio();
            num_p2_text.animacio();
            win_gran_text.animacio();
        }
    }

    if (estatContador == true) {
        time_over_text.animacio();
    }

    interval = requestAnimationFrame(principal);
}

// esborrar canvas
function esborrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// array per a les posicions amb els numeros del temporitzador
const numerosTemps = [
    num_0_temps, num_1_temps, num_2_temps, num_3_temps,
    num_4_temps, num_5_temps, num_6_temps, num_7_temps,
    num_8_temps, num_9_temps
];

// actualitza el temps comprobant el estat de les unitats i decimes
function actualitzarTemps() {
    estatContador = false;

    if (unitats > 0) {
        unitats--;
    } else {
        unitats = 9;
        if (decimes > 0) {
            decimes--;
        } else {
            unitats = 0;
            decimes = 0;
            estatContador = true;
            jocEnPausa();
        }
    }

    actualitzarTempsPantalla();
}

// actualitza la visualització a la pantalla del temps
function actualitzarTempsPantalla() {
    tempsEsquerra.tipusElement = numerosTemps[decimes];
    tempsDreta.tipusElement = numerosTemps[unitats];
}

// inicia el temporitzador + asigna que s'actualitza el temps cada 1s
function iniciarTemporitzador() {
    intervalTemps = setInterval(actualitzarTemps, 1000);
}

// inicia el temporitzador
iniciarTemporitzador();

// funció per a comprovar l'estat de vida d'un jugador i si guanya una ronda fa animacions corresponents
function controlarVida() {
    if (blanka.vida <= 0) {
        if (cantitatVictoriesP1 < maxVictories) {
            cantitatVictoriesP1++;
        }
        blanka.vida = 145;
        blanka.barraVida.width = 145;
        blanka.barraVida.x = 35;

        if (cantitatVictoriesP1 == 1) {
            m_bison.victoria1 = true;
            blanka.derrota = true;
            m_bison.ha_guanyat = true;
            m_bison.mostrarWinPetit = true;
            pararJocXRonda();
        } else if (cantitatVictoriesP1 == 2) {
            m_bison.victoria2 = true;
            blanka.derrota = true;
            m_bison.ha_guanyat = true;
            m_bison.mostrarWinGran = true;
            pararJocXRonda();
        }
    }
    if (m_bison.vida <= 0) {
        if (cantitatVictoriesP2 < maxVictories) {
            cantitatVictoriesP2++;
        }
        m_bison.vida = 145;
        m_bison.barraVida.width = 145;

        if (cantitatVictoriesP2 == 1) {
            blanka.victoria1 = true;
            m_bison.derrota = true;
            blanka.ha_guanyat = true;
            blanka.mostrarWinPetit = true;
            pararJocXRonda();
        } else if (cantitatVictoriesP2 == 2) {
            blanka.victoria2 = true;
            m_bison.derrota = true;
            blanka.ha_guanyat = true;
            blanka.mostrarWinGran = true;
            pararJocXRonda();
        }
    }
}

// funció per a dibuixar les vicotries d'un jugador
function dibuixarVictories() {
    if (cantitatVictoriesP1 == 1) {
        pose_victoria3.animacio();
    } else if (cantitatVictoriesP1 == 2) {
        pose_victoria3.animacio();
        pose_victoria4.animacio();
    }

    if (cantitatVictoriesP2 == 1) {
        pose_victoria1.animacio();
    } else if (cantitatVictoriesP2 == 2) {
        pose_victoria1.animacio();
        pose_victoria2.animacio();
    }
}

// Reiniciar la animación después de la pausa
function pararJocXRonda() {
    clearInterval(intervalTemps);

    //Pausa previa a finalitzar el joc del tot
    if (cantitatVictoriesP1 >= maxVictories || cantitatVictoriesP2 >= maxVictories) {
        return;
    }

    // Pausa temporal entre rondes
    setTimeout(() => {
        // Establir vairables a false per a que no es mostrin les animacions / textos de victoria
        blanka.derrota = false;
        m_bison.derrota = false;
        blanka.victoria1 = false;
        blanka.victoria2 = false;
        m_bison.victoria1 = false;
        m_bison.victoria2 = false;
        blanka.ha_guanyat = false;
        m_bison.ha_guanyat = false;

        blanka.mostrarWinPetit = false;
        blanka.mostrarWinGran = false;
        m_bison.mostrarWinPetit = false;
        m_bison.mostrarWinGran = false;

        blanka.parar_animacio = false;
        m_bison.parar_animacio = false;

        decimes = 9;
        unitats = 9;
        actualitzarTempsPantalla();
        iniciarTemporitzador();
    }, 3000);
}

// Fica el joc en pausa, neteja el interval y revisa que al joc apareixi el text "Game over"
function jocEnPausa() {
    jocpausat = true;
    clearInterval(intervalTemps);
    estatContador = true;
}

// Fica el joc en marcha, elimina el text (el fa no visible), reinicia el temporitzador i crita principal per iniciar totes les animacions
function jocEnMarcha() {
    jocpausat = false;
    estatContador = false;
    iniciarTemporitzador();
    principal();
}