let imagemProgramador;
let imagemFundo;
let imagemOrientador;
let fundoinicio1;
let setasteclado
var fonteGeral
var x = 600;
var y= 530;
bolainicioX = 600;
bolainicioY = 530;
subBolaXesq = 4.8;
subBolaYesq = 7.4;
subBolaXdir = 6.5;
subBolaYdir = 8.2
var x2 = 570;
var y2 = 280;
let bola;
let goal
let campo3;
let Goleiro;
let Goleiro2;
let Goleiro3;
let errou;
let Gol;
let grama;
var raio = 25;
var animaBolaEsquerda = false
var animaBolaDireita = false
var contador1 = 0
var contador2 = 0
var contador3 = 0
var contadorfase2 = 0
var contadorfase22 = 0
var contadorgol = 0
var contadorerrou = 0
var contadorplacar = 0
var contadorplacar2= 0
var contagemdepontos = true
var imagemgol = false
var imagemerrou = false
let ufrn; let cet
let png


var xResposta = 455
var yResposta = 300
var xDirRespota = 782
var yDirResposta = 300
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

//var tela = 0.1;
var tela = 1;
//______________________________________________
var yMinBotao5 = 302
var yMaxBotao5 = 302 + 50
var xMinBotao5 = 780
var xMaxBotao5 = xMinBotao5 + 50
//_______________________________________________
var yMinBotao6 = 302
var yMaxBotao6 = 302+50
var xMinBotao6 = 449
var xMaxBotao6 = xMinBotao6 + 50
var img = []
var contadorGse = 0
var tempoG = 0
var framesGol = 0 

var contadorGoleiro
var tempogoleiro
var framesGoleiro

