/**
 * Created by alvaro on 12/15/16.
 */
var ImageDownloader = function (url) {
    this.url = url;
    this.download = function (fileName, url) {
        return new Promise(function (resolve, reject){
            downloadImage(url, fileName, function () {
                resolve(fileName);
            });

        });

    };

    downloadImage = function (uri, filename, callback) {
        var fs = require('fs'),
            request = require('request');
        request.head(uri, function(err, res, body){
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback).on( 'uncaughtException', function (err) {
                console.log(err.message)
            } ); // <- many errors don't make it here;
        });
    }
};
