/**
 * Created by piotrszablewski on 06.10.16.
 */
var config, apples, player;
config = {
    boardWidth: $('#site').width()
};
apples = [];
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
    console.log(apple.left + 'px');
    return $('<div>').addClass('apples').css({
        left: apple.left + 'px'
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
            top: top + a.speed + 'px'
        })
    });
}

function generatePlayerHTML(){
    player.$html = $('<div>').addClass('player');
    var top = player.$html.position().top;
    player.$html.css({
        left: player.left + 'px',
        top: top + 450 + 'px'
    });
    player.$html.appendTo('#gameZone');
}

function updatePlayerPosition() {
    var left = player.$html.position().left;
    player.$html.css({
        left: left + player.velocity + 'px'
    });

}
$(function(){

    $(document).keydown(function(e){
        // alert(e.keyCode);
    switch (e.keyCode){
        case 37: player.velocity =2;
            break;
        case 39: player.velocity = -2;
            break;
    }
});

});

function movePlayer(){


}
function update() {
    updateApplesPositions();
    updatePlayerPosition();

    // checkIfPlayerCoughtApple();

    requestAnimationFrame(update);
}


// on keypress player.speed = -10 / 10

generatePlayerHTML();
requestAnimationFrame(update);

setInterval(fireApple, 1500);


// //deklaclaracja ruszania
// var xpos = 100;
// var xspeed = 1;
// var maxSpeed = 5;
//
// //granice
// var minx = 0;
// var maxx = 590;
//
// //kontrola
// var leftPressed = 0;
// var rightPressed = 0;
//
// function slowDownX () {
//     if (xspeed > 0)
//         xspeed = xspeed - 1;
//     if (xspeed < 0)
//         xspeed = xspeed + 1;
// }
//
// function gameLoop () {
//
//     xpos = Math.min(Math.max(xpos + xspeed,minx),maxx);
// }
//
// //zniana pozycji koszyczka
// document.getElementById('koszyk').style.left = xpos;
//
// //zmiana predkosci w oparciu o keyboard events
// if (rightPressed == 1)
//     xspeed = Math.min(xspeed + 1,1*maxSpeed);
// if (leftPressed == 1)
//     xspeed = Math.min(xspeed + 1,-1*maxSpeed);
//
// //deklaracje
// if (leftPressed == 0 && rightPressed == 0)
//     slowDownX();
//
// //petla
// setTimeout("gameLoop(),10");
//
// function KeyDown(e) {
//     var code = e.KeyCode ? e.KeyCode : e.which;
//     if (code == 37)
//         leftPressed = 1;
//     if (code == 39)
//         rightPressed = 1;
// }
//
