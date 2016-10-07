
$('#game-start').hide();
// wyswietlanie tablicy
$('form').on('submit', function(event) {
    event.preventDefault();
    // $('body').addClass('background-grey').show();
    $('#game-container').show();
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

