/**
 * Created by alvaro on 12/3/16.
 */

var previous_timeout = 0;


function showMainCard() {
    clearTimeout(previous_timeout);
    jQuery("#card").flip(true);

}

function showSecondary() {
    jQuery("#card").flip(false);
}

function showImage() {
    jQuery('#secondary-card .play-word').css('display', 'none');
    jQuery('#secondary-text').css('display', 'none');
    previous_timeout = setTimeout(function () {
        jQuery('#secondary-text').css('display', 'block');
        jQuery('#secondary-text').css({transition: 'background-color 1s ease-in-out', 'background-color': 'black'});
        jQuery('#secondary-card .play-word').css('display', 'block');
    }, 2000)
}
function flippedPromise() {
    return new Promise(function (resolve, reject) {
        $("#card").on('flip:done',function(){
            resolve();
        });
    });
}
function flipToMain() {
    return new Promise(function (resolve, reject) {resolve();});
}

function flipToSecondary() {
    jQuery("#card").flip(false);
    return flippedPromise();
}

function flipToSecondaryAsMain() {
    try{
        jQuery("#card").flip(true);
        jQuery('.main-word').addClass('black-background');
    }catch ( e){
    }
    return new Promise(function (resolve, reject) {resolve();});
}

function removeBlackFromLetters() {
    jQuery('.main-word').addClass('black-background');
}

function addBlackToLetters() {
    jQuery('.main-word').removeClass('black-background');
}


jQuery( document ).ready(function() {
    jQuery("#card").flip({
        axis: 'x',
        speed: 200,
        trigger: 'manual' // use manual
    });

});
