/**
 * Created by patryk on 10/3/16.
 */

//deklaclaracja ruszania
var xpos = 100;
var xspeed = 1;
var maxSpeed = 5;

//granice
var minx = 0;
var maxx = 790;

//kontrola
var leftPressed = 0;
var rightPressed = 0;

function slowDownX () {
    if (xspeed > 0)
        xspeed = xspeed - 1;
    if (xspeed < 0)
        xspeed = xspeed + 1;
}

function gameLoop () {

    xpos = Math.min(Math.max(xpos + xspeed,minx),maxx);
}

//zniana pozycji koszyczka
document.getElementById('koszyk').style.left = xpos;

//zmiana predkosci w oparciu o keyboard events
if (rightPressed == 1)
    xspeed = Math.min(xspeed + 1,1*maxSpeed);
if (leftPressed == 1)
    xspeed = Math.min(xspeed + 1,-1*maxSpeed);

//deklaracje
if (leftPressed == 0 && rightPressed == 0)
    slowDownX();

//petla
setTimeout("gameLoop(),10");

function KeyDown(e) {
    var code = e.KeyCode ? e.KeyCode : e.which;
    if (code == 37)
        leftPressed = 1;
    if (code == 39)
        rightPressed = 1;
}




// modal window to create the table where the game will be show
var modal = document.getElementById('myModal');

//button otwierajacy modalne okno
var btn = document.getElementById("myBtn");

//<span> zamykajacy okienko / sprawdzenie validity 
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    console.log('show game board');

    var isFormValid = $('input.input-email').get(0).checkValidity();
    if (isFormValid){
        modal.style.display= "block";
    }
};

//gdy uzytkownik kliknie w spana (x) - zamykanie okienka
span.onclick = function () {
    modal.style.display = "none";
};