function preload(){
  imagemProgramador = loadImage("eu.jpg");
  imagemFundo = loadImage("imagemFundo.jpg");
  imagemOrientador = loadImage("imagemOrientador.jpg");
  fundoinicio1 = loadImage ("fundoinicio1.jpg");
  setasteclado= loadImage("setasteclado.png");
  fonteGeral = loadFont("letra.ttf");
  particulas = loadImage ("particulas.gif");
  fundoTutorial = loadImage("fundotutorial.jpg");
  bola = loadImage("bola.png");
  Goleiro =loadImage("goleiro1.png");
  Goleiro2 = loadImage("goleiro2.png") ;
  Goleiro3 = loadImage("goleiro3.png") ;
  Gol = loadImage("gool.png");
  errou= loadImage("ERROU.PNG");
  grama= loadImage("grama.png");
  campo3 = loadImage("campo54.jpg");
  ufrn = loadImage("ufrn.jpg"); 
  cet = loadImage("cet.jpg");
  png = loadImage("png.png");

  img[0] = loadImage("branco.png")
  img[1] = loadImage("G.png");
  img[2] = loadImage("O1.png");
  img[3] = loadImage("O2.png");
  img[4] = loadImage("O3.png");
  img[5] = loadImage("L.png");
  img[6] = loadImage("GoooL.png")

  //imgG[11] = loadImage("goleirose7.png")
  imgGo[0] = loadImage("goleirose1.png")
  imgG[1] = loadImage("goleirose2.png")
  imgG[2] = loadImage("goleirose3.png")
  imgG[3] = loadImage("goleirose4.png")
  imgG[4] = loadImage("goleirose5.png")
  imgG[5] = loadImage("goleirose6.png")
  imgG[6] = loadImage("goleirose7.png")
  imgG[7] = loadImage("goleirose8.png")
  imgG[8] = loadImage("goleirose9.png")
}
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
    tela = 1
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
   tela = 0.2
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
    tela = 0.3
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
  tela = 0.1
}

    
rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 48);
fill(230, 232,250) // cor do texto iniciar
textSize(40)
text("Voltar", 575, 560) // direção da fonte na tela
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
   contador3=+ 1
    animaBolaEsquerda = true
  } else if (keyCode === RIGHT_ARROW) {
    contador3=+ 1
    animaBolaDireita = true
    
  }
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
    text("_______________________________________________", 390,190);
    //image(imagemProgramador,230, 50, 130,150 );
    //____________________________________________________________________________________________
    // Sessão Educador
    
    text("Marcio Lemos", 390, 250);
    text("Função: Orientador", 390,280);
    text("Mestrado em Matemática Aplicada e Estatística - UFRN", 390,310);
    text("_______________________________________________", 390,320);

    // Sessão professor
    
    text("Orivaldo Santana", 390, 360);
    text("Função: Professor", 390,390);
    text("Doutorado em computação", 390,420);
    text("Professor da Escola de Ciências e Técnologias - UFRN", 390,450);
    text("_______________________________________________", 390,460);

    //___________________________________________________________________________
    //Botão voltar dos creditos
    noFill()
    fill( 100)
    if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao4 && mouseY < yMaxBotao4 ){
      fill(180);
      if (mouseIsPressed )
      tela = 0.1
    }
   
   rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 48);
   fill(230, 232,250) // cor do texto iniciar
   text("Voltar", 575, 560) // direção da fonte na tela

    //____________________________________________________________________
    


  }
}
function graficos(){
  textFont(fonteGeral)
  image(campo3,0, 0, 1280,600);
  image(ufrn , 900,20,160,66)
  image(cet , 200,20,160,66)
fill(255)
 rect(530, 155, 200, 50, 48);
 fill(8, 77,110) 
 textSize(45)
 text("Responda", 575, 190) // direção da fonte na tela
 fill(255)



 //_____________________________________________________________
 // GOLEIRO
 if (contadorgol == 0 && contadorerrou == 0){
   image (Goleiro, 580, 300, 130 , 180)
 }
//------------------------------------------------------------
if(contadorgol == 1  ){
  if (contagemdepontos == true){
    contador1 = contador1 + 1
    contagemdepontos = false
  }

image(img[framesGol],450,-20,400,200)
//if(tempoG>10 && framesGol<5){
if(tempoG>10){
  framesGol+=1
  if(framesGol>6){
    framesGol=0
  }
  tempoG = 0;
}
tempoG++;




}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
if (contadorerrou == 1 ) {
 image(errou,400,-80,500,500)
 if (contagemdepontos == true){
 contador2 = contador2+ 1
 contagemdepontos = false
 }
}
 // PLACAR
 push()
 fill(255)
 rect(200,200,120,50,48)
 fill(0)
 text(contadorfase2,220, 240);
 text( "/" , 250,240)
 text(contadorfase22,280, 240);
 fill(255)
 text( "Você" , 140,240)
 text( "Oponente" , 330,240)
 pop()
 //________________________________________________________________
 // BOLA
  image(bola, x, y, 50, 50)
    if (animaBolaEsquerda){
    x = x - subBolaXesq;
    y = y - subBolaYesq;
    if (x<550 && y < 305){
      x = xResposta
      y = yResposta      
      animaBolaEsquerda = false 
    }
  }
  image(bola, x, y, 50, 50)
  if (animaBolaDireita){
    x = x + subBolaXdir ;
    y = y - subBolaYdir;
    if (x> 780 ){
      x = xDirRespota
      y = yDirResposta
      animaBolaDireita = false 
    }
  }
 //_____________________________________________________________________________________________________
 // IF DO BOTÃO PROX FASE
  if(contador3 == 1){
    fill(0,128,0) // adiciona a cor de fundo do botão
    if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao4 && mouseY < yMaxBotao4 ){
      fill(0,255,51)
      if (mouseIsPressed ){
        tela = tela + 1 //<--------------------------------------------- TROCAR DE TELA DA FASE
        contador3 = 0
        x = bolainicioX
        y = bolainicioY
        animaBolaDireita = false
        animaBolaEsquerda = false
        contagemdepontos = true
        imagemgol=false
        imagemerrou=false
        contadorgol = false
        contadorerrou = false
       // framesGol=0
      } 
    }
    rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 48);
    fill(230, 232,250) // cor do texto do botão
    text("Prox Fase", 560, 560) // direção da fonte na tela  
  }
}
//______________________________________________________
// Função da tela do jogo
function telafase1(){
  // resposta lado direita
  textSize(30)
   noFill()
   fill( 100)
  rect(xMinBotao5, yMinBotao5, 50, 50, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("0,003", 784, 333) // direção da fonte na tela
  //_________________________________________________________________________________________________________
  // resposta lado esquerda
  noFill()
   fill( 100)
   rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
   fill(230, 232,250) // cor do texto iniciar
   text("0,03",458, 333 ) // direção da fonte na tela
  
   //_________________________________________________________________________________________________
   // Texto da pergunta
   noFill()
   fill(255)
   rect(490, 210, 320, 60, 48);
   fill(8, 77,110) 
   textSize(35)
   text("       A fração 3/100 ", 500, 240) // direção da fonte na tela
   text("corresponde ao número decimal", 500, 260)
  //___________________________________________________________________________________
   
   if (x == xResposta && y == yResposta){
     contadorgol = 1
     push()
     noFill()
     strokeWeight(5); 
     stroke( 0,255,0)
     rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
     pop()
   }
   if( x == xDirRespota && y == yDirResposta){
   contadorerrou = 1
   push()
   noFill()
   strokeWeight(5); 
   stroke( 255,0,0)
   rect(xMinBotao5, yMinBotao5, 50, 50, 48);
  
   pop()
   }
   if(contador1 >= 1  || contadorgol == 1){
   // image(imgGo[0],540, 280, 320, 180)
   }
  }
  
  
    
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function telafase2(){
    //______________________________________________________________________________________________________
  // resposta lado direita
   noFill()
   fill( 100)
   textSize(30)
  rect(xMinBotao5, yMinBotao5, 50, 50, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("5,602", 785, 335) // direção da fonte na tela
  //_________________________________________________________________________________________________________
  // resposta lado esquerda
  noFill()
   fill( 100)
  rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
  
  fill(230, 232,250) // cor do texto iniciar
  text("5,062",453, 335 ) // direção da fonte na tela
   
  
   // Texto da pergunta
   noFill()
   fill(255)
  rect(490, 210, 370, 60, 48);
   fill(8, 77,110) 
   textSize(35)
   text(" O número decimal que é decomposto ", 500, 235) // direção da fonte na tela
   text("      em 5 + 0,06 + 0,002 é", 500, 260)
   noFill()
   fill(255)
  //___________________________________________________________________________________
   if (x == xResposta && y == yResposta){
     contadorgol = 1
     push()
    noFill()
    strokeWeight(5); 
    stroke( 0,255,0)
    rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
    noFill()
    pop()
   }
   if( x == xDirRespota && y == yDirResposta){
   contadorerrou = 1
   push()
   noFill()
   strokeWeight(5); 
   stroke(255,0,0)
   rect(xMinBotao5, yMinBotao5, 50, 50, 48);
   noFill()
   pop()
   }
   if(contadorerrou == 1 || contadorgol == 1){
    
    //image(Goleiro2,420, 280, 320, 180)
    image(Goleiro3,540, 280, 320, 180)
  }
  }
  
  function telafase3(){
  // resposta lado direita
   noFill()
   fill( 100)
  rect(xMinBotao5, yMinBotao5, 50, 50, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("44", 793, 338)// direção da fonte na tela
  //_________________________________________________________________________________________________________
  // resposta lado esquerda
  noFill()
   fill( 100)
  rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("46", 460, 338) // direção da fonte na tela
  
   //_________________________________________________________________________________________________
   // Texto da pergunta
   noFill()
   fill(255)
   rect(430, 210, 410, 60, 48);
   fill(8, 77,110) 
   textSize(45)
   text("Se X=9, quanto vale 53- X = ?", 450, 250) // direção da fonte na tela
   noFill()
   fill(255)
  //___________________________________________________________________________________
  
  if (x == xResposta && y == yResposta){
    contadorerrou = 1
    push()
    noFill()
    strokeWeight(5); 
    stroke( 255,0,0)
    rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
    noFill()
    pop()
  }
  if( x == xDirRespota && y == yDirResposta){
  contadorgol = 1
  push()
   noFill()
   strokeWeight(5); 
   stroke(0,255,0)
   rect(xMinBotao5, yMinBotao5, 50, 50, 48);
   noFill()
   pop()
  }
  if(contadorerrou == 1 || contadorgol == 1){
  
   image(Goleiro2,420, 280, 320, 180)
  }
  }
  function telafase4(){
   // resposta lado direita
   noFill()
   fill( 100)
  rect(xMinBotao5, yMinBotao5, 50, 50, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("15", 793, 338)// direção da fonte na tela
  //_________________________________________________________________________________________________________
  // resposta lado esquerda
  noFill()
   fill( 100)
  rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("13", 460, 338) // direção da fonte na tela
   //_________________________________________________________________________________________________
   // Texto da pergunta
   noFill()
   fill(255)
   rect(430, 210, 450, 65, 48);
   fill(8, 77,110) 
   textSize(40)
   text("Qual é o sucessor do dobro do ", 450, 240) // direção da fonte na tela
   text("antecessor do sucessor do triplo de 2", 450, 270)
   
  
  //___________________________________________________________________________________
  if (x == xResposta && y == yResposta){
    contadorgol = 1
    push()
    noFill()
    strokeWeight(5); 
    stroke( 0,255,0)
    rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
    noFill()
    pop()
  }
  if( x == xDirRespota && y == yDirResposta){
  contadorerrou = 1
  push()
   noFill()
   strokeWeight(5); 
   stroke(255, 0,0)
   rect(xMinBotao5, yMinBotao5, 50, 50, 48);
   noFill()
   pop()
  }
  if(contadorerrou == 1 || contadorgol == 1){
  
   image(Goleiro3,540, 280, 320, 180)
  }
  }
  function telafase5(){
    noFill()
   fill( 100)
  rect(xMinBotao5, yMinBotao5, 50, 50, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("25", 793, 338)// direção da fonte na tela
  //_________________________________________________________________________________________________________
  // resposta lado esquerda
  noFill()
   fill( 100)
  rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("21", 460, 338) // direção da fonte na tela
   //_________________________________________________________________________________________________
   // Texto da pergunta
   noFill()
   fill(255)
   rect(430, 210, 410, 60, 48);
   fill(8, 77,110) 
   textSize(45)
   text("Quanto é 2 + 5 X 3 + 4 ? ", 470, 250) // direção da fonte na tela
  
   if (x == xResposta && y == yResposta){
    contadorgol = 1
    push()
    noFill()
    strokeWeight(5); 
    stroke( 0,255,0)
    rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
    
    pop()
  }
  if( x == xDirRespota && y == yDirResposta){
  contadorerrou = 1
  push()
  noFill()
  strokeWeight(5); 
  stroke(255, 0,0)
  rect(xMinBotao5, yMinBotao5, 50, 50, 48);
  pop()
  }
  if(contadorerrou == 1 || contadorgol == 1){
   
   image(Goleiro3,540, 280, 320, 180)
  }
  }

function placarfinal(){
textSize (80)
textFont(fonteGeral)
  image(grama,0,0, 1280,600)
  image(ufrn , 900,20,160,66)
  image(cet , 200,20,160,66)
  fill(255)
  text("Semi-Final",510, 160);
  rect(520,187,180,60,48)
 fill(0)
 text(contador1,550, 240);
 text( "/" , 600,240)
 text(contador2,640, 240);
 fill(255)
 text( "Você" , 390,240)
 text( "Oponente" , 730,240)
 noFill()
  fill(0)
 text(contadorplacar,200,200)
 text(contadorplacar2,200,280)
//________________________________________________
//contador fase1
  if( contador1 > contador2){
    fill(255)
    contadorplacar = 1
    textSize(70)
    rect(955,187,180,60,48)
    fill(0,0,255)
   text( "Venceu" , 980,240)
  
   
 }
 if(contador1<contador2){
   fill(255)
   textSize(70)
   rect(955,187,180,60,48)
   fill(255,0,0)
   text( "Perdeu" , 980,240)
   contadorplacar = 2
 }
 if(contador1==contador2){
   fill(255)
   rect(955,187,200,60,48)
   textSize(90)
   fill(0)
   text( "Empate" , 980,240)
  
 }
//______________________________________________
// contador fase 2
  fill(255)
  textSize(80)
  rect(520,350,180,60,48)
 fill(0)
 text(contadorfase2,550, 400);
 text( "/" , 600,400)
 text(contadorfase22,640, 400);
 fill(255)
 text( "Final" , 600,320)
 text( "Você" , 390,400)
 text( "Oponente" , 730,400)
 noFill()
  fill(0)

  if( contadorfase2 > contadorfase22){
    fill(255)
    textSize(70)
    rect(955,345,180,60,48)
    fill(0,0,255)
   text( "Venceu" , 980,400)
   contadorplacar2 = 1 
 }
 if(contadorfase2<contadorfase22){
   fill(255)
   textSize(70)
   rect(955,345,180,60,48)
   fill(255,0,0)
   text( "Perdeu" , 980,400)
   contadorplacar2 = 2
 }
 if(contadorfase2 == contadorfase22){
   fill(255)
   rect(955,345,200,60,48)
   textSize(90)
   fill(0)
   text( "Empate" , 980,400)
 }
//+++++++++++++++++++++++++++++++++++++++++++++++
//_______________________________________________ 
if( contadorplacar > contadorplacar2){
   fill(255)
   textSize(140)
  text( "Perdeu" , 460,550)
}if(contadorplacar<contadorplacar2){
  fill(255)
  textSize(140)
  text( "Perdeu" , 500,550)
}if(contadorplacar==contadorplacar2){
  fill(255)
  textSize(140)
  text( "Ganhador" , 500,550)
}
}
function draw(){
  if ( tela == 1 ){
    graficos();
    telafase1();
  }
  //_______________________
  if ( tela == 2 ){
    graficos();
    telafase2();
  }
   //_______________________
   if ( tela == 3 ){
    graficos();
    telafase3();
  }
   //_______________________
   if ( tela == 4 ){
    graficos();
    telafase4();
  }
   //_______________________
   if ( tela == 5 ){
    graficos();
    telafase5();
  }
  //_______________________
  if ( tela == 6 ){
    placarfinal();
  }
  if(tela == 9){
    graficos();
  }
  //__________________________
  if ( tela == 0.1 ){
  telaJogo();
}
//_______________________
if (tela == 0.2){
tutorial();
}
//_______________________
 if ( tela == 0.3){ 
  telaCreditos();
}
//_______________________
}