/**
 * Created by alvaro on 12/15/16.
 */
var base_path = process.cwd();
require(base_path + '/app/modules/image/lib/FileSystem/FileSystem.js');
require(base_path + '/app/modules/image/util/Base64LocalFileEncoder.js');
imageModule.controller('ImageController', function ($rootScope, $scope, GoogleImageService, DummyGoogleImageService) {
    $scope.card = $rootScope.card;
    $scope.possibleImages = [];
    $scope.image = null;
    $scope.keyword="";
    $scope.uploadedFile="";

    GoogleImageService = DummyGoogleImageService;
    $scope.getGooglePossibleImages = function () {
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
        var fileN = '';
        if($scope.uploadedFile && $scope.uploadedFile.path.length > 0){
            fileN = $scope.uploadedFile.path;
            saveImage(fileN);

        }
    };
    
    $scope.selectDialog = function () {
        const {dialog} = require('electron').remote
        dialog.showOpenDialog(function (fileNames) {
            if(fileNames.length > 0) {
                var fileName = fileNames[0];
                saveImage(fileName);
            }

        });
    };

    function saveImage(fileName) {
        var fileS = new FileSystem(fileName );
        var localFileSaver = new Base64LocalFileEncoder(fileS);
        localFileSaver.encodeFile(fileName).then(function (imageEncoded) {
            $rootScope.card.image = imageEncoded;
            $rootScope.card.save();
        }).catch(function (err) {
            console.log("Could not encode image")
        });
    }

});