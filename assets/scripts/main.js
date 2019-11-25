$(document).ready(() => {
    // Game controls
    let startBtn     = $("#start-game-btn"),
        greenBtn     = $("#btn-green"),
        redBtn       = $("#btn-red"),
        yellowBtn    = $("#btn-yellow"),
        blueBtn      = $("#btn-blue"),
        scoreLabel   = $("#score"),
        strictSwitch = $("#strictMode"),
        gameSeq = [], userSeq = [], score = 0, strict = false,
        loopVar = false, loopDuration = 1000, i = 0, gameWon = false;
    // Game sounds
    var greenBtnSound = new Audio('./assets/music/simonSound1.mp3'),
        redBtnSound = new Audio('./assets/music/simonSound2.mp3'),
        yellowBtnSound = new Audio('./assets/music/simonSound3.mp3'),   
        blueBtnSound = new Audio('./assets/music/simonSound4.mp3');

    // Game initialization function
    function gameInit(){
        gameWon = false;
        gameSeq = [];
        userSeq = [];
        score = 0;
        i = 0;
        scoreLabel.text(score);
        gameSeq.push(getRandomNum());
        clearInterval(loopVar);
        loopVar = setInterval(executeSeq, loopDuration);
    }

    // Strict mode toggle switch tap detection
    strictSwitch.change(() =>{
        if(strictSwitch.attr("checked", "checked") && strict === false){
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
                greenBtnSound.play();
                break;
            case 2:
                redBtn.addClass("pulse");
                redBtnSound.play();
                break;
            case 3:
                yellowBtn.addClass("pulse");
                yellowBtnSound.play();
                break;
            case 4:
                blueBtn.addClass("pulse");
                blueBtnSound.play();
                break;
            default:
                break;
        }
        // Check when animation is finished and remove class
        $(".btn.animated").on('animationend', function() {
            $(".btn.animated").removeClass("pulse");
        });
        // Update game sequence level
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
            // User made wrong sequence
            if(userSeq[i] != gameSeq[i]){
                userSeq = [];
                $(".controls").addClass("shake");
                $(".controls.animated").on('animationend', function() {
                    $(".controls.animated").removeClass("shake");
                });
                if(strict === true){
                    if(loopVar){
                        $(".btn.animated").removeClass("pulse");
                        clearInterval(loopVar);
                        // Game over message
                        $('#game_lost').modal('toggle');
                        break;
                    }
                }
                loopVar = setInterval(executeSeq, loopDuration);
                break;
            }
        }
        // User replicated sequence successfully
        if(userSeq.length === gameSeq.length){
            score++;
            scoreLabel.text(score);
            if(score === 25 && strict === true){
                // Game is won!
                clearInterval(loopVar);
                gameWon = true;
                $('#game_won').modal('toggle');
            }
            // Generate next sequence
            if(gameWon === false){
                gameSeq.push(getRandomNum());
                userSeq = [];
                loopVar = setInterval(executeSeq, loopDuration);
            }
        }
    }
    // User input detection
    greenBtn.click(() =>{
        if(gameSeq.length > 0){
            userSeq.push(1);
            greenBtnSound.play();
            checkSeq();
        }
    });
    redBtn.click(() =>{
        if(gameSeq.length > 0){
            userSeq.push(2);
            redBtnSound.play();
            checkSeq();
        }
    });
    yellowBtn.click(() =>{
        if(gameSeq.length > 0){
            userSeq.push(3);
            yellowBtnSound.play();
            checkSeq();
        }
    });
    blueBtn.click(() =>{
        if(gameSeq.length > 0){
            userSeq.push(4);
            blueBtnSound.play();
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
