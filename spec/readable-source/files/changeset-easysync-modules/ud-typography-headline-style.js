// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'udTypographyHeadline'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 109181
         */
module.exports = function (module, exports, require) {
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var fontWeightAliasModule = require("font-weight-alias-module") /*id: 939210*/;
  var udTypographyBody0Style = require("ud-typography-body-0-style") /*id: 307052*/;
  var s = composeClassNamesUtil.composeClassNames.compose(udTypographyBody0Style.udTypographyBody0, fontWeightAliasModule.fontWeightAlias);
  s.alias = "ud-typography-headline";
  require.d(exports, {
    udTypographyHeadline: function () {
      return s;
    }
  });
}