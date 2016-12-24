/**
 * Created by alvaro on 24/12/16.
 */
var {globalShortcut} = require('electron').remote;
var KeyboardControl = function(deck) {
    this.deck = deck;
    this.register();
};

KeyboardControl.prototype = {

    moveRight: function (deck) {
        console.log(this.deck);
        deck.getNextCard()
    },

    moveLeft: function (deck) {
        deck.getPreviousCard();
    },

    turnCard: function (deck) {
        flipCard((deck.card.image != null));
    },

    register: function () {
        console.log(this.deck);
        globalShortcut.register('Left',  this.moveLeft.bind(null, this.deck));
        globalShortcut.register('Right', this.moveRight.bind(null, this.deck));
        globalShortcut.register('Space', this.turnCard.bind(null, this.deck));
    }
};




