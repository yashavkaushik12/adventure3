var player, player_img;
var spikes;
var water;
var lava;
var block, block_img;

function preload(){
  block_img = loadImage("images/block.png");
}

function setup(){
  canvas = createCanvas(800, 486);

  block = createSprite(33.5, 27);
  block.addImage(block_img);
  block2 = createSprite(33.5, 81);
  block2.addImage(block_img);
  block3 = createSprite(33.5, 135);
  block3.addImage(block_img);
  block4 = createSprite(33.5, 189);
  block4.addImage(block_img);
  block5 = createSprite(33.5, 243);
  block5.addImage(block_img);
  block6 = createSprite(33.5, 297);
  block6.addImage(block_img);
  block7 = createSprite(33.5, 351);
  block7.addImage(block_img);
  block8 = createSprite(33.5, 405);
  block8.addImage(block_img);
  block9 = createSprite(33.5, 459);
  block9.addImage(block_img);
  block10 = createSprite(100.5, 27);
  block10.addImage(block_img);
  block11 = createSprite(100.5, 81);
  block11.addImage(block_img);
  block12 = createSprite(100.5, 135);
  block12.addImage(block_img);
  block13 = createSprite(100.5, 189);
  block13.addImage(block_img);
  block14 = createSprite(100.5, 243);
  block14.addImage(block_img);
  block15 = createSprite(100.5, 297);
  block15.addImage(block_img);
  block16 = createSprite(100.5, 351);
  block16.addImage(block_img);
  block17 = createSprite(100.5, 405);
  block17.addImage(block_img);
  block18 = createSprite(100.5, 459);
  block18.addImage(block_img);
  block19 = createSprite(167.5, 459);
  block19.addImage(block_img);
  block20 = createSprite(234.5, 459);
  block20.addImage(block_img);
  block21 = createSprite(301.5, 459);
  block21.addImage(block_img);
  block22 = createSprite(368.5, 459);
  block22.addImage(block_img);
  block23 = createSprite(435.5, 459);
  block23.addImage(block_img);
  block24 = createSprite(502.5, 459);
  block24.addImage(block_img);
  block25 = createSprite(569.5, 459);
  block25.addImage(block_img);
  block26 = createSprite(636.5, 459);
  block26.addImage(block_img);
  block27 = createSprite(703.5, 459);
  block27.addImage(block_img);
  block28 = createSprite(770.5, 459);
  block28.addImage(block_img);
  block29 = createSprite(234.5, 405);
  block29.addImage(block_img);
  block30 = createSprite(301.5, 405);
  block30.addImage(block_img);
  block31 = createSprite(368.5, 405);
  block31.addImage(block_img);
  block32 = createSprite(368.5, 405);
  block32.addImage(block_img);
  block33 = createSprite(435.5, 405);
  block33.addImage(block_img);
  block34 = createSprite(502.5, 405);
  block34.addImage(block_img);
  block35 = createSprite(569.5, 405);
  block35.addImage(block_img);
  block36 = createSprite(636.5, 405);
  block36.addImage(block_img);
  block37 = createSprite(703.5, 405);
  block37.addImage(block_img);
  block38 = createSprite(770.5, 405);
  block38.addImage(block_img);
  block39 = createSprite(167.5, 405);
  block39.addImage(block_img);
  block40 = createSprite(368.5, 27);
  block40.addImage(block_img);
  block41 = createSprite(435.5, 27);
  block41.addImage(block_img);
  block42 = createSprite(502.5, 27);
  block42.addImage(block_img);
  block43 = createSprite(569.5, 27);
  block43.addImage(block_img);
  block44 = createSprite(636.5, 27);
  block44.addImage(block_img);
  block45 = createSprite(703.5, 27);
  block45.addImage(block_img);
  block46 = createSprite(770.5, 27);
  block46.addImage(block_img);
  block47 = createSprite(368.5, 81);
  block47.addImage(block_img);
  block48 = createSprite(435.5, 81);
  block48.addImage(block_img);
  block49 = createSprite(502.5, 81);
  block49.addImage(block_img);
  block50 = createSprite(569.5, 81);
  block50.addImage(block_img);
  block51 = createSprite(636.5, 81);
  block51.addImage(block_img);
  block52 = createSprite(703.5, 81);
  block52.addImage(block_img);
  block53 = createSprite(770.5, 81);
  block53.addImage(block_img);
  block54 = createSprite(368.5, 135);
  block54.addImage(block_img);
  block55 = createSprite(435.5, 135);
  block55.addImage(block_img);
  block56 = createSprite(502.5, 135);
  block56.addImage(block_img);
  block57 = createSprite(569.5, 135);
  block57.addImage(block_img);
  block58 = createSprite(636.5, 135);
  block58.addImage(block_img);
  block59 = createSprite(703.5, 135);
  block59.addImage(block_img);
  block60 = createSprite(770.5, 135);
  block60.addImage(block_img);
  block61 = createSprite(368.5, 189);
  block61.addImage(block_img);
  block62 = createSprite(435.5, 189);
  block62.addImage(block_img);
  block63 = createSprite(502.5, 189);
  block63.addImage(block_img);
  block64 = createSprite(569.5, 189);
  block64.addImage(block_img);
  block65 = createSprite(636.5, 189);
  block65.addImage(block_img);
  block66 = createSprite(703.5, 189);
  block66.addImage(block_img);
  block67 = createSprite(770.5, 189);
  block67.addImage(block_img);

  
}

function draw() {
  background("black");
  drawSprites();
}