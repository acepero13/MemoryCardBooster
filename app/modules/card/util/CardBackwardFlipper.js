/**
 * Created by alvaro on 2/12/17.
 */

var VISIBLE_PRIMARY = 0;

var  VISIBLE_SECONDARY = 1;


var CardBackwardFlipper = function() {
    this.visible = VISIBLE_SECONDARY;


};

CardBackwardFlipper.prototype = {
    setNewCard: function (card) {
        this.card = card;
        this.resetCard();
    },


    flip: function () {
        (this.visible == VISIBLE_PRIMARY) ? this.flipToSecondaryCard(): this.flipToMainCard();
        this.visible = !this.visible * 1;
    },

    flipToMainCard: function () {
        showMainCard();
        removeBlackFromLetters();
        tryToSpeak(this.card.primary_card, 'de');
    },

    flipToSecondaryCard: function () {
        showSecondary();
        addBlackToLetters();
    },

    resetCard: function () {
        var promise= (this.visible == VISIBLE_SECONDARY) ? flipToSecondaryAsMain() : flipToMain();
        this.visible =  VISIBLE_SECONDARY;
        return promise
    }

};

module.exports = CardBackwardFlipper;