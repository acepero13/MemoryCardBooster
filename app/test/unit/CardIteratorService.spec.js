/**
 * Created by alvaro on 12/8/16.
 */
'use strict';
process = window.process || window.parent.process;
require = window.require || window.parent.require;
describe("Integration testing for CardServiceIterator With Cards", function () {
    var cardService;
    var q;
    var rootScope;
    // Initialize the service
    beforeEach(module('CardModule'));

    beforeEach(inject(function ($q, $rootScope, _CardIteratorRespository_) {
        q = $q;
        rootScope = $rootScope;
        var fakeRepo = getFakeRepository($q,$rootScope);
        cardService = _CardIteratorRespository_;
        cardService.cardRepository = fakeRepo;
    }));

    it('should return have a list of cards (1)', function (done) {
        rootScope.$digest();
        cardService.getNextCard().then(function (card) {
            expect(card.primary_card).toBe('Card1');
            done();
        });
    });

    it('should return have a list of cards (1)', function (done) {
        rootScope.$digest();
        cardService.getNextCard().then(function (card) {
            expect(card.primary_card).toBe('Card1');
            done();
        });
    });

});

function getFakeRepository($q, rootScope) {
    return {
        getStudyCardSet:function () {
            var defer = $q.defer();
            setTimeout(function(){
                defer.resolve([{'primary_card': 'Card1', 'secondary_card' : 'Secondary Card 1'}]);
                rootScope.$digest();
            }, 2);
            return defer.promise;
        }
    };
}




