/**
 * Created by alvaro on 12/3/16.
 */
var visible_side = 'main';
function flipCard(has_image) {
    if(visible_side == 'main'){
        jQuery("#card").flip(true);
        visible_side = 'secondary';
        if(has_image){
            jQuery('#secondary-text').css('display', 'none');
            setTimeout(function () {
                jQuery('#secondary-text').css('display', 'block');
                jQuery('#secondary-text').css({transition: 'background-color 1s ease-in-out', 'background-color': 'black'})
            }, 2000)

        }
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
