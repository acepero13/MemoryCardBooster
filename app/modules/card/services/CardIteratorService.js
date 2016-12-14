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


    this.initializeStudyCard = function(defer) {
        this.cardRepository.getStudyCardSet().
            then(function (cards) {
                cardDeck = new CardIterator(cards);
                defer.resolve(cardDeck.next());
            });
    };

    this.getNextCard = function () {
        var defer = $q.defer();
        if(this.isDeckEmpty()){
            this.initializeStudyCard(defer);
            return defer.promise;
        }
        return tryToGetNextCard();
    };

    function tryToGetNextCard() {
        try{
            var card = cardDeck.next();
            return $q.when(card);
        }catch (e){
            return $q.when(cardDeck.first());
        }
    }

    this.getPreviousCard = function () {
        if(this.isDeckEmpty()){
            return $q.reject(new Error('Item has no previous'));
        }
        return tryToGetPrevious();
    };

    function tryToGetPrevious() {
        try{
            var card = cardDeck.previous();
            console.log(cardDeck.items);
            return $q.when(card);
        }catch (e){
            return $q.reject(e);
        }
    }

    this.isDeckEmpty = function() {
        return cardDeck.length <= 0 ;
    }
});