/**
 * Created by alvaro on 12/17/16.
 */
var base_path = process.cwd();
var FileSystemWrapper = require(base_path + '/app/modules/image/lib/FileSystem/FileSystemWrapper.js');
var fs = require('fs');
var FileSystem = function (url) {
    this.url = url;
};
FileSystem.prototype = Object.create(FileSystemWrapper);
FileSystem.prototype.fileExists = function () {
    var url = this.url;
    return new Promise(function (resolve, reject) {
        checkFileExists(url, reject, resolve);});
};

function checkFileExists(url, reject, resolve) {
    fs.stat(url, function (err, data) {
        return (err) ? reject(err) : resolve(data);
    });var FileSystemWrapper = require(base_path + '/app/modules/image/lib/FileSystem/FileSystemWrapper.js');
}

FileSystem.prototype.readFile = function (file){
    return new Promise(function (resolve, reject) {
        fs.readFile(file, function (err, file_data) {
            return (err) ? reject(err): resolve(file_data);
        });
    })
};
