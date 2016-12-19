/**
 * Created by alvaro on 12/3/16.
 */
var visible_side = 'main';
function flipCard() {
    if(visible_side == 'main'){
        jQuery("#card").flip(true);
        visible_side = 'secondary';
    }else{
        jQuery("#card").flip(false);
        visible_side = 'main';
    }
}

function flipToMain() {
    if(visible_side == 'secondary'){
        jQuery("#card").flip(false);

        visible_side = 'main';
    }
}
jQuery( document ).ready(function() {
    // Handler for .ready() called.
    jQuery("#card").flip({
        axis: 'x',
        speed: 200,
        trigger: 'manual' // use manual
    });

});
