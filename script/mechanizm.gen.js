/**
 * Created by piotrszablewski on 06.10.16.
 */
var config = {

        boardWidth: 500,
    },
    apples = [],
    player = {
        left: config.boardWidth / 2,
        velocity:0

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
    player.$html.css({
        left: player.left + 'px',
        top: top + 450 + 'px'
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
            case 37: updatePlayerPosition(-5);
                break;
            case 39: updatePlayerPosition(5);
                break;
        }
    });


    player.forEach(function (leftSideBoard) {
        var LeftLineBoard = $('#gameZone').left() - 30;
        var RightLineBoard = $('#gameZone').right() - 30;
        if ( LeftLineBoard < leftSideBoard.$html.position().left){
            player.$html.remove();
        }
    })
    // var board = $('#gameZone');
    // if (position.left >= 0 && position.top >= 0 &&
    //     position.left + board.width() <= barrier.width() &&
    //     position.top + board.height() <= barrier.height()) {
    //     player.stop();
    // }

};

// function movePlayer(){
//
// }


////////////////////////
function update() {
    updateApplesPositions();
    hideApplesOutside ();
    updatePlayerPosition();
    // updatePlayerPosition();

    // checkIfPlayerCoughtApple();

    requestAnimationFrame(update);
}


// on keypress player.speed = -10 / 10



// Apples.prototype.checkForBasketGrab = function(apple) {
//     // jeśli jablko jest w koszyku, zrób coś
// };


function startGame() {

    // a = c.b();

    // $('div').attr('id', 'gameZone').appendTo('#game-container');
    // $('#gameZone').appendTo('#game-container');
    config.boardWidth = $("#gameZone").width() - 30;

    requestAnimationFrame(update);
    setInterval(fireApple, 1500);
    generatePlayerHTML();
    initKeys();

}



