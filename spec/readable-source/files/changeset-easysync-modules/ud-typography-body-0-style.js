// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'udTypographyBody0'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 307052
         */
module.exports = function (module, exports, require) {
  var moduleVersionIdentifier_1 = require("module-version-identifier_1") /*id: 996480*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontRegularConfig_1 = require("ud-font-regular-config_1") /*id: 699529*/;
  var s = composeClassNamesUtil.composeClassNames.compose({
    props: {
      fontSize: moduleVersionIdentifier_1.moduleVersion,
      lineHeight: "u5k1dk9"
    }
  }, udFontRegularConfig_1.getFontRegular);
  s.alias = "ud-typography-body-0";
  require.d(exports, {
    udTypographyBody0: function () {
      return s;
    }
  });
}