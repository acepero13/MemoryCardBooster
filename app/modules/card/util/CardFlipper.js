/**
 * Created by alvaro on 2/12/17.
 */

var VISIBLE_PRIMARY = 0;

var  VISIBLE_SECONDARY = 1;

var PRIMARY_FIRST = true;


var CardFlipper = function(primary_first) {
    this.visible = VISIBLE_PRIMARY;
    if(primary_first == undefined || primary_first == null){
        primary_first = true;
    }
    this.is_primary_first = primary_first;

};

CardFlipper.prototype = {
    setNewCard: function (card) {
        this.card = card;
        if(!PRIMARY_FIRST){
            var primary = this.card.primary_card;
            this.card.primary_card =  this.card.secondary_card;
            this.card.secondary_card = primary;
        }
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
        var promise= (this.visible == VISIBLE_PRIMARY) ? flipToMain() : flipToSecondary();
        this.visible = (this.is_primary_first) ? VISIBLE_PRIMARY: VISIBLE_SECONDARY;
        return promise
    }




};

module.exports = CardFlipper;