
//initialising the speed of the enemy "bugs"
var speedMin=100;
var speedMax=700;
var speedBase=50;

// A super class that gives location to its subclasses.
class Entity{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

//Sub class of entity
class Enemy extends Entity {
    constructor(x,y){
        super(x,y); 
        this.speed=this.enemySpeed();
        this.sprite='images/enemy-bug.png';
    }
    
    enemySpeed(){
        return Math.floor(Math.random()*(speedMax-speedMin+1)+speedBase); //assigns random speed to the "bugs"
    }

    update(dt){ //updates the location of the "bugs"
        if(this.x<505){
            this.x+=this.speed*dt;              // uses the logic speed times time equals distance to move the "bug" forward
        }else{                                  
            this.x=-100;                        // resets the position.
            this.speed=this.enemySpeed();
        }
    }

    render(){ //gives the bug image to the enemy entity 
        ctx.drawImage(Resources.get(this.sprite), this.x,this.y);   
        ctx.fillStyle="white";
        ctx.font="20px Forte Regular";
        ctx.fillText("Score = "+player.playerScore, 210, 70);       
    }
}

//A sub class of entity
class Player extends Entity {
    constructor(x,y){
        super(x,y);
        this.sprite='images/char-boy.png';
        this.playerScore=0;
    };

//collision detection
//checks wheather the player coordinates coincide with the enemy entities
    update(){
        for(var i=0; i<3; i++){ // a loop is run till 3 because player should not coincide with any of the three "bugs"
            if((this.x < allEnemies[i].x + 72)&& (this.x + 72 >allEnemies[i].x) &&(this.y < allEnemies[i].y) &&(this.y+72>allEnemies[i].y)){ 

                this.collideReset();
            }
        }
    }

    collideReset(){ //restes the player position after a collision
        this.x=200;
        this.y=400;
        if(this.playerScore>0){
            this.playerScore-=1;    
        }
        
    }

    moveReset(){    //resets player position after a successfull "crossing"
        this.x=200;
        this.y=400;
    }

    winReset(){  //resets the player position after the game has been won (crossed 10 times successfully)
        this.x=200;
        this.y=400;
        this.playerScore=0;
    }

    score(){ //updates the score everytime a player makes a successful "cross"
        "use strict";
        this.playerScore+=1;
        if(this.playerScore==5){ //the player wins the game after making 5 successful crosses
            alert("You Won!");
            this.winReset();
        }
        this.moveReset();
    }

    render(){   //draws the playes image
        "use strict";
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(key){   //handles player movements and restricts the player from going out of the canvas 

        if(key=="down"){
            if(this.y < 400){
                this.y=this.y+90;
            }

        }else if(key=="right"){
            if((this.x+100) < 500){
                this.x=this.x+100;
            }

        }else if(key=="up"){
            if(this.y==40){
                this.score();
            }
            else if(this.y > 40){
                this.y=this.y-90;
            }

        }else if(key=="left"){
            if((this.x-100) > -100){
                this.x=this.x-100;
            }
        }
    }
}

var allEnemies=[new Enemy(0,50),        //an array of "bugs" is instantiated
    new Enemy(0,140),
    new Enemy(0,230)];

var player=new Player(200,400);         //new player created


document.addEventListener('keyup',function(e){ //event listner added for listening to arrow key presses
    var allowedKeys={
        37:'left',
        38:'up',
        39:'right',
        40:'down',
    };

    player.handleInput(allowedKeys[e.keyCode]);
}) ;