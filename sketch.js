var canvas;
var music;

var box;

var box1;
var box2; 
var box3;
var box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100, 550, 50, 20);
    box2 = createSprite(200, 550, 50, 20);
    box3 = createSprite(300, 550, 50, 20);
    box4 = createSprite(400, 550, 50, 20);

    //create box sprite and give velocity
    box = createSprite(random(20, 750), 300, 40, 40);
    box.velocityX = 3;
    box.velocityY = -4;


}

function draw() {
    background(rgb(169,169,169));

    box.shapeColor = "white";
    box1.shapeColor = "purple";
    box2.shapeColor = "red";
    box3.shapeColor = "blue";
    box4.shapeColor = "yellow";

    //create edgeSprite
    createEdgeSprites();

    if(box.x > 800 || box.x < 0 || box.y < 0 || box.y > 600){
        box.velocityX = -box.velocityX;
        box.velocityY = -box.velocityY;
    }

    //add condition to check if box touching surface and make it box

    if(box1.y + 10 <= box.y - 20){
        box1.shapeColor = "red";
    }
    
    drawSprites();
}
