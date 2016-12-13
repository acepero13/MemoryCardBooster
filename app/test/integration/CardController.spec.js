
/**
 * Created by alvaro on 12/6/16.
 */
describe('Integration Testing CardController ' ,function () {
    var scope = {};
    var ctrl;
    var rootScope;
    beforeEach(module('CardModule'));


    beforeEach(inject(function ($controller, $rootScope, CardIteratorRespository, CardRespository) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
        ctrl = $controller('CardController', {$scope: scope, CardRespository: CardRespository, CardIteratorRespository: CardIteratorRespository});
    }));

    beforeEach(function (done) {
        fillCardController().then(function () {
            done();
        });
    });


    describe('When getNextCard', function () {
        it('should have a new Card defined', function (done) {
            scope.getNextCard();
            setTimeout(function () {
                rootScope.$apply();
                expect(scope.card.primary_card).toBe("Card 1");
                done();
            },15)

        });
    });

    describe('When getPreviousCard', function () {
        it('should have a new Card defined', function (done) {
            scope.getNextCard();
            setTimeout(function () {
                scope.getNextCard();
                scope.getPreviousCard();
                rootScope.$apply();
                expect(scope.card.primary_card).toBe("Card 1");
                done();
            },15)

        });

    });

    describe('When getPreviousCard and Empty CardDeck', function () {
        it('should have a new Card defined', function (done) {
            scope.getPreviousCard();
            setTimeout(function () {
                scope.getPreviousCard();
                rootScope.$apply();
                expect(scope.card.primary_card).toBe("");
                done();
            },15)
        });

    });

});

function fillCardController() {
    var Card = getCard();
    function createTwoCards() {
        Card.build({id: 1, primary_card: 'Card 1', secondary_card: 'Seconday Card 1'}).save();
       return  Card.build({id: 2, primary_card: 'Card 2', secondary_card: 'Seconday Card 2'}).save();
    }

    return Card.destroy({truncate: true}).then(createTwoCards);
}

function getCard() {
    var base_path = process.cwd();
    var Card = require(base_path + '/db/database.js').card;
    return Card;
}



