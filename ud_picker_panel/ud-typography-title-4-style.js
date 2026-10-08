// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'udTypographyTitle4Style'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 131651
         */
module.exports = function (module, exports, require) {
  var udPickerPanelIdConst = require("ud-picker-panel-id-const") /*id: 231767*/;
  var udPickerPanelId_8 = require("ud-picker-panel-id_8") /*id: 831703*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontMediumStyle = require("ud-font-medium-style") /*id: 757909*/;
  var c = composeClassNamesUtil.composeClassNames.compose(udFontMediumStyle.udFontMedium, {
    props: {
      fontSize: udPickerPanelIdConst.pickerPanelId,
      lineHeight: udPickerPanelId_8.pickerPanelId
    }
  });
  c.alias = "ud-typography-title-4";
  require.d(exports, {
    udTypographyTitle4Style: function () {
      return c;
    }
  });
}