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


        // putenyasoBlanka = new Howl({ // so de putenyaso blanka
        //     src: ['audios/sonidos/blanka/putenyaso.mp3'],
        // });
        // putenyasoMBison = new Howl({ // so de putenyaso mBison
        //     src: ['audios/sonidos/mBison/putenyaso.mp3'],
        // });
        // patadaBlanka = new Howl({ // so de patada blanka
        //     src: ['audios/sonidos/blanka/patada.mp3'],
        // });
        // patadaMBison = new Howl({ // so de patada mBison
        //     src: ['audios/sonidos/mBison/patada.mp3'],
        // });
        // especialBlanka = new Howl({ // so de especial blanka
        //     src: ['audios/sonidos/blanka/especial.mp3'],
        // });
        // especialMBison = new Howl({ // so de especial mBison
        //     src: ['audios/sonidos/mBison/especial.mp3'],
        // });

        // rondaGuanyada = new Howl({ // so de ronda guanyada
        //     src: ['audios/sonidos/ronda/rondaGuanyada.mp3'],
        // });

        // victoriaTotal = new Howl({ // pantall final
        //     src: ['audios/sonidos/victoria/victoria_total.mp3'],
        // });
    }