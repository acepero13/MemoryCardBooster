/**
 * Created by alvaro on 12/15/16.
 */
function displayTopDialog() {
    jQuery('#dock-header').animate({
        height: '92%', display: 'block'
    }).promise().done(function () {
        jQuery('#dock-content').css('display', 'block');
    });
}

function goUp() {
    jQuery('#dock-header').animate({
        height: '0px', display: 'block'
    }).promise().done(function () {
        jQuery('#dock-content').css('display', 'none');
    });
}