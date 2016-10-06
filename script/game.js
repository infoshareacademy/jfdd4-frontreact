/**
 * Created by patryk on 10/3/16.
 */

//

// // modal window to create the table where the game will be show
// var modal = document.getElementById('myModal');
//
// //button otwierajacy modalne okno
// var btn = document.getElementById("myBtn");
//
// //<span> zamykajacy okienko / sprawdzenie validity
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//     console.log('show game board');
//
//     var isFormValid = $('input.input-email').get(0).checkValidity();
//     if (isFormValid){
//         modal.style.display= "block";
//     }
// };




$('#game-start').hide();
// wyswietlanie tablicy
$('form').on('submit', function(event) {
    event.preventDefault();
    // $('body').addClass('background-grey').show();
    $('#game-start').show();
});

//gdy uzytkownik kliknie w spana (x) - zamykanie okienka
$('.close').click(function () {
    $('#game-start').hide();
});

('#game-button').click (function () {
    $('#game-start').hide();
    $('<div>').addClass('game').show();
});
/////////////////////////////////////////////////////////


// //tworzenie i wyswietlanie tablicy
// function createBoard() {
//     $('<div>').appendTo('#game-start');
//         }
//         createBoard();
//     };


// $('input').on('click', function(event) {
//     event.preventDefault();
//     $('<div>').addClass('#game-start').show();
//     createBoard();
//     $('#game-button').on('click', 'button', function () {
//         $(this).text('...');
//         onClicks();
//     });
// });