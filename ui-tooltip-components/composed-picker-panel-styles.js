// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'pickerPanelStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 288721
         */
module.exports = function (module, exports, require) {
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udPickerPanelStyles = require("ud-picker-panel-styles") /*id: 98805*/;
  var i = composeClassNamesUtil.composeClassNames.compose({
    props: {
      display: "us0yppa"
    }
  }, udPickerPanelStyles.pickerPanelStyles);
  require.d(exports, {
    pickerPanelStyles: function () {
      return i;
    }
  });
}