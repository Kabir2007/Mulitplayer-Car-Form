class Form{

constructor(){



}

display(){

var Title = createElement("h1");
Title.html("Multiplayer Car Racing");
Title.position(520,125);

var input = createInput("Name");
input.position(520,300);

var button = createButton("PLAY");
button.position(800,300);

var greeting = createElement("h2");

button.mousePressed(function(){

input.hide();

button.hide();

var name = input.value();

PlayerCount += 1;

player.update(name);
player.updateCount(PlayerCount);

greeting.html(" HI " +  name);
greeting.position(620,300);

});


}

}
