//variables globals
var canvas, ctx, interval;

//clase lluitador
let player2 = function (x, y, width, height, imatge){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imatge = imatge;

    this.velocitat = 3;
    this.dreta = true;
    this.frameContador = 0;
    this.frameDelay = 5;

    this.dibuixa = function(){
        sprite = new Image();
        sprite.src = this.imatge;
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

    let currentFrame = 0;
    this.animacio = function(){
        if(this.frameContador >= this.frameDelay){
            //codi animacio
            currentFrame = (currentFrame + 1) % ready2.length;
            frame = ready2[currentFrame];

            this.canvas_x = frame.x;
            this.canvas_y = frame.y;
            this.canvas_w = frame.width;
            this.canvas_h = frame.height;
            
            this.frameContador = 0;
        } else{
            this.frameContador++;
        }
        this.dibuixa();
        // interval_player1 = requestAnimationFrame(this.animacio.bind(this)); 
    }
}

// creem el jugador 1 y 2
let ken = new player2 (300, 100, 59, 90, 'img/ken_sprite.png'); //x, y, width, height, color = posHoritzontalCanvas, posVerticalCanvas, amplePersonatge, alturaPersonatge, imgPersonatge


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
        console.log('jugador 2 - amunt');
    }

    if(e.key == 'ArrowDown'){
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