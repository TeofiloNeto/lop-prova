let imagemProgramador;
let imagemFundo;
let imagemOrientador;
let fundoinicio1;
let setasteclado
var fonteGeral
var x = 613;
var y= 255;
let bola;
//_______________________________________
// botão iniciar
var larguraBotao = 200;
var xMinBotao = 510;
var xMaxBotao = xMinBotao + larguraBotao;
var yMinBotao = 150;
var alturaBotao = 60;
var yMaxBotao = yMinBotao + alturaBotao;
//_______________________________________________
//botao Tutorial

var yMinBotao2 = yMinBotao+80;
var yMaxBotao2 = yMinBotao2 + alturaBotao;
//_______________________________________________
//botao creditos

var yMinBotao3 = yMinBotao+160;
var yMaxBotao3 = yMinBotao3 + alturaBotao;
//_______________________________________________
//botao voltar dos creditos

var yMinBotao4 = yMinBotao+370;
var yMaxBotao4 = yMinBotao4+alturaBotao;

var tela = 1;
//_______________________________________________
// tela menu = 1
// tela créditos = 3

function preload(){
  imagemProgramador = loadImage("eu.jpg")
  imagemFundo = loadImage("imagemFundo.jpg")
  imagemOrientador = loadImage("imagemOrientador.jpg")
  fundoinicio1 = loadImage ("fundoinicio1.jpg")
  setasteclado= loadImage("setasteclado.png")
  fonteGeral = loadFont("letra.ttf");
  particulas = loadImage ("particulas.gif");
  fundoTutorial = loadImage("fundotutorial.jpg")
  campo = loadImage("campo.png");
  bola = loadImage("bola.png")
}

// menu do jogo


function setup() {
   createCanvas(1280, 600);
}
// Tela Jogo e botões de inicio
function telaJogo() {
  textFont(fonteGeral)
  
    background(220); 
    image(fundoinicio1,0, 0, 1280,600);
    image(particulas,0, 0, 1280,600);
    //image(particulas2,0, 0, 800,720);
    textSize(20);
  textSize(50);

 //_______________________________________________________________________________________________________
  fill (57, 255, 20)
  text("Futebol Game Educativo", 460, 115) 
  textSize(60);// tamanho da fonte geral inicial
  
  //_______________________________________________________________________________________________________
  //Botão iniciar
  
  fill( 100)
  if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao && mouseY < yMaxBotao ){
    fill(240);
   if (mouseIsPressed )
    tela = 0
  }
 
 rect(xMinBotao, yMinBotao, larguraBotao, alturaBotao, 48);
 fill(8, 77,110) // cor do texto iniciar
 text("Iniciar", 565, 190) // direção da fonte na tela


 //_______________________________________________________________________________________________________
// botao tutorial 
 
 fill( 100)
 if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao2 && mouseY < yMaxBotao2 ){
   fill(240);
   if (mouseIsPressed )
   tela = 2
 }

rect(xMinBotao, yMinBotao2 , larguraBotao, alturaBotao, 48);
fill(8, 77,110) // cor do texto iniciar
text("Tutorial", 550, 276) // direção da fonte na tela

 //_______________________________________________________________________________________________________
  //Botão creditos
  
  fill( 100)
  if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao3 && mouseY < yMaxBotao3 ){
    fill(240);
    if (mouseIsPressed )
    tela = 3
  }
 
 rect(xMinBotao, yMinBotao3, larguraBotao, alturaBotao, 48);
 fill(8, 77,110) // cor do texto iniciar
 text("Créditos", 555, 355) // direção da fonte na tela



}
//________________________________________________________________________
// area tutorial
function tutorial(){

  background(220);
  image(fundoTutorial,0, 0, 1280,600);
  fonteGeral = loadFont("letra.ttf");
  textSize(46);
  fill(255);



  //____________________________________________________________________________________
// botão voltar tutorial
//noFill()

textSize(80);
fill(255,255,255) // cor do texto do tutorial
text("Tutorial", 550, 110);
textSize(40)
text("->Utilize as setas do teclado para selecionar as opções no jogo<-", 300, 250);
image(setasteclado, 510,270,200,200);
fill( 100)
if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao4 && mouseY < yMaxBotao4 ){
  fill(180);
  if (mouseIsPressed )
  tela = 1
}

    
rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 48);
fill(230, 232,250) // cor do texto iniciar
textSize(40)
text("Voltar", 575, 560) // direção da fonte na tela
}


   

//___________________________________________________________________________________

// Tela Creditos
function telaCreditos(){
  
  {
    //___________________________________________________________________________________
    // Sessão Fundo Background
    background(220);
    image(imagemFundo,0, 0, 1280,600);
    fonteGeral = loadFont("letra.ttf");
    textSize(46);
    fill(255);
    //____________________________________________________________________________________
    //Sessão programador
    text("Créditos", 590, 70);
    textSize(40);

    text("Teofilo Lopes", 390, 120);
    text("Função: Programador", 390,150);
    text("Graduando em Ciencias e Tecnologias (UFRN)", 390,180);
    image(imagemProgramador,230, 50, 130,150 );
    //____________________________________________________________________________________________
    // Sessão Educador
    
    text("Marcio Lemos", 390, 320);
    text("Função: Orientador", 390,350);
    text("Licenciatura Plena em Matemática - UERN", 390,380);
    text("Mestrado em Matemática Aplicada e Estatística - UFRN", 390,410);
    //image(imagemOrientador,230, 270, 130,150 );
    //___________________________________________________________________________
    //Botão voltar dos creditos
    noFill()
    fill( 100)
    if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao4 && mouseY < yMaxBotao4 ){
      fill(180);
      if (mouseIsPressed )
      tela = 1
    }
   
   rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 48);
   fill(230, 232,250) // cor do texto iniciar
   text("Voltar", 575, 560) // direção da fonte na tela

    //____________________________________________________________________
    


  }
}
//______________________________________________________
// Função da tela do jogo
function telaplay(){
 

  image(campo,0, 0, 1280,550);
 if (keyIsDown(LEFT_ARROW))
 x=x-5;

 if (keyIsDown(RIGHT_ARROW))
 x+=5;

 if (keyIsDown(UP_ARROW))
 y-=5;

 if (keyIsDown(DOWN_ARROW))
 y+=5;
  image(bola, x, y, 50, 50)
  fill( 100)
  if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao4 && mouseY < yMaxBotao4 ){
    fill(180);
    if (mouseIsPressed )
    tela = 1
  }
 
 rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 48);
 fill(230, 232,250) // cor do texto iniciar
 text("Voltar", 565, 560) // direção da fonte na tela

}


function draw(){
  if ( tela == 0 ){
    telaplay();}

  if ( tela == 1 ){
  telaJogo();
}
if (tela == 2){

tutorial();
}

 if ( tela == 3){ 
  telaCreditos();
}


  }