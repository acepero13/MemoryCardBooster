/**
 * Created by alvaro on 2/12/17.
 */

var  VISIBLE_PRIMARY = 0;
var  VISIBLE_SECONDARY = 1;

var CardFlipper = function() {
    this.visible = VISIBLE_PRIMARY;
};

CardFlipper.prototype = {
    setNewCard: function (card) {
        this.card = card;
        this.resetCard();
    },


    flip: function () {
        (this.visible == VISIBLE_PRIMARY) ? this.flipToMainCard(): this.flipToSecondaryCard();
        this.visible = !this.visible * 1;

    },

    flipToMainCard: function () {
        showMainCard();
        this.showSecondaryImage();

    },

    flipToSecondaryCard: function () {
        showSecondary();
    },

    showSecondaryImage: function () {
        if (this.card.image != null) {
            showImage();
        }
    },

    resetCard: function () {
        try {
            tryToSpeak(this.card.primary_card, 'de');
        }
        catch (er){
            console.log(er)
        }
        var promise= (this.visible == VISIBLE_PRIMARY) ? flipToMain() : flipToSecondary();
        this.visible =  VISIBLE_PRIMARY;


        return promise
    }
};

module.exports = CardFlipper;