/**
 * Created by alvaro on 12/15/16.
 */
function downloadImage(uri, filename, callback) {
    var fs = require('fs'),
        request = require('request');

    request.head(uri, function(err, res, body){
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback).on( 'uncaughtException', function (err) {
            console.log(err.message)
        } ) // <- many errors don't make it here;
    });

}