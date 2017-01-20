/**
 * Created by alvaro on 12/15/16.
 */
var base_path = process.cwd();
require(base_path + '/app/modules/image/lib/FileSystem/FileSystem.js');
require(base_path + '/app/modules/image/util/Base64LocalFileEncoder.js');
require(base_path + '/app/modules/image/lib/ImageDownloader.js');
imageModule.controller('ImageController', function ($rootScope, $scope,
                                                    GoogleImageService, DummyGoogleImageService,
                                                    ElectronImageDownloaderFactory, ElectronOpenFileDialogFactory,
                                                    ElectronFileSystemFactory) {
    $scope.possibleImages = [];
    $scope.image = null;
    $scope.keyword="";
    $scope.uploadedFile="";

    //GoogleImageService = DummyGoogleImageService;
    $scope.getGooglePossibleImages = function () {
        GoogleImageService.listPossibleImages($scope.keyword).then(function (imageList) {
            $scope.$apply(function() {
                $scope.possibleImages = imageList;
            });
        }, function (err) {
            $scope.possibleImages = [];
        });
    };
    
    $scope.selectImage = function (id) {
        if(id >= 0 && id < $scope.possibleImages.length){
            $scope.image = $scope.possibleImages[id];
            getImage();

        }
    };

    function getImage() {
        if($scope.image.url.length > 0){
            var fileN = 'tmp/' + $scope.image.type.replace('/', '.');
            var url = $scope.image.url;
            var downloader = ElectronImageDownloaderFactory.getImageDownloader(url);
            downloader.download(fileN, url).then(function () {
                saveImage(fileN);
            });
        }
    }

    $scope.imageDropped = function(){
        var fileN = '';
        if($scope.uploadedFile && $scope.uploadedFile.path.length > 0){
            fileN = $scope.uploadedFile.path;
            saveImage(fileN);
        }
    };
    
    $scope.selectDialog = function () {
        var openDialog = ElectronOpenFileDialogFactory.getOpenFileDialog();
        openDialog.showOpenDialog(function (fileName) {
            saveImage(fileName);
        });

    };


    function saveImage(fileName) {
        var localFileSaver = ElectronFileSystemFactory.getBase64FileSystemEncoder(fileName);
                localFileSaver.encodeFile(fileName).then(function (imageEncoded) {
                    $rootScope.card.image = imageEncoded;
                    $rootScope.card.save();
        }).catch(function (err) {
            console.log(err.message);
            console.log("Could not encode image")
        });
    }

});