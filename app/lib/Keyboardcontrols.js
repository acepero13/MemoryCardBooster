/**
 * Created by alvaro on 24/12/16.
 */
var {globalShortcut} = require('electron').remote;
var KeyboardControl = function(deck) {
    console.log(flipper);
    deck.flipper.setNewCard(deck.card);
    this.deck = deck;
    var flipper;
    this.register();

};

KeyboardControl.prototype = {

    moveRight: function (deck) {
        deck.getNextCard()
    },

    moveLeft: function (deck) {
        deck.getPreviousCard();
    },

    turnCard: function (deck) {

        deck.flipper.flip();
        //flipCard((deck.card.image != null));
    },

    register: function () {
        globalShortcut.register('Left',  this.moveLeft.bind(null, this.deck));
        globalShortcut.register('Right', this.moveRight.bind(null, this.deck));
        globalShortcut.register('Space', this.turnCard.bind(null, this.deck));
    }
};




