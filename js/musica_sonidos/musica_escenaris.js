var stage_blanka;
var stage_mbison;

document.addEventListener("DOMContentLoaded", inici);
function inici(){
    stage_blanka = new Howl({
        src: ['audios/musica/blanka.mp3'],
        loop: true
    });

    stage_mbison = new Howl({
        src: ['audios/musica/mbison.mp3'],
        loop: true
    });

    iniciar_musica_escenaris();
}

function iniciar_musica_escenaris(){
    document.addEventListener('keydown', (tecla)=>{
        if(tecla.key == 'b'){
            console.log("Reproduint musica del escenari Blanka");
            stage_blanka.play();
        } else if(tecla.key == 'v'){
            console.log("Reproduint musica del escenari Bison");
            stage_mbison.play();
        }

        if(tecla.key == 'ñ'){
            console.log("Pausant musica del escenari");
            stage_blanka.pause();
            stage_mbison.pause();
        }

        if (tecla.key == 's'){
            console.log("Aturant del tot cualsevol musica d'escenari");
            stage_blanka.stop();
            stage_mbison.stop();
        }
    });
}