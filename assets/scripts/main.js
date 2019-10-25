$(document).ready(() => {

    // Game controls
    let startBtn = $("#start-game-btn"),
        greenBtn = $("#btn-green"),
        redBtn = $("#btn-red"),
        yellowBtn = $("#btn-yellow"),
        blueBtn = $("#btn-blue"),
        recordLabel = $("#best"),
        strictSwitch = $("#strictMode")
        gameSeq = [], userSeq = [], score = 0, strict = false,
        loopVar = false,loopDuration = 1000, i = 0;

    function gameInit(){
        gameSeq = [];
        userSeq = [];
        score = 0;
        i = 0;
        recordLabel.text(score);
        gameSeq.push(getRandomNum());
        clearInterval(loopVar);
        loopVar = setInterval(executeSeq, loopDuration);
    }

    startBtn.click(() =>{
        gameInit();
    });

    strictSwitch.change(() =>{
        if(strictSwitch.attr("checked", "checked") && strict == false){
            strict = true;
            if(loopVar){
                $(".animated").removeClass("pulse");
                clearInterval(loopVar);
                gameInit();
            }
        }else{
            strict = false;
        }
    });

    greenBtn.click(() =>{
        userSeq.push(1);
        checkSeq();
    });
    redBtn.click(() =>{
        userSeq.push(2);
        checkSeq();
    });
    yellowBtn.click(() =>{
        userSeq.push(3);
        checkSeq();
    });
    blueBtn.click(() =>{
        userSeq.push(4);
        checkSeq();
    });

    
    function executeSeq(){
        $(".animated").attr("disabled", true);
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
        $(".animated").on('animationend', function() {
            $(".animated").removeClass("pulse");

        });
        if(gameSeq.length == i+1){
            i = 0;
            $(".animated").attr("disabled", false);
            clearInterval(loopVar);
        }else{
            i++;
        }
    }

    function checkSeq(){
        for (let i = 0; i < userSeq.length; i++) {
            if(userSeq[i] != gameSeq[i]){
                userSeq = [];
                if(strict == true){
                    if(loopVar){
                        $(".animated").removeClass("pulse");
                        clearInterval(loopVar);
                        gameInit();
                        break;
                    }
                }
                loopVar = setInterval(executeSeq, loopDuration);
                break;
            }
        }
        if(userSeq.length == gameSeq.length){
            score++;
            recordLabel.text(score);
            gameSeq.push(getRandomNum());
            userSeq = [];
            loopVar = setInterval(executeSeq, loopDuration);
        }
    }



    function getRandomNum(){
        return Math.floor(Math.random() * 4) +1;
    }
});
