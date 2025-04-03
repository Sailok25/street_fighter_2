var stage_mbison;

document.addEventListener("DOMContentLoaded", inici);
function inici(){
    stage_mbison = new Howl({
        src: ['audios/musica/mbison.mp3'],
        loop: true
    });

    iniciar_musica_escenaris();
}

function iniciar_musica_escenaris(){
    let controlMusica = true;
    
    document.addEventListener('keydown', (tecla)=>{

        if (tecla.key == 's'){
            console.log(controlMusica)
            if(controlMusica){
                console.log("Aturant musica d'escenari");
                stage_mbison.pause();
                controlMusica = false;
            }else{
            console.log("Activant musica d'escenari");
            stage_mbison.play();
            controlMusica = true;
            }
        }
    });
}