/**
 * Created by alvaro on 31/12/16.
 */
imageModule.factory('ElectronOpenFileDialogFactory', function () {
    var OpenFileDialg = {
        getOpenFileDialog: function () {
            var openDialog = new OpenDialog();
            return openDialog;
        }
    }
    return OpenFileDialg;

});