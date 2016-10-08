/**
 * Created by piotrszablewski on 06.10.16.
 */
var config = {

        // boardWidth: 0,
        boardWidth: 500,
    },
    apples = [],
    player = {
        left: config.boardWidth / 2
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

function updatePlayerPosition() {

}

function update() {
    updateApplesPositions();
    updatePlayerPosition();

    // checkIfPlayerCoughtApple();

    requestAnimationFrame(update);
}


// on keypress player.speed = -10 / 10



Apples.prototype.checkForBasketGrab = function(apple) {
    // jeśli jablko jest w koszyku, zrób coś
};


function startGame() {

    // a = c.b();

    // $('div').attr('id', 'gameZone').appendTo('#game-container');
    // $('#gameZone').appendTo('#game-container');
    config.boardWidth = $("#gameZone").width();

    requestAnimationFrame(update);
    setInterval(fireApple, 1500);
}



