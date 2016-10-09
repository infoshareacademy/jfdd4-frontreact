/**
 * Created by piotrszablewski on 06.10.16.
 */
var config = {
        boardWidth: 500,
    },
    apples = [],
    player = {
        left: config.boardWidth / 2,
        velocity:0,
        score : 0
    };

function generateRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateApple() {
    return {
        left: Math.random() * config.boardWidth,
        speed: generateRandomBetween(1,5)
    }
}

function createAppleHTML(apple) {
    var leftGameZone = $('#gameZone').position().left;
    // console.log(apple.left + 'px');
    return $('<div>').addClass('apples').css({
        left: apple.left + leftGameZone + 'px'
    });
}

function fireApple() {
    var apple = generateApple();
    apple.$html = createAppleHTML(apple);
    apple.$html.appendTo('#gameZone');
    apples.push(apple);
}

function updateApplesPositions() {
    apples.forEach(function(a) {
        var top = a.$html.position().top;
        a.$html.css({
            'top': top + a.speed + 'px'
        })
    });
}

function hideApplesOutside () {
    apples.forEach(function (apple) {
            var bottomLineBoard = $('#gameZone').height() - 30;
        if ( bottomLineBoard < apple.$html.position().top){
            apple.$html.remove();
        }
    })
}

function generatePlayerHTML(){
    player.$html = $('<div>').addClass('player');
    var top = player.$html.position().top;
    var leftGameZone = $('#gameZone').position().left;
    player.$html.css({
        left: player.left + leftGameZone + 'px',
        top: top + 375 + 'px'
    });
    player.$html.appendTo('#gameZone');
}

function updatePlayerPosition(velocity) {
    var left = player.$html.position().left;
    player.$html.css({
        left: left + velocity + 'px'
    });
}

function initKeys(){
    $(document).keydown(function(e){
        // alert(e.keyCode);
        switch (e.keyCode){
            case 37: movePlayerOnBoard(-5);
                break;
            case 39: movePlayerOnBoard(5);
                break;
        }
    });
};

function movePlayerOnBoard(velocity) {
    var board = $('#gameZone');
    var leftBoardLine = board.position().left;
    var rightBoardLine = leftBoardLine +  board.width();
    var newPositionPlayer = player.$html.position().left;

    if (velocity < 0) {
       if (leftBoardLine <= newPositionPlayer + velocity) {
           updatePlayerPosition(velocity);
       }
    } else {
        if (newPositionPlayer  + player.$html.width() <= rightBoardLine ) {
            updatePlayerPosition(velocity);
        }
    }
};

function countScore() {
    player.score += 1;
   $("#game-score").html("Punkty:" + player.score);
    console.log('score');

};

 function checkCollisions() {
     apples.forEach(function (apple) {
         var appleX = apple.$html.position().left;
         var appleY = apple.$html.position().top;
         var basketX = player.$html.position().left;
         var basketY = player.$html.position().top;
         var basketW = player.$html.width();
         var appleW = apple.$html.width();
         var basketH = player.$html.height();
         var appleH = apple.$html.height() - 30 ;

         if (basketX < appleX + appleW &&
             basketX + basketW > appleX &&
             basketY < appleY  + appleH) {
             apple.$html.remove();
             countScore();
         }
     })
 }

var count=60;
var counter=setInterval(timer, 1000);
function timer()
{
    count=count-1;
    if (count <= 0)
    {
        clearInterval(counter);
        return close_window();
    }
    document.getElementById("timer").innerHTML= " Pozostało Ci : " + count + " sekund na złapanie jak najwiekszej ilości jabłek"; // watch for spelling
}

function close_window() {
    // window.alert (document.write("Zlapales: " + points + "jablek"));
    location.reload();
}

function update() {
    updateApplesPositions();
    hideApplesOutside ();
    updatePlayerPosition();
    requestAnimationFrame(update);
    checkCollisions();
}

function startGame() {
    config.boardWidth = $("#gameZone").width() - 30;
    requestAnimationFrame(update);
    setInterval(fireApple, 1500);
    generatePlayerHTML();
    initKeys();
}
