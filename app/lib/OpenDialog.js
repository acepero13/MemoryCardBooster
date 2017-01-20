/**
 * Created by alvaro on 25/12/16.
 */
var {dialog} = require('electron').remote;
var OpenDialog = function() {
    
};

OpenDialog.prototype = {

    showOpenDialog: function (callback) {
        dialog.showOpenDialog(function (fileNames) {
            if(fileNames && fileNames.length > 0) {
                var fileName = fileNames[0];
                return callback(fileName);
            }else{
                return new Error('No file selected');
            }
        });
    }
};
