function telafase7(){
  // resposta lado direita
   noFill()
   fill( 100)
  rect(xMinBotao5, yMinBotao5, 50, 50, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("15", 793, 338) // direção da fonte na tela
  //_________________________________________________________________________________________________________
  // resposta lado esquerda
  noFill()
   fill( 100)
   rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
   fill(230, 232,250) // cor do texto iniciar
   text("10",460, 338 ) // direção da fonte na tela
  
   //_________________________________________________________________________________________________
   // Texto da pergunta
   noFill()
   fill(255)
   rect(490, 210, 300, 60, 48);
   fill(8, 77,110) 
   textSize(45)
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
  function telafase8(){
    //______________________________________________________________________________________________________
  // resposta lado direita
   noFill()
   fill( 100)
  rect(xMinBotao5, yMinBotao5, 50, 50, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("35", 793, 338) // direção da fonte na tela
  //_________________________________________________________________________________________________________
  // resposta lado esquerda
  noFill()
   fill( 100)
  rect(xMinBotao6, yMinBotao6, 2* raio, 2*raio, 48);
  fill(230, 232,250) // cor do texto iniciar
  text("45",460, 338 ) // direção da fonte na tela
   
  
   // Texto da pergunta
   noFill()
   fill(255)
  rect(490, 210, 300, 60, 48);
   fill(8, 77,110) 
   textSize(45)
   text("-5+40 =", 610, 250) // direção da fonte na tela
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
  
  function telafase9(){
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
  function telafase10(){
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
  function telafase11(){
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