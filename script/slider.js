/**
 * Created by patryk on 10.10.16.
 */
var currentSlide = 1,
    invtervalId ;

function showSlide(currentSlide) {
    $(".slide").hide();
    $("#slide_" + currentSlide).fadeIn();
}

function prevSlide(){
    currentSlide--;

    if (currentSlide === 0)
        currentSlide = 5;

    showSlide(currentSlide);
}

function nextSlide(){
    currentSlide++;

    if (currentSlide === 6)
        currentSlide = 1;

    showSlide(currentSlide);

}
function startSlider() {
    intervalId = setInterval(nextSlide, 15000);
}
function stopSlider() {
    clearInterval(intervalId);
}

$("#slider-button-top_0").click(function () {
    stopSlider();
});
$("#slider-button-top_1").click(function () {
    showSlide(1);
});
$("#slider-button-top_2").click(function () {
    showSlide(2);
});
$("#slider-button-top_3").click(function () {
    showSlide(3);
});
$("#slider-button-top_4").click(function () {
    showSlide(4);
});
$("#slider-button-top_5").click(function () {
    showSlide(5);
});
$("#slider-button-top_6").click(function(){
    startSlider();
});


$("#slider-button-left-pic").click(function () {
    prevSlide();
});


$("#slider-button-right-pic").click(function () {

    nextSlide();
});

startSlider();