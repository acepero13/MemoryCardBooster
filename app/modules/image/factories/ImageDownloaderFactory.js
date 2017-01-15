/**
 * Created by alvaro on 31/12/16.
 */
imageModule.factory('ElectronImageDownloaderFactory', function () {
   var ImageDownlader = {
       getImageDownloader: function (url) {
           var downloader = new ImageDownloader(url);
           return downloader;
       }
   };

   return ImageDownlader;

});
