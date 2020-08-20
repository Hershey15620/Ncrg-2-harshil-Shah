class Game{
    constructor(){

    }

    getState(){
        var gameStateref= database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState=data.val();
        })

    }

    update(State){
        database.ref("/").update({
            gameState: State
        })
    }

    async start (){
        if (gameState===0){
            player= new Player();
            var playerCountref= await database.ref("playerCount").once("value")
            if (playerCountref.exists()){
                playerCount= playerCountref.val()
                player.getCount();
            }
            form= new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(35);
        text("Game Started!", 120,100);
        Player.getPlayerinfo();
        if (allplayers!== undefined){
            var display_position=130
            for (var plr in allplayers){
                if (plr==="player"+player.index){
                    fill ("red");
                }
                else{
                    fill ("black");
                }
            display_position+=20
            text (allplayers[plr].Name+":"+allplayers[plr].distance, 120,display_position)
            }
        }
        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50
            player.updateName();
        }
    }

}



