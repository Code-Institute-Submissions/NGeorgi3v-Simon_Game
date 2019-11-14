$(document).ready(() => {

    // Game controls
    let startBtn = $("#start-game-btn"),
        greenBtn = $("#btn-green"),
        redBtn = $("#btn-red"),
        yellowBtn = $("#btn-yellow"),
        blueBtn = $("#btn-blue"),
        scoreLabel = $("#score"),
        strictSwitch = $("#strictMode"),
        loginBtn = $("#login_btn"),
        registerBtn = $("#register_btn"),
        gameSeq = [], userSeq = [], score = 0, strict = false,
        loopVar = false,loopDuration = 1000, i = 0;

    // Game initialization function
    function gameInit(){
        gameSeq = [];
        userSeq = [];
        score = 0;
        i = 0;
        console.log(score);
        scoreLabel.text(score);
        gameSeq.push(getRandomNum());
        clearInterval(loopVar);
        loopVar = setInterval(executeSeq, loopDuration);
    }

    // Strict mode toggle switch tap detection
    strictSwitch.change(() =>{
        if(strictSwitch.attr("checked", "checked") && strict == false){
            strict = true;
            if(loopVar){
                $(".btn.animated").removeClass("pulse");
                clearInterval(loopVar);
                gameInit();
            }
        }else{
            strict = false;
        }
    });

    // Showing animated sequence to user
    function executeSeq(){
        $(".btn.animated").attr("disabled", true);
        switch (gameSeq[i]) {
            case 1:
                greenBtn.addClass("pulse");
                break;
            case 2:
                redBtn.addClass("pulse");
                break;
            case 3:
                yellowBtn.addClass("pulse");
                break;
            case 4:
                blueBtn.addClass("pulse");
                break;
            default:
                break;
        }
        $(".btn.animated").on('animationend', function() {
            $(".btn.animated").removeClass("pulse");

        });
        if(gameSeq.length == i+1){
            i = 0;
            $(".btn.animated").attr("disabled", false);
            clearInterval(loopVar);
        }else{
            i++;
        }
    }

    // Checking if user sequence maches with game sequence
    function checkSeq(){
        for (let i = 0; i < userSeq.length; i++) {
            if(userSeq[i] != gameSeq[i]){
                userSeq = [];
                $(".controls").addClass("shake");
                $(".controls.animated").on('animationend', function() {
                    $(".controls.animated").removeClass("shake");
                });
                if(strict == true){
                    
                    if(loopVar){
                        $(".btn.animated").removeClass("pulse");
                        clearInterval(loopVar);
                        gameInit();
                        break;
                    }
                }
                // $(".game").addClass("shake");
                // $(".game.animated").on('animationend', function() {
                //     $(".controls.animated").removeClass("shake");
                // });
                loopVar = setInterval(executeSeq, loopDuration);
                break;
            }
        }
        if(userSeq.length == gameSeq.length){
            score++;
            console.log(score);
            scoreLabel.text(score);
            gameSeq.push(getRandomNum());
            userSeq = [];
            loopVar = setInterval(executeSeq, loopDuration);
        }
    }
    // User input detection
    greenBtn.click(() =>{
        if(gameSeq.length > 0){
            userSeq.push(1);
            checkSeq();
        }
    });
    redBtn.click(() =>{
        if(gameSeq.length > 0){
            userSeq.push(2);
            checkSeq();
        }
    });
    yellowBtn.click(() =>{
        if(gameSeq.length > 0){
            userSeq.push(3);
            checkSeq();
        }
    });
    blueBtn.click(() =>{
        if(gameSeq.length > 0){
            userSeq.push(4);
            checkSeq();
        }
    });
    startBtn.click(() =>{
        gameInit();
    });

    // Random number generator function
    function getRandomNum(){
        return Math.floor(Math.random() * 4) +1;
    }


});
