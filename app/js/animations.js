/**
 * Created by alvaro on 12/3/16.
 */
var visible_side = 'main';
var previous_timeout = 0;
function flipCard(has_image) {
    if(visible_side == 'main'){
        clearTimeout(previous_timeout);
        jQuery("#card").flip(true);
        visible_side = 'secondary';
        if(has_image){
            jQuery('#secondary-text').css('display', 'none');
            previous_timeout = setTimeout(function () {
                jQuery('#secondary-text').css('display', 'block');
                jQuery('#secondary-text').css({transition: 'background-color 1s ease-in-out', 'background-color': 'black'});
            }, 2000)

        }
    }else{
        jQuery("#card").flip(false);
        visible_side = 'main';
    }
}

function flippedPromise() {
    return new Promise(function (resolve, reject) {
        $("#card").on('flip:done',function(){
            resolve();
        });
    });
}
function flipToMain() {
    if(visible_side == 'secondary'){
        jQuery("#card").flip(false);
        visible_side = 'main';
        return flippedPromise();
    }else{
        return new Promise(function (resolve, reject) {resolve();});
    }

}
jQuery( document ).ready(function() {
    jQuery("#card").flip({
        axis: 'x',
        speed: 200,
        trigger: 'manual' // use manual
    });

});
