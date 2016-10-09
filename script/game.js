/**
 * Created by Beata on 06.10.16.
 */

$('#gameZone').hide();
$('#game-start').hide();
$('#game-end').hide();

$('form').on('submit', function(event) {
    event.preventDefault();
    if($('.input-email').val().length != 0 && $('#game-container').is(':hidden')) {
        $('#game-container').show();
        $(window).scrollTop();
        $('#game-start').appendTo('#game-container').show();
    }
});

$('.close').click(function () {
    $('#game-start').hide();
    $('#game-container').hide();
    $('#game-end').hide();
});

$('#game-button').click (function () {
    $('#game-start').hide();
    $('#gameZone').show();
    startGame();
});

