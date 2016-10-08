/**
 * Created by piotrszablewski on 06.10.16.
 */
var config = {

        // boardWidth: 0,
        boardWidth: 500,
    },
    apples = [],
    player = {
        left: config.boardWidth / 2,
        // velocity:0

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

// function generatePlayerHTML(){
//     player.$html = $('<div>').addClass('player');
//     var top = player.$html.position().top;
//     player.$html.css({
//         left: player.left + 'px',
//         top: top + 450 + 'px'
//     });
//     player.$html.appendTo('#gameZone');
// }
//
// function updatePlayerPosition() {
//     var left = player.$html.position().left;
//     player.$html.css({
//         left: left + player.velocity + 'px'
//     });
//
// }
// $(function(){
//
//     $(document).keydown(function(e){
//         // alert(e.keyCode);
//         switch (e.keyCode){
//             case 37: player.velocity =-2;
//                 break;
//             case 39: player.velocity = 2;
//                 break;
//         }
//     });
//
// });
//
// function movePlayer(){
//
// }
//
//
// function updatePlayerPosition() {
//
// }

function update() {
    updateApplesPositions();
    hideApplesOutside ();
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
    config.boardWidth = $("#gameZone").width()-30;

    requestAnimationFrame(update);
    setInterval(fireApple, 1500);
}



