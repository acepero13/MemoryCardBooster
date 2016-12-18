/**
 * Created by alvaro on 12/15/16.
 */

describe('Image Controller', function () {
    var scope;
    var ctrl;
    var rootScope;
    var q;
    beforeEach(module('ImageModule'));

    beforeEach(inject(function ($controller, $rootScope, $q) {
        q = $q;
        scope = $rootScope.$new();
        var fakeGoogleImageService = getFakeImageGoogleService($q, $rootScope);
        ctrl = $controller('ImageController', {$scope: scope, GoogleImageService: fakeGoogleImageService, DummyGoogleImageService: fakeGoogleImageService});
        rootScope = $rootScope;
    }));

    it('should getGooglePossibleImages and return list', function (done) {
        scope.keyword = "";
        scope.getGooglePossibleImages();
        setTimeout(function () {
            rootScope.$apply();
            expect(scope.possibleImages.length).toBe(10);
            done();
        }, 5);
    });

    it('should has an image selected', function (done) {
        scope.keyword = "";
        scope.getGooglePossibleImages();
        setTimeout(function () {
            rootScope.$apply();
            scope.selectImage(1);
            expect(scope.image).toBeDefined();
            done();
        }, 5);
    })
});

describe('Image Controller Errors', function () {
    var scope;
    var ctrl;
    var q;
    var rootScope;
    beforeEach(module('ImageModule'));

    beforeEach(inject(function ($controller, $rootScope, $q) {
        q = $q;
        scope = $rootScope.$new();
        var fakeGoogleImageService = getFakeErrorImageGoogleService($q, $rootScope);
        ctrl = $controller('ImageController', {$scope: scope, GoogleImageService: fakeGoogleImageService, DummyGoogleImageService: fakeGoogleImageService});
        rootScope = $rootScope;
    }));

    it('should getGooglePossibleImages and return list', function (done) {
        scope.keyword = "";
        scope.getGooglePossibleImages();
        setTimeout(function () {
            rootScope.$apply();
            expect(scope.possibleImages.length).toBe(0);
            done();
        }, 5);
    });


});

describe('Image Controller FileSystems', function () {
    var scope;
    var ctrl;
    var q;
    var rootScope;
    beforeEach(module('ImageModule'));

    beforeEach(inject(function ($controller, $rootScope, $q) {
        q = $q;
        scope = $rootScope.$new();
        var fakeGoogleImageService = getFakeErrorImageGoogleService($q, $rootScope);
        ctrl = $controller('ImageController', {$scope: scope, GoogleImageService: fakeGoogleImageService, DummyGoogleImageService: fakeGoogleImageService});
        rootScope = $rootScope;
    }));

    function setCardInitData(done) {
        scope.uploadedFile = {path: 'test1'};
        rootScope.card = {primary_card: 'test', image: ''};
        rootScope.card.save = function () {
            console.log("SAVING");
            expect(rootScope.card.image.length).toBeGreaterThan(0);
            done();
        }
    }

    it('should when imageDropped return encoded image', function (done) {
        setCardInitData(done);
        scope.getLocalFileSystem = function () {
            var fileS = new getFakeGoodFileSystem( 'test', 'test');
            var localFileSaver = new Base64LocalFileEncoder(fileS);
            return localFileSaver;
        };
        scope.imageDropped();
    });

    it('should when imageDropped return error', function (done) {
        setCardInitData(done);
        scope.getLocalFileSystem = function () {
            var fileS = new getFakeGoodFileSystem( 'test');
            var localFileSaver = new Base64LocalFileEncoder(fileS);
            return localFileSaver;
        };
        scope.imageDropped();
        done();
    });




});


function getFakeImageGoogleService($q, rootScope) {
    var FakeImageGoogleService = function () {
    };
    FakeImageGoogleService.prototype = Object.create(ImageService);
    FakeImageGoogleService.prototype.listPossibleImages = function () {
        var defer = $q.defer();
        setTimeout(function () {
            var response = JSON.parse('[{"type":"image/jpeg","width":200,"height":200,"size":48217,"url":"https://0.academia-photos.com/986956/355070/3337234/s200_eno.ebenso.jpg","thumbnail":{"url":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQB9XfAU0J09KNVK4QkPasOBs5KhDXvADaqjd6vpt2RLWkOkYS3CnmGA","width":104,"height":104}},{"type":"image/png","width":300,"height":300,"size":31444,"url":"http://www.spd-sachsen.de/wp-content/uploads/2014/07/Jusos-Rose.png","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUpHauwdIxFOX1w9tA2DxsLzxd9v9q-WRoPNNZKdL8B2Vb7HfZvthfQ","width":116,"height":116}},{"type":"image/jpeg","width":620,"height":413,"size":56625,"url":"https://static.franks-travelbox.com/d/4/7/e/d47e6c595b54df02de459bcafe7d0ad…iches-erscheinungsbild-auf-wie-die-kathedrale-selbst-brasilien-620x413.jpg","thumbnail":{"url":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwPTx49RMcCJturMS4NBCt0ILdlLRH9f7HUQn6xuJxLUuthBAYNgbgZh_O","width":136,"height":91}},{"type":"image/jpeg","width":640,"height":307,"size":45705,"url":"http://assets.cdn.moviepilot.de/files/bde568e12347cb78775791066a89690c03da6543de5b8873d546acf5991d/limit/640/2000/darksouls3patch.jpg","thumbnail":{"url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTNCerA-UU7ohjRVLymumsgkl313t-jqBv6rVzE1MoWX5LoHWPjbfjubg","width":137,"height":66}},{"type":"image/jpeg","width":437,"height":203,"size":17470,"url":"http://www.wiesbaden-akademie.de/wp-content/uploads/job-manager-uploads/company_logo/2016/07/Ebenso-Logo-1.jpg","thumbnail":{"url":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8XxGDTqagqqTd1MLBkGzOq57r3TshsdOMXD3U0V78pLamD8SSoiw4cXs","width":126,"height":59}},{"type":"image/jpeg","width":1300,"height":1011,"size":244476,"url":"http://c8.alamy.com/comp/D1Y120/ob-blond-ob-braun-it-happened-at-worlds-fair-joan-obrien-elvis-presley-D1Y120.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZWRYkyOxqZbWapvrx5V0NbxCvn3Ghhr3J9Ffuq7v6eOdwKQrcoPrjT_T","width":150,"height":117}},{"type":"image/jpeg","width":900,"height":600,"size":382809,"url":"http://4.bp.blogspot.com/-deYFpUrFpss/UE2W4xKjJFI/AAAAAAAAAPE/LWQxO8xugnk/s1600/IMG_3860bk.JPG","thumbnail":{"url":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSL9kJLsYe4vczDi3ixsmTajHXlz9k9iHzmvWZHUXVN9loTeFRCnu-f5w","width":146,"height":97}},{"type":"image/jpeg","width":592,"height":450,"size":12807,"url":"http://www.wotech-technical-media.de/_thumbnails_/29828_4_zvo_dgo_dummy16.jpg?m=1477081312","thumbnail":{"url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR1OaBSaGkstzwJhcnxt8iRupo-oABdIjheJHyOx1q4TYhupKWGcXwyB7M7","width":135,"height":103}},{"type":"image/gif","width":188,"height":301,"size":8635,"url":"http://2.bp.blogspot.com/-uFGgUwNZbuw/UDSorldZaZI/AAAAAAAAAYA/mbjtadTCBP4/s1600/gummib2.gif","thumbnail":{"url":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_Z4haCLGnHPtEszg2sfdjtnqkssivURwVRMH1ORWG0JZ5lghjOvU6rAw","width":72,"height":116}},{"type":"image/jpeg","width":960,"height":720,"size":69842,"url":"http://images.slideplayer.org/2/854127/slides/slide_1.jpg","thumbnail":{"url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6CfiRcjJMQ0BCBFeFekXYFIgS-9L7TjvUtehBS4rVZFXKKEZshuS6FZU","width":148,"height":111}}]');
            console.log(response);
            defer.resolve(response);
            rootScope.$apply();
        }, 2);
        return defer.promise;

    };
    return new FakeImageGoogleService();
}


function getFakeErrorImageGoogleService($q, rootScope) {
    var FakeImageGoogleService = function () {
    };
    FakeImageGoogleService.prototype = Object.create(ImageService);
    FakeImageGoogleService.prototype.listPossibleImages = function () {
        return $q.reject(new Error("Unknown error"));
    };
    return new FakeImageGoogleService();
}

