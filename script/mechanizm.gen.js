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
    console.log(apple.left + 'px');
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
};

////////////////////////////////////////////////

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
    var leftLineBoard = board.position().left;
    if (leftLineBoard < player.$html.position().left && player.$html.position().left < leftLineBoard +  board.width() ) {
        updatePlayerPosition(velocity);
        console.log('leftLineBoard ' + board.position().left);
        console.log('pozycja playera ' + player.$html.position().left);
        console.log('rightLineBoard ' + leftLineBoard +  board.width());
    }
};

// function countScore() {
//     var score;
//     score += 100;
//     text("Wynik: " + score.toString());
//     console.log('score');
//     //
// };
//
// //
//  function checkCollisions() {
//      var apple;
//      var basket;
//      var x = position().left;
//      var y =  position().top;
//      if (basket.x < apple.x + apple.width &&
//          basket.x + basket.width > apple.x &&
//          basket.y < apple.y + apple.height &&
//          basket.height + basket.y > apple.y) {
//          apple.$html.remove();
//          score += 100;
//          countScore();
//          //dodajemy punkty
//          //usuwamy jablka
//          //moze animacja przy zliczaniu
//      }
//  };




////////////////////////
function update() {
    updateApplesPositions();
    hideApplesOutside ();
    updatePlayerPosition();
    // countScore();
    requestAnimationFrame(update);
}

function startGame() {
    // $('div').attr('id', 'gameZone').appendTo('#game-container');
    // $('#gameZone').appendTo('#game-container');
    config.boardWidth = $("#gameZone").width() - 30;
    requestAnimationFrame(update);
    setInterval(fireApple, 1500);
    generatePlayerHTML();
    initKeys();
}



