// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'udTypographyTitle5'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 600803
         */
module.exports = function (module, exports, require) {
  var udPickerPanelIdConst = require("ud-picker-panel-id-const") /*id: 231767*/;
  var udPickerPanelId_8 = require("ud-picker-panel-id_8") /*id: 831703*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontRegularConfig = require("ud-font-regular-config") /*id: 347290*/;
  var a = composeClassNamesUtil.composeClassNames.compose(udFontRegularConfig.getUdFontRegular, {
    props: {
      fontSize: udPickerPanelIdConst.pickerPanelId,
      lineHeight: udPickerPanelId_8.pickerPanelId
    }
  });
  a.alias = "ud-typography-title-5";
  require.d(exports, {
    udTypographyTitle5: function () {
      return a;
    }
  });
}