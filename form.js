class Form{
    constructor(){
 this.input= createInput("Name");
    this.button= createButton("Start");
    this.greeting= createElement("h3");
    }

    hide (){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display (){
   var title= createElement("h2");
   title.html("Car-racing game");
    title.position(130,0);
    
    this.input.position(130,160);
    this.button.position(250,200);
    this.button.mousePressed ( ()=>{
        this.input.hide(); 
        this.button.hide();
    player.Name= this.input.value();
    playerCount+=1
    player.index=playerCount
    player.updateName();
    player.updateCount(playerCount);
    
    this.greeting.html("Hello "+ player.Name)
    this.greeting.position(130,160);
    }) 
    }
}

