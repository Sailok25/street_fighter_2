    // Sonido moviment per escollir personatge
    var p1Audio;
    var p2Audio;

    document.addEventListener("DOMContentLoaded", zControl);
    function zControl(){
        p1Audio = new Howl({ // selector de personatge
            src: ['audios/sonidos/altres/escollir_personatge.mp3'],
        });
        p2Audio = new Howl({ // selector de personatge
            src: ['audios/sonidos/altres/escollir_personatge.mp3'],
        });


        round1 = new Howl({ // ronda 1
            src: ['audios/sonidos/veus/round_1.MP3'],
        });
        round2 = new Howl({ // ronda 2
            src: ['audios/sonidos/veus/round_2.MP3'],
        });
        round3 = new Howl({ // ronda 3
            src: ['audios/sonidos/veus/round_3.MP3'],
        });
        fightSonido = new Howl({ // fight
            src: ['audios/sonidos/veus/Fight!.wav'],
        });


        putenyasoBlanka = new Howl({ // so de putenyaso blanka
            src: ['audios/sonidos/cops/putenyaso.wav'],
        });
        putenyasoMBison = new Howl({ // so de putenyaso mBison
            src: ['audios/sonidos/cops/putenyaso.wav'],
        });
        patadaBlanka = new Howl({ // so de patada blanka
            src: ['audios/sonidos/cops/patadeta.wav'],
        });
        patadaMBison = new Howl({ // so de patada mBison
            src: ['audios/sonidos/cops/patadeta.wav'],
        });
        especialBlanka = new Howl({ // so de especial blanka
            src: ['audios/sonidos/cops/blanka_electrocuta.wav'],
        });
        especialMBison = new Howl({ // so de especial mBison
            src: ['audios/sonidos/cops/patadota.wav'],
        });

        veuOuch = new Howl({ // so de veu ouch
            src: ['audios/sonidos/veus/Ou.wav'],
        });

        rondaGuanyada = new Howl({ // so de ronda guanyada
            src: ['audios/sonidos/victoria/victoria_ronda.wav'],
        });



        mbisonRiu = new Howl({ // so de veu guanyador
            src: ['audios/sonidos/veus/mbison_riu.wav'],
        });

        blankaRoar = new Howl({ // so de veu guanyador
            src: ['audios/sonidos/veus/blanka_rep.wav'],
        });

        aplaudimentsPublic = new Howl({ // so de veu guanyador
            src: ['audios/sonidos/veus/aplaudiments_public.wav'],
        });

        soGuanyador = new Howl({ // so de veu guanyador
            src: ['audios/sonidos/victoria/victoria_total.wav'],
        });
    }