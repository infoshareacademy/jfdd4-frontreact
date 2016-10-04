/**
 * Created by Beata on 03.10.2016.
 */

var firstPhoto = $('#team-first-photo');
var photoOffset = firstPhoto.offset();
var bottomTeamPhoto = photoOffset.top + firstPhoto.height();

$(window).scroll(function() {
    var scrollBottom = $(window).scrollTop() +  $(window).height();
    if(bottomTeamPhoto < scrollBottom) {
        $('.team-obverse-reverse').addClass('rotation');
    }
});

