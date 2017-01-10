/**
 * Created by alvaro on 31/12/16.
 */
imageModule.factory('ElectronFileSystemFactory', function () {
    var Base64FileSystem = {
        getBase64FileSystemEncoder: function (fileName) {
            var fileS = new FileSystem(fileName );
            var localFileSaver = new Base64LocalFileEncoder(fileS);
            return localFileSaver;
        }
    }
    return Base64FileSystem;

});
