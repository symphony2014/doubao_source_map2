// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'pickerPanelStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 98805
         */
module.exports = function (module, exports, require) {
  var udPickerConstant = require("ud-picker-constant") /*id: 924924*/;
  var udPickerPanelId_7 = require("ud-picker-panel-id_7") /*id: 644638*/;
  var userPickerPanelConstant = require("user-picker-panel-constant") /*id: 187015*/;
  var udPickerPanel = require("ud-picker-panel") /*id: 234625*/;
  var udPickerPanelId_4 = require("ud-picker-panel-id_4") /*id: 447257*/;
  var udPickerPanelCssHash_1 = require("ud-picker-panel-css-hash_1") /*id: 194507*/;
  var udPickerPanelId_6 = require("ud-picker-panel-id_6") /*id: 633470*/;
  var constantStringValue_1 = require("constant-string-value_1") /*id: 918721*/;
  var udPickerPanelIdentifier_1 = require("ud-picker-panel-identifier_1") /*id: 639480*/;
  var d = {
    props: {
      boxSizing: udPickerConstant.pickerVersionId,
      marginTop: udPickerPanelId_7.pickerId,
      marginRight: userPickerPanelConstant.pickerPanelClass,
      marginBottom: udPickerPanel.pickerPanelId,
      marginLeft: udPickerPanelId_4.panelId,
      paddingTop: udPickerPanelCssHash_1.cssHash,
      paddingRight: udPickerPanelId_6.pickerPanelId,
      paddingBottom: constantStringValue_1.constantValue,
      paddingLeft: udPickerPanelIdentifier_1.panelIdentifier
    }
  };
  require.d(exports, {
    pickerPanelStyles: function () {
      return d;
    }
  });
}