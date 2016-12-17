/**
 * Created by alvaro on 12/16/16.
 */
var base_path = process.cwd();
var FileSaver = require(base_path + '/app/modules/image/util/FileSaver.js');
var b = require('buffer');
var Base64LocalFileSaver = function (fileSystem) {
    this.file_path = '';
    this.fileSystem = fileSystem;
};
Base64LocalFileSaver.prototype = Object.create(FileSaver);

function reportError(err) {
    return new Promise(function (resolve, reject) {
        return reject(err);
    })
}
Base64LocalFileSaver.prototype.getFile = function () {
    return this.fileSystem.fileExists().then(this.tryToReadFile.bind(null, this.file_path, this.fileSystem, this.base64Promise)).catch(reportError);
};


Base64LocalFileSaver.prototype.tryToReadFile = function(url, fileSystem, base64Promise) {
    return fileSystem.readFile(url).then(base64Promise).catch(reportError);
};

Base64LocalFileSaver.prototype.base64Promise = function (data) {
    return new Promise(function (resolve, reject) {
        try {
            var base64 = encode64(data);
            resolve(base64);
        }catch (err){
            reject(err);
        }
    })
};


Base64LocalFileSaver.prototype.saveFile = function (url) {
    this.file_path = url;
    return this.getFile();
};

function encode64(data) {
    try {
        var base64 = new b.Buffer(data).toString('base64');
        return base64;
    }catch (err){
        throw  err;
    }
};



