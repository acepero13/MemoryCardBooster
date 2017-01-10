/**
 * Created by alvaro on 25/12/16.
 */
var {dialog} = require('electron').remote;
var OpenDialog = function() {
    
};

OpenDialog.prototype = {
    openedFileName: function (err, fileName) {
        return new Promise(function (resolve, reject) {
            if(err == null){
                resolve(fileName);
            }else{
                reject(err);
            }
        })
    },

    showOpenDialog: function () {
        dialog.showOpenDialog(function (fileNames) {
            if(fileNames.length > 0) {
                var fileName = fileNames[0];
                return this.openedFileName(null, fileName);
            }else{
                return this.openedFileName(new Error('No file selected'), null);
            }
        });
    }
}
