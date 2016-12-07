
/**
 * Created by alvaro on 12/6/16.
 */

describe('Testing CardController Has Next' ,function () {
    var scope = {};
    var ctrl;
    beforeEach(module('CardModule'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        var cardRepository = getCardFakeRepository();
        ctrl = $controller('CardController', {$scope: scope, CardRespository: cardRepository});
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

});

function getCardFakeRepository() {
    return {
        getNextCard: function () {
            return {primary_card: "Card", secondary_card: "Karte"};
        }
    };
}
