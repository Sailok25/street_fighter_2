var stage_mbison;
var inici_joc;

document.addEventListener("DOMContentLoaded", inici);
function inici(){
    stage_mbison = new Howl({
        src: ['audios/musica/mbison.mp3'],
        loop: true
    });

    inici_joc = new Howl({
        src: ['audios/musica/inici_joc.mp3'],
        loop: true
    });

    iniciar_musica_inici();
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


function iniciar_musica_inici(){
    let control_musica_inici = true;
    
    document.addEventListener('keydown', (tecla)=>{

        if (tecla.key == 'p'){
            console.log(control_musica_inici)
            if(control_musica_inici){
                console.log("Aturant musica d'inici");
                inici_joc.pause();
                control_musica_inici = false;
            }else{
            console.log("Activant musica d'inici");
            inici_joc.play();
            control_musica_inici = true;
            }
        }
    });
}