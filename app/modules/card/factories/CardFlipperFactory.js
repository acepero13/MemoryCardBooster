/**
 * Created by alvaro on 2/12/17.
 */
var base_dir = process.cwd();
require(base_dir + '/app/modules/card/util/CardFlipper.js');
cardModule.factory('CardFlipperFactory', function () {
    var CardFlipperFactory = {
        getCardFlipper: function (isPrimaryCardFirst) {
            var flipper = new CardFlipper(isPrimaryCardFirst);
            return flipper;
        }
    };
    return CardFlipperFactory;

});