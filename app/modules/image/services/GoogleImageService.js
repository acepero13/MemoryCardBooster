/**
 * Created by alvaro on 12/15/16.
 */


imageModule.service('GoogleImageService', function () {
    var ImagesClient = require('google-images');
    let client = new ImagesClient('001170306472987355417:5new7iw21sc', 'AIzaSyD2u8ODFiFFtixvpyukt8oAAm1wdBg9T9s');
    this.listPossibleImages = function (keyword) {
        console.log("keyword: "+ keyword);
        return client.search(keyword);
    }
});