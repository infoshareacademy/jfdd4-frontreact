/**
 * Created by patryk on 10/3/16.
 */

//

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

