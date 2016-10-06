/**
 * Created by piotrszablewski on 06.10.16.
 */
<!DOCTYPE; html>
<html; lang="en">
    <head>
    <meta; charset="UTF-8">
    <title>Title</title>
    <style>;
.apples; {
    0px;;
    0px;;
    absolute;
    z-index: 200;
    30px;;
    30px;;
    background: #ff0000;
};

body; {
    background-color: grey;
};

#site; {
    500px;;
    500px;;
    0 auto;
    relative;
    hidden;
}
</style>
</head>
<body>
<script; src="lib/jquery-2.1.4.min.js"></script>
    <div; id="site">
    <div; id="gameZone"></div>
    </div>


    <script>;

var config = {
        boardWidth: $('#site').width()
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
            'top': top + a.speed + 'px'
        })
    });
}

function updatePlayerPosition() {

}

function update() {
    updateApplesPositions();
    updatePlayerPosition();

    checkIfPlayerCoughtApple();

    requestAnimationFrame(update);
}


// on keypress player.speed = -10 / 10

requestAnimationFrame(update);

setInterval(fireApple, 1500);


</script>;


// <script>
// function fallingApples() {
//     var $appel = $(),
//         createApples = function () {
//             var qt = 1;
//             for (var i = 0; i < qt; ++i) {
//                 var $apple = $('<div class="apples"></div>');
//                 $apple.css({
//                     'left': (Math.random() * $('#site').width()) + 'px',
//                     'top': (-Math.random() * $('#site').height()) + 'px'
//                 });
//                 $appel = $appel.add($apple);
//             }
//             $('#gameZone').prepend($appel);
//         },
//         runAppleStorm = function () {
//             $appel.each(function () {
//                 var singleAnimation = function ($animapple) {
//                     $animapple.animate({
//                         top: "500px",
//                     }, Math.random() + 3500, function () {
//                         $animapple.css({
//                             'left': (Math.random() * $('#site').width()) + 'px',
//                             'top': (-Math.random() * $('#site').height()) + 'px',
//                         });
//                         singleAnimation($animapple);
//                     });
//                 };
//                 singleAnimation($(this));
//             });
//         };
//
//     createApples();
//     runAppleStorm();
}

//    fallingApples();


</script>
</body>
</html>;