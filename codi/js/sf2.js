//variables globals
var canvas, ctx, interval;

//clase lluitador
let player2 = function (x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.velocitat = 3;
    this.dreta = true;
    this.frameContador = 0;
    this.frameDelay = 5;

    this.dibuixa = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.mou = function(){
        if(this.dreta == true){
            //codi dreta
            if(this.x < 770){
                this.x += this.velocitat;
            }else{
                this.dreta = false;
            }
        }else{
            //codi esquerra
            if(this.x > 0){
                this.x -= this.velocitat;
            }else{
                this.dreta = true;
            }   
        }
    }

    this.esquerra = function(){
        this.x -= this.velocitat;
    }

    this.dreta = function(){
        this.x += this.velocitat;
    }

    this.animacio = function(){
        if(this.frameContador >= this.frameDelay){
            //codi animacio
            if(this.color == 'red'){
                this.color = 'green';
            } else{
                this.color= 'red';
            }
            this.frameContador = 0;
        } else{
            this.frameContador++;
        }
        this.dibuixa();
        interval_player1 = requestAnimationFrame(this.animacio.bind(this)); 
    }
}

// creem el jugador 1 y 2
let ken = new player2 (300, 100, 30, 80, 'red'); //x, y, width, height, color = posHoritzontalCanvas, posVerticalCanvas, amplePersonatge, alturaPersonatge, colorPersonatge


//events de teclat
document.addEventListener('keydown', (e)=>{

//     // Tecles Jugador 1
//     if(e.key == 'w'){
//         console.log('jugador 1 - amunt');
//         player1.amunt();
//     }

//     if(e.key == 's'){
//         console.log('jugador 1 - abaix');
//         player1.abaix();
//     }

//     if(e.key == 'a'){
//         console.log('jugador 1 - esquerra');
//         player1.esquerra();
//     }

//     if(e.key == 'd'){
//         console.log('jugador 1 - dreta');
//         player1.dreta();
//     }

    // Tecles Jugador 2
    if(e.key == 'ArrowUp'){
        ken.adalt();
        console.log('jugador 2 - amunt');
    }

    if(e.key == 'ArrowDown'){
        ken.abaix();
        console.log('jugador 2 - abaix');
    }

    if(e.key == 'ArrowLeft'){
        ken.esquerra();
        console.log('jugador 2 - esquerra');
    }

    if(e.key == 'ArrowRight'){
        ken.dreta();
        console.log('jugador 2 - dreta');
    }
})

document.addEventListener('DOMContentLoaded', inici);

function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    principal();
}

function principal(){
    esborrarCanvas();

    ken.dibuixa();
    ken.animacio();
    // player1.mou();

    // player2.dibuixa();
    // player2.mou();
    
    interval = requestAnimationFrame(principal);
}

function esborrarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}