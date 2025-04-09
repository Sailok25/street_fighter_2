var stage_mbison;
var inici_joc;
var victoriaTotal;
var inici_op;

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

    victoriaTotal = new Howl({
        src: ['audios/sonidos/victoria/victoria_total.wav'],
        loop: false
    });

    inici_op = new Howl({
        src: ['audios/musica/opRetro.mp3'],
        loop: false
    });

    iniciar_musica_inici();
    iniciar_musica_escenaris();
    iniciar_victoria_total();
    iniciar_musica_op();
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

function iniciar_victoria_total(){
    let control_victoria = true;
    
    document.addEventListener('keydown', (tecla)=>{

        if (tecla.key == 'v'){
            console.log(control_victoria)
            if(control_victoria){
                console.log("Aturant musica de victoria total");
                victoriaTotal.pause();
                control_victoria = false;
            }else{
            console.log("Activant musica de victoria total");
            victoriaTotal.play();
            control_victoria = true;
            }
        }
    });
}

function iniciar_musica_op(){
    let control_musica_op = true;
    
    document.addEventListener('keydown', (tecla)=>{

        if (tecla.key == 'o'){
            console.log(control_musica_op)
            if(control_musica_op){
                console.log("Aturant musica de op");
                inici_joc.pause();
                control_musica_op = false;
            }else{
            console.log("Activant musica de op");
            inici_joc.play();
            control_musica_op = true;
            }
        }
    });
}