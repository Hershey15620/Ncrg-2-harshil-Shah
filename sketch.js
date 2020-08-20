
var database;

var Canvas;
var gameState=0;
var playerCount;
var form, player, game;

var allplayers;
var distance=0;

function setup(){
    Canvas= createCanvas(400,400)
    database=firebase.database ()

    game= new Game();
    game.getState();
    game.start();   
}

function draw(){
    background("white");

    if (playerCount===4){
        game.update(1)
    }    
    if (gameState===1){
        clear();
        game.play();
    }
    
}

