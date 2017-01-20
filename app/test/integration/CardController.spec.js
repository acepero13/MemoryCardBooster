
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
        emptyTable().then(function () {
            fillCardController().then(function () {
                done();
            });
        })

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

    describe('When getPreviousCard of an  Empty CardDeck', function () {
        it('should have empty card', function (done) {
            scope.getPreviousCard();
            setTimeout(function () {
                scope.getPreviousCard();
                rootScope.$apply();
                expect(scope.card.primary_card).toBe("");
                done();
            },15)
        });
    });


    describe('When getPreviousCard after moving foward deck', function () {
        it('should have a first Card', function (done) {
            scope.getNextCard();
            setTimeout(function () {
                scope.getNextCard();
                scope.getNextCard();
                rootScope.$apply();
                expect(scope.card.primary_card).toBe("Card 1");
                done();
            },15)

        });

    });

    describe('When getPreviousCard of empty deck', function () {
        it('should have default Card', function (done) {
            scope.getNextCard();
            setTimeout(function () {
                scope.getPreviousCard();
                scope.getPreviousCard();
                scope.getPreviousCard();
                expect(scope.card.primary_card).toBe("Hallo");
                done();
            },15)

        });

    });

});

function fillCardController() {
    var Card = getCard();
    Card.build({id: 1, primary_card: 'Card 1', secondary_card: 'Seconday Card 1'}).save();
    return  Card.build({id: 2, primary_card: 'Card 2', secondary_card: 'Seconday Card 2'}).save();
}

function emptyTable() {
    return Card.destroy({truncate: true});
}

function getCard() {
    var base_path = process.cwd();
    var Card = require(base_path + '/db/database.js').card;
    return Card;
}



