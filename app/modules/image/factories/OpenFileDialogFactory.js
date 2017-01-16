/**
 * Created by alvaro on 31/12/16.
 */
require(base_dir + '/app/lib/OpenDialog.js');
imageModule.factory('ElectronOpenFileDialogFactory', function () {
    var OpenFileDialog = {
        getOpenFileDialog: function () {
            var openDialog = new OpenDialog();
            return openDialog;
        }
    };
    return OpenFileDialog;

});