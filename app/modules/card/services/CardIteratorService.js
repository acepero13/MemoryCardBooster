/**
 * Created by alvaro on 12/12/16.
 */
'use strict';
var base_dir = process.cwd();
var CardIterator = require(base_dir + '/app/modules/card/util/CardIterator.js');
cardModule.service('CardIteratorRespository',    function (CardRespository, $q, $rootScope) {
    var cardDeck = [];
    console.log(CardRespository);
    this.cardRepository = CardRespository;

    function initializeStudyCard(defer, repo) {
        repo.getStudyCardSet().
            then(function (cards) {
                console.log(cards.length);
                cardDeck = new CardIterator(cards);
                defer.resolve(cardDeck.next());
            });
    }

    this.getNextCard = function () {
        var defer = $q.defer();
        if(isDeckEmpty()){
            initializeStudyCard(defer, this.cardRepository);
            return defer.promise;
        }
        return $q.when(cardDeck.next());
    };

    this.getPreviousCard = function () {
        if(isDeckEmpty()){
            return $q.reject(new Error('Item has no previous'));
        }
        return $q.when(cardDeck.previous());
    };

    function isDeckEmpty() {
        return cardDeck.length <= 0 ;
    }
});