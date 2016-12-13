/**
 * Created by alvaro on 12/12/16.
 */
'use strict';
var base_dir = process.cwd();
var CardIterator = require(base_dir + '/app/modules/card/util/CardIterator.js');
cardModule.service('CardIteratorRespository', function (_CardRespository_) {
    var cardDeck = [];
    this.cardRepository = _CardRespository_;
    this.initStudyCard = function () {
        if(cardDeck.length <= 0) {
            this.cardRepository.getStudyCardSet().then(initializeStudyCard);
        }
        return cardDeck;
    };
    function initializeStudyCard(cards) {
        cardDeck = new CardIterator(cards);
    }
    this.getCardDeck = function() {
        return cardDeck;
    };

    this.getNextCard = function () {
        return cardDeck.next();
    }
});