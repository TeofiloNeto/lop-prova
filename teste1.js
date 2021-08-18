var x = 613;
var y= 335;

var bola;

var tela = 1;

function preload(){
    campo = loadImage("campo.png");
    bola = loadImage("bola.png")
}

function setup (){
 createCanvas(1280 , 720 );
}

function telaplay(){

    
   

}

function draw(){
    background(0,128,0);
    image(campo,0, 0, 1280,720);
   if (keyIsDown(LEFT_ARROW))
   x=x-5;

   if (keyIsDown(RIGHT_ARROW))
   x+=5;

   if (keyIsDown(UP_ARROW))
   y-=5;

   if (keyIsDown(DOWN_ARROW))
   y+=5;
    image(bola, x, y, 50, 50)
    

}