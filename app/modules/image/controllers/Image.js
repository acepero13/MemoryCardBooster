/**
 * Created by alvaro on 12/15/16.
 */
imageModule.controller('ImageController', function ($rootScope, $scope, GoogleImageService, DummyGoogleImageService) {
    $scope.card = $rootScope.card;
    $scope.possibleImages = [];
    $scope.image = null;
    $scope.keyword="";
    $scope.uploadedFile="";

    GoogleImageService = DummyGoogleImageService;
    $scope.getGooglePossibleImages = function () {
        console.log($scope.keyword);
        GoogleImageService.listPossibleImages($scope.keyword).then(function (imageList) {
            $scope.possibleImages = imageList;
        }, function (err) {
            $scope.possibleImages = [];
        });
    };
    
    $scope.selectImage = function (id) {
        console.log("ID: " + id);
        if(id > 0 && id < $scope.possibleImages.length){
            $scope.image = $scope.possibleImages[id];
        }
    };

    $scope.imageDropped = function(){
      console.log( $scope.uploadedFile);
    }

});