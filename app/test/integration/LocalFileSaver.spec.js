/**
 * Created by alvaro on 12/16/16.
 */
var base_path = process.cwd();

require(base_path + '/app/modules/image/lib/FileSystem/FileSystem.js');
require(base_path + '/app/modules/image/util/Base64LocalFileSaver.js');
console.log(base_path + '/app/modules/image/lib/FileSystem/FileSystem.js')
const url = base_path + '/app/test/integration/test.jpg';
describe('Local File Saver Test', function () {
    var localFileSaver;
    var rootScope;
    beforeEach(inject(function ($rootScope) {
        rootScope = $rootScope;
    }));
    beforeEach(function () {
        console.log(Base64LocalFileSaver);
        var fileS = new FileSystem(url );
        localFileSaver = new Base64LocalFileSaver(fileS);
    });

    it('should find an existing File', function (done) {
        localFileSaver.saveFile(url).then(function (data) {
            expect(data).toBeDefined();
        });
        setTimeout(function () {
            //localFileSaver.saveFile(url);
            rootScope.$digest();
            done();
        }, 220)


    })
});
