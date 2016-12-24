
/**
 * Created by alvaro on 12/6/16.
 */
describe('Testing CardController Repository Has Next' ,function () {
    var scope = {};
    var ctrl;
    var rootScope;
    beforeEach(module('CardModule'));
    function createController($rootScope, $controller, cardRepository) {
        scope = $rootScope.$new();
        ctrl = $controller('CardController', {$scope: scope, CardIteratorRespository: cardRepository});
    }

    beforeEach(inject(function ($controller, $rootScope,$q, $rootScope) {
        var cardRepository = getCardFakeRepository($q);
        createController($rootScope, $controller, cardRepository);
        rootScope = $rootScope;
    }));

    describe('When initializing controllers', function () {
        it('should contain main Card', function () {
            expect(scope.card.primary_card).toBe("Hallo");
        });
    });

    describe('When getNextCard', function () {
        it('should have a new Card defined', function (done) {
            scope.getNextCard();
            setTimeout(function () {
                rootScope.$apply();
                expect(scope.card.primary_card).toBe("Hallo1");
                done();
            },5)

        });
    });

    describe('When getPreviousCard', function () {
        it('should have a previous Card defined', function (done) {
            scope.getPreviousCard();
            setTimeout(function () {
                rootScope.$apply();
                expect(scope.card.primary_card).toBe("Hallo0");

                done();
            },5)

        });
    });

    describe('When getNextCard With image', function () {
        it('should return image', function (done) {
            scope.getNextCard();
            setTimeout(function () {
                rootScope.$apply();
                expect(scope.card.image).toBe("Image");
                done();
            },5)
        })
    })

});


describe('Testing CardController Repository Does not has Next' ,function () {
    var scope = {};
    var ctrl;
    var rootScope ;
    beforeEach(module('CardModule'));
    function createController($rootScope, $controller, cardRepository) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
        ctrl = $controller('CardController', {$scope: scope, CardIteratorRespository: cardRepository});
    }

    beforeEach(inject(function ($controller, $rootScope, $q) {
        var cardRepository = getCardEmptyFakeRepository($q);
        createController($rootScope, $controller, cardRepository);
    }));



    describe('When getNextCard', function () {
        it('should throw Item has no next', function () {
            scope.getNextCard();
            rootScope.$apply();
            expect(scope.card.primary_card).toBe("");
        });
    });

    describe('When getPreviousCard', function () {
        it('should throw I am the first card', function () {
            scope.getPreviousCard();
            rootScope.$apply();
            expect(scope.card.primary_card).toBe("");
        });
    });

});

function getCardFakeRepository($q) {
    return {
        getNextCard: function () {

            var defer = $q.defer();
            setTimeout(function(){
                defer.resolve({primary_card: "Hallo1", secondary_card: "Hola1",image: 'Image'});
            }, 2);
            return defer.promise;
        },

        getPreviousCard: function () {
            var defer = $q.defer();
            setTimeout(function(){
                defer.resolve({primary_card: "Hallo0", secondary_card: "Hola0"});
            }, 2);
            return defer.promise;

        }
    };
}


function getCardEmptyFakeRepository($q) {
    return {
        getNextCard: function () {
            return $q.reject(new Error('Item has no next'));
        },
        getPreviousCard: function () {
            return $q.reject(new Error('I am the first card'));
        }
    };
}

function flipToMain(){

}
