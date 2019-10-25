// Game helper functions
function getRandomNumber(){
   return Math.floor(Math.random() * 4) +1;
}

// Game constructor
let Game = function(){
    this.score = 0;
    this.strict = false;
    this.greenBtn = document.getElementById("btn-green");
    this.redBtn = document.getElementById("btn-red");
    this.yellowBtn = document.getElementById("btn-yellow");
    this.blueBtn = document.getElementById("btn-blue");
    this.gameSequence = [];
    this.userSequence = [];

    this.start = function(){
        this.gameSequence.push(getRandomNumber());
    }

    this.executeSequence = function(){
        for(var i = 0; i < this.gameSequence.length; i++){
            console.log(i + " = " + this.gameSequence[i]);
            if(this.gameSequence[i] == 1){
                const el = this.greenBtn;
                el.classList.add("animated", "delay", "pulse");
                el.addEventListener('animationend', function() {el.classList.remove("animated", "pulse") });
            }else if(this.gameSequence[i] == 2){
                const el = this.redBtn;
                el.classList.add("animated", "delay", "pulse");
                el.addEventListener('animationend', function() {el.classList.remove("animated", "pulse") });
            }else if(this.gameSequence[i] == 3){
                const el = this.yellowBtn;
                el.classList.add("animated", "delay", "pulse");
                el.addEventListener('animationend', function() {el.classList.remove("animated", "pulse") });
            }else{
                const el = this.blueBtn;
                el.classList.add("animated", "delay", "pulse");
                el.addEventListener('animationend', function() {el.classList.remove("animated", "pulse") });
            }
        }

        // this.gameSequence.forEach(el => {
        //     setTimeout(() =>{
        //         if(el == 1)
        //             console.log("green");
        //         else if(el == 2)
        //             console.log("red");
        //         else if(el == 3)
        //             console.log("yellow");
        //         else
        //             console.log("blue");
        //     }, 500);
        // });
        
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

