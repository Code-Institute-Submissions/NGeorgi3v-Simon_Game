// Game helper functions
function getRandomNumber(){
   return Math.floor(Math.random() * 4) +1;
}

// Game constructor
let Game = function(){
    this.score = 0;
    this.strict = true;
    this.greenBtn = document.getElementById("green-btn");
    this.redBtn = document.getElementById("red-btn");
    this.yellowBtn = document.getElementById("yellow-btn");
    this.blueBtn = document.getElementById("blue-btn");
    this.gameSequence = [];
    this.userSequence = [];

    this.start = function(){
        this.gameSequence.push(getRandomNumber());
    }

    this.executeSequence = function(){
        for(var i = 0; i < this.gameSequence.length; i++){
            console.log(i + " = " + this.gameSequence[i]);
            // TODO
            // Add visualization
        }
    }

    this.addUserInput = function(userInput){
        switch (userInput) {
            case "green":
                this.userSequence.push(1);
                break;
            case "red":
                this.userSequence.push(2);
                break;
            case "yellow":
                this.userSequence.push(3);
                break;
            case "blue":
                this.userSequence.push(4);
                break;
            default:
                break;
        }
        this.checkUserInput();
    }

    this.checkUserInput = function(){
        for (let i = 0; i < this.userSequence.length; i++) {
            const userSeq = this.userSequence[i];
            const gameSeq = this.gameSequence[i];
            if(userSeq == gameSeq){
                continue;
            }else{
                if(this.strict){
                    this.gameOver();
                    break;
                }else{
                    this.executeSequence();
                    this.userSequence = [];
                    break;
                }
            }
        }
        if(this.userSequence.length == this.gameSequence.length){
            this.score++;
            this.userSequence = [];
            this.updateGameSequence();
        }
    }

    this.updateGameSequence = function(){
        this.gameSequence.push(getRandomNumber());
        this.executeSequence();
    }

    this.gameOver = function(){
        alert("Game Over!");
    }
}

