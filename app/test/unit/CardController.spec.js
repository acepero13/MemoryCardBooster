
/**
 * Created by alvaro on 12/6/16.
 */
describe('Testing CardController Repository Has Next' ,function () {
    var scope = {};
    var ctrl;
    beforeEach(module('CardModule'));
    function createController($rootScope, $controller, cardRepository) {
        scope = $rootScope.$new();
        ctrl = $controller('CardController', {$scope: scope, CardRespository: cardRepository});
    }

    beforeEach(inject(function ($controller, $rootScope) {
        var cardRepository = getCardFakeRepository();
        createController($rootScope, $controller, cardRepository);
    }));

    describe('When initializing controllers', function () {
        it('should contain main Card', function () {
            expect(scope.card.primary_card).toBe("Hallo");
        });
    });

    describe('When getNextCard', function () {
        it('should have a new Card defined', function () {
            scope.getNextCard();
            expect(scope.card.primary_card).toBe("Card");
        });
    });

    describe('When getPreviousCard', function () {
        it('should have a previous Card defined', function () {
            scope.getPreviousCard();
            expect(scope.card.primary_card).toBe("Hallo");
        });
    });

});


describe('Testing CardController Repository Does not has Next' ,function () {
    var scope = {};
    var ctrl;
    beforeEach(module('CardModule'));
    function createController($rootScope, $controller, cardRepository) {
        scope = $rootScope.$new();
        ctrl = $controller('CardController', {$scope: scope, CardRespository: cardRepository});
    }

    beforeEach(inject(function ($controller, $rootScope) {
        var cardRepository = getCardEmptyFakeRepository();
        createController($rootScope, $controller, cardRepository);
    }));



    describe('When getNextCard', function () {
        it('should throw I do not have more cards', function () {
            expect(function () {
                scope.getNextCard();
            }).toThrow(new Error('I do not have more cards'));
        });
    });

    describe('When getPreviousCard', function () {
        it('should throw I am the first card', function () {
            expect(function () {
                scope.getPreviousCard();
            }).toThrow(new Error('I am the first card'));
        });
    });

});

function getCardFakeRepository() {
    return {
        getNextCard: function () {
            var cards = [{primary_card: "Hallo", secondary_card: "Hola"}, {primary_card: "Card", secondary_card: "Karte"}]
            return cards[1];
        },
        getPreviousCard: function () {
            var cards = [{primary_card: "Hallo", secondary_card: "Hola"}, {primary_card: "Card", secondary_card: "Karte"}]
            return cards[0];
        }
    };
}


function getCardEmptyFakeRepository() {
    return {
        getNextCard: function () {
           throw  new Error('I do not have more cards');;
        },
        getPreviousCard: function () {
            throw  new Error('I am the first card');;
        }
    };
}
