// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'pickerPanelClassName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 492869
         */
module.exports = function (module, exports, require) {
  var udPickerPanelConstant_2 = require("ud-picker-panel-constant_2") /*id: 580197*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udPickerPanelStyles = require("ud-picker-panel-styles") /*id: 98805*/;
  var a = composeClassNamesUtil.composeClassNames.compose(udPickerPanelStyles.pickerPanelStyles, {
    props: {
      display: udPickerPanelConstant_2.pickerPanelId
    }
  });
  require.d(exports, {
    pickerPanelClassName: function () {
      return a;
    }
  });
}