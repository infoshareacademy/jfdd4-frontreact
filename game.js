/**
 * Created by patryk on 10/3/16.
 */


// modal window to create the table where the game will be show
var modal = document.getElementById('myModal');

//button otwierajacy modalne okno
var btn = document.getElementById("myBtn");

//<span> zamykajacy okienko
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display= "block";
}

//gdy uzytkownik kliknie w spana (x) - zamykanie okienka
span.onclick = function () {
    modal.style.display = "none";
}

