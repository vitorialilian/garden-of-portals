let personagem;
let portais;
let portal;
let portal2;
let turma;
let turma2;
let font;
let space;

const tamanho = 64;

let andarX = 0;
let andarY = 0;

let minRange = 0;
let maxRange = 512;

let randomX;
let randomY;

let botao;
let botao2;

let cor;

//executando apenas uma vez ao iniciar o programa
function setup() {
  createCanvas(576, 576);

  personagem = loadImage('./imagens/rickemorty.png');
  portais = loadImage('./imagens/portal.png');
  portal = loadImage('./imagens/portal.png');
  portal2 = loadImage('./imagens/portal2.png');
  turma = loadImage('./imagens/rickandmorty2.png');
  turma2 = loadImage('./imagens/turma.png')
  font = loadFont('./fonts/JotiOne-Regular.ttf');
  space = loadImage('./imagens/space.png')

  randomX = random(minRange, maxRange)
  randomY = random(minRange, maxRange)

  portalX = round(randomX / tamanho) * tamanho
  portalY = round(randomY / tamanho) * tamanho

  cor = color(57, 255, 20)
}

//fica executando até que o programa se encerre
function draw() {
  background(space);

  if (andarX < 0) {
    andarX = 0
  }

  if (andarY < 0) {
    andarY = 0
  }

  if (andarX > tamanho * 8) {
    andarX = tamanho * 8
  }

  if (andarY > tamanho * 8) {
    andarY = tamanho * 8
  }

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      image(portais, x * tamanho, y * tamanho, tamanho, tamanho);
    }
  }
  image(portal, tamanho * 8, tamanho * 8, tamanho, tamanho);

  image(personagem, andarX, andarY, tamanho, tamanho);

  if (andarX === 0 && andarY === 0) {



    fill(0, 0, 0)
    rect(163, 160, 250, 250)

    textSize(30)
    textFont(font)

    fill(57, 255, 20)
    text('Ajude', 242, 220)

    fill(57, 255, 20)
    text('Rick and Morty', 170, 255)

    fill(57, 255, 20)
    text('encontrar o', 190, 285)

    fill(57, 255, 20)
    text('portal correto!', 181, 320)

    image(portal, 348, 348, 64, 64)
    image(turma2, 170, 340, 150, 75)

    //     botao2 = createButton('Iniciar Jogo');
    //     botao2.mousePressed(iniciar)
    //     botao2.style('background-color', cor)
    //     botao2.position(250, 350)

    //     noLoop()
  }


  if (andarX === portalX && andarY === portalY) {

    // criar retangulo
    fill(255, 255, 255)
    rect(0, 0, 576, 576)
    // escrever o texto ganhou 
    textSize(100)
    textFont(font)
    fill(0, 0, 0)
    text('Você', 150, 150)
    text('Venceu!', 100, 250)

    image(turma, 170, 384, 400, 200)
    image(portal2, 0, 400, 180, 180)

    // criar um botão
    botao = createButton('Reiniciar')
    botao.position(250, 270)

    // resetar o jogo
    botao.mousePressed(reset)

    // parar o jogo (loop)
    noLoop()
  }
}

// function iniciar() {
//   botao2.remove()
//   loop()

// }

function reset() {
  andarX = 0
  andarY = 0
  botao.remove()

  randomX = random(minRange, maxRange)
  randomY = random(minRange, maxRange)

  portalX = round(randomX / tamanho) * tamanho
  portalY = round(randomY / tamanho) * tamanho

  loop()
}

//é chamada uma vez toda vez que uma tecla é pressionada
function keyPressed() {
  // DOWN_ARROW, UP_ARROW, RIGHT_ARROW, LEFT_ARROW
  if (keyIsDown(DOWN_ARROW)) {
    andarY += 64
  }

  if (keyIsDown(UP_ARROW)) {
    andarY -= 64
  }

  if (keyIsDown(RIGHT_ARROW)) {
    andarX += 64
  }

  if (keyIsDown(LEFT_ARROW)) {
    andarX -= 64
  }
}