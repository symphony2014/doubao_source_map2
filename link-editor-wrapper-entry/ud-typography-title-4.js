// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'udTypographyTitle4'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18653.6c0138b3.js
         * chunkId: 18653
         * moduleId: 312297
         */
module.exports = function (module, exports, require) {
  var moduleIdentifier = require("module-identifier") /*id: 615445*/;
  var buildHashConstant = require("build-hash-constant") /*id: 87822*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var fontWeightAliasModule = require("font-weight-alias-module") /*id: 939210*/;
  var c = composeClassNamesUtil.composeClassNames.compose(fontWeightAliasModule.fontWeightAlias, {
    props: {
      fontSize: moduleIdentifier.moduleIdentifier,
      lineHeight: buildHashConstant.buildHash
    }
  });
  c.alias = "ud-typography-title-4";
  require.d(exports, {
    udTypographyTitle4: function () {
      return c;
    }
  });
}