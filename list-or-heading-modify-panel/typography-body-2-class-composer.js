// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'typographyBody2Class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 50795
         */
module.exports = function (module, exports, require) {
  var isRegexpUtility = require("is-regexp-utility") /*id: 29627*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontRegularConfig_1 = require("ud-font-regular-config_1") /*id: 699529*/;
  var a = composeClassNamesUtil.composeClassNames.compose({
    props: {
      fontSize: isRegexpUtility.isRegExp,
      lineHeight: "u130fo1p"
    }
  }, udFontRegularConfig_1.getFontRegular);
  a.alias = "ud-typography-body-2";
  require.d(exports, {
    typographyBody2Class: function () {
      return a;
    }
  });
}