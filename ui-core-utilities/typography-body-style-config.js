// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'typographyBodyStyle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 607187
         */
module.exports = function (module, exports, require) {
  var moduleConstantIdentifier = require("module-constant-identifier") /*id: 658219*/;
  var constantHashValue = require("constant-hash-value") /*id: 96975*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontRegularConfig = require("ud-font-regular-config") /*id: 347290*/;
  var s = composeClassNamesUtil.composeClassNames.compose({
    props: {
      fontSize: moduleConstantIdentifier.identifierValue,
      lineHeight: constantHashValue.constantHash
    }
  }, udFontRegularConfig.getUdFontRegular);
  s.alias = "ud-typography-body-0";
  require.d(exports, {
    typographyBodyStyle: function () {
      return s;
    }
  });
}