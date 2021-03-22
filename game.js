class Game{

constructor(){



}

getState(){

var gamestateRef = database.ref("Gamestate")

gamestateRef.on("value",function(data){

    Gamestate = data.val();
    
})

}

update(state){
    
    database.ref('/').update({

        Gamestate : state
        
    });

}

start(){
if(Gamestate === 0){
    
    player = new Player();
    player.getCount();
    form = new Form();
    form.display();
}    
}
}