
$('#game-start').hide();
// wyswietlanie tablicy
$('form').on('submit', function(event) {
    event.preventDefault();
    // $('body').addClass('background-grey').show();
    $('#game-container').show();
    $(window).scrollTop();
    $('#game-start').appendTo('#game-container').show();
});


//gdy uzytkownik kliknie w spana (x) - zamykanie okienka
$('.close').click(function () {
    $('#game-start').hide();
    $('#game-container').hide();
});

('#game-button').click (function () {
    $('#game-start').hide();
    $('<div>').addClass('game').show();
});

