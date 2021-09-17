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
var contadorgol = 0
var contadorerrou = 0
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

var tela = 0.1;
//var tela = 9;
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
var imgE = []
var img = []
var contadorGse = 0
var tempoG = 0
var framesGol = 0
var framesErrou = 0


// tela menu = 1
// tela créditos = 3

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

  imgE[0] = loadImage("branco.png")
  imgE[1] = loadImage("E.png");
  imgE[2] = loadImage("R1.png");
  imgE[3] = loadImage("R2.png");
  imgE[4] = loadImage("O1E.png");
  imgE[5] = loadImage("O2E.png");
  imgE[6] = loadImage("Erroou.png")

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
//____________________________________________
//RECTS DAS PERGUNTAS
//RESPOSTA LADO DIREITO
fill(100)
rect(xMinBotao5, yMinBotao5, 50, 50, 48);
fill(230, 232,250) // cor do texto iniciar
//RESPOSTA LADO ESQUERDO
fill( 100)
 rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
 fill(230, 232,250) // cor do texto iniciar
 // TEXTO PERGUNTA 
 fill(255)
 rect(490, 210, 300, 60, 48);
 fill(8, 77,110) 
 textSize(45)

 //_____________________________________________________________
 // GOLEIRO
 if (contadorgol == 0 && contadorerrou == 0){
   image (Goleiro, 580, 300, 130 , 180)
 }
 if(contadorgol == 1 ){
  
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
   if (contagemdepontos == true){
    contador1 = contador1 + 1
    contagemdepontos = false
    
    
  }
 }
 if (contadorerrou == 1 ) {
 // image(errou,400,-80,500,500)
    image(imgE[framesErrou],400,-50,500,300)
    //if(tempoG>10 && framesErrou<5){
    if(tempoG>15){
    framesErrou+=1
    if(framesErrou>6){
      framesErrou=0
    }
    tempoG = 0;
   }
     tempoG++;

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
 text(contador1,220, 240);
 text( "/" , 250,240)
 text(contador2,280, 240);
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
        framesGol=0
        framesErrou = 0
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
fill(255)
text("15", 793, 338) // direção da fonte na tela
//_________________________________________________________________________________________________________
// resposta lado esquerda
text("10",460, 338 ) // direção da fonte na tela
 //_________________________________________________________________________________________________
 // Texto da pergunta
 fill(0)
 text("5+5 =", 610, 250) // direção da fonte na tela
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
 if(contadorerrou == 1 || contadorgol == 1){
  image(Goleiro3,540, 280, 320, 180)
 }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function telafase2(){
  //______________________________________________________________________________________________________
// resposta lado direita
fill(255)
text("35", 793, 338) // direção da fonte na tela
//_________________________________________________________________________________________________________
// resposta lado esquerda
text("45",460, 338 ) // direção da fonte na tela
 // Texto da pergunta
 fill(0)
 text("-5+40 =", 610, 250) // direção da fonte na tela
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

function telafase3(){
// resposta lado direita
fill(255)
text("44", 793, 338)// direção da fonte na tela
//_________________________________________________________________________________________________________
// resposta lado esquerda
text("46", 460, 338) // direção da fonte na tela

 //_________________________________________________________________________________________________
 // Texto da pergunta
 rect(430, 210, 430, 65, 48);
 fill(0)
 text("Se X=9, quanto vale 53- X = ?", 450, 250) // direção da fonte na tela
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
 fill(255)
text("15", 793, 338)// direção da fonte na tela
//_________________________________________________________________________________________________________
// resposta lado esquerda

text("13", 460, 338) // direção da fonte na tela
 //_________________________________________________________________________________________________
 // Texto da pergunta
 rect(430, 210, 480, 65, 48);
 fill(0)
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
  fill(255)
text("25", 793, 338)// direção da fonte na tela
//_________________________________________________________________________________________________________
// resposta lado esquerda
text("21", 460, 338) // direção da fonte na tela
 //_________________________________________________________________________________________________
 // Texto da pergunta
 rect(430, 210, 400, 65, 48);
 fill(0)
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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++      INICIO FASE 2      +++++++++++++++++++++++++++++++++++++++++++++






//__________________________________________________________________________________________
function placarfinal(){
textSize (120)
textFont(fonteGeral)
  image(grama,0,0, 1280,600)
  image(ufrn , 900,20,160,66)
  image(cet , 200,20,160,66)
  fill(255)
  rect(440,155,350,100,48)
 fill(0)
 text(contador1,500, 240);
 text( "/" , 600,240)
 text(contador2,690, 240);
 fill(255)
 text( "Você" , 280,240)
 text( "Oponente" , 810,240)
 noFill()
  fill(0)

 if( contador1 > contador2){
   fill(255)
   textSize(140)
  text( "Você Ganhou" , 400,400)
}if(contador1<contador2){
  fill(255)
  textSize(140)
  text( "Você Perdeu" , 400,400)
}if(contador1==contador2){
  fill(255)
  textSize(140)
  text( "Empate" , 500,400)
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