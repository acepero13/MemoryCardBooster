/**
 * Created by alvaro on 12/17/16.
 */
var base_path = process.cwd();

require(base_path + '/app/modules/image/lib/FileSystem/FileSystem.js');
require(base_path + '/app/modules/image/util/Base64LocalFileEncoder.js');
var FileSystemWrapper = require(base_path + '/app/modules/image/lib/FileSystem/FileSystemWrapper.js');
describe('Test Suit Base64LocalFileEncoder', function () {
    var localFileSaver;
    var rootScope;
    beforeEach(inject(function ($rootScope) {
        rootScope = $rootScope;
    }));
    function createFileSaver(data) {
        var fileS = new getFakeGoodFileSystem( 'test', data);
        console.log(fileS.fileExists)
        localFileSaver = new Base64LocalFileEncoder(fileS);
    }

    it('should return encodedFile', function (done) {

        createFileSaver('test');
        localFileSaver.encodeFile(null).then(function (data) {
            expect(data).toBe('dGVzdA==');
        });
        setTimeout(function () {
            rootScope.$digest();
            done();
        }, 50)
    })

    it('should return errorEncoding file', function (done) {
        createFileSaver(new Error());
        localFileSaver.encodeFile('test').then(function (data) {

        }).catch(function (err) {
            console.log(err.message)
            expect(err.message).toBe('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
        });
        setTimeout(function () {
            rootScope.$digest();
            done();
        }, 50)
    })

});


describe('Test Suit Base64LocalFileEncoder Rjecting', function () {
    var localFileSaver;
    var rootScope;
    beforeEach(inject(function ($rootScope) {
        rootScope = $rootScope;
    }));
    beforeEach(function () {
        var fileS = new getFakeBadFileSystem( 'test');
        console.log(fileS.fileExists)
        localFileSaver = new Base64LocalFileEncoder(fileS);
    });

    it('should return Error ', function (done) {
        localFileSaver.encodeFile('test').then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.log(error)
            expect(error.message).toBe("error")
        });
        setTimeout(function () {
            rootScope.$digest();
            done();
        }, 50)
    })

});

function getFakeGoodFileSystem(url, data) {
    var FakeSystem = function (url) {
        this.url = url;
    };
    FakeSystem.prototype = Object.create(FileSystemWrapper);
    FakeSystem.prototype.fileExists = function () {
        return new Promise(function (resolve, reject) {
            return resolve(true);
        })
    };
    FakeSystem.prototype.readFile = function () {
        return new Promise(function (resolve, reject) {
            console.log(data);
            return resolve(data);
        })
    };

    return new FakeSystem(url);
}


function getFakeBadFileSystem(url) {
    var FakeSystem = function (url) {
        this.url = url;
    };
    FakeSystem.prototype = Object.create(FileSystemWrapper);
    FakeSystem.prototype.fileExists = function () {
        return new Promise(function (resolve, reject) {
            return reject(new Error("error"));
        })
    };
    FakeSystem.prototype.readFile = function () {
        return new Promise(function (resolve, reject) {
            return resolve(new Error("error"));
        })
    };

    return new FakeSystem(url);
}
