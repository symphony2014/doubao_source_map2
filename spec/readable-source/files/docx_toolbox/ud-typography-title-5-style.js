// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'udTypographyTitle5'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 299639
         */
module.exports = function (module, exports, require) {
  var moduleIdentifier = require("module-identifier") /*id: 615445*/;
  var buildHashConstant = require("build-hash-constant") /*id: 87822*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontRegularConfig_1 = require("ud-font-regular-config_1") /*id: 699529*/;
  var c = composeClassNamesUtil.composeClassNames.compose(udFontRegularConfig_1.getFontRegular, {
    props: {
      fontSize: moduleIdentifier.moduleIdentifier,
      lineHeight: buildHashConstant.buildHash
    }
  });
  c.alias = "ud-typography-title-5";
  require.d(exports, {
    udTypographyTitle5: function () {
      return c;
    }
  });
}