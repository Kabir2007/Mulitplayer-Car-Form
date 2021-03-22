class Player {

    constructor(){



    }

    getCount(){

    var playerCountRef = database.ref("PlayerCount");
    playerCountRef.on("value" , function(data){

    PlayerCount = data.val();

    })

}

    updateCount(count){

        database.ref('/').update({

            PlayerCount : count
            
        });

    }

    update(name){

    var playerIndex = "player" + PlayerCount ;
    database.ref(playerIndex).set({name : name});


    }

    }

