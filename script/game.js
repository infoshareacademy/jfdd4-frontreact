/**
 * Created by Beata on 06.10.16.
 */

$('#gameZone').hide();
$('#game-start').hide();

// wyswietlanie tablicy
$('form').on('submit', function(event) {
    event.preventDefault();
    $('#game-container').show();
    $(window).scrollTop();
    $('#game-start').appendTo('#game-container').show();
});


//gdy uzytkownik kliknie w spana (x) - zamykanie okienka
$('.close').click(function () {
    $('#game-start').hide();
    $('#game-container').hide();
});

$('#game-button').click (function () {
    $('#game-start').hide();
    $('#gameZone').show();
 
    // $('<div>').addClass('gameZone').show();
    // $('<div>').addClass('gameZone').show();
    startGame();
});

