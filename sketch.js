var Gamestate = 0;
var PlayerCount;
var database;

var form;
var player;
var game1;

function setup(){

  database = firebase.database();
  console.log(database);

  createCanvas(1000,500);

  game1 = new Game();
  game1.getState()
  game1.start()

}

function draw(){



}