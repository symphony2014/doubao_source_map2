// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'udTypographyCaption'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 387189
         */
module.exports = function (module, exports, require) {
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var fontWeightAliasModule = require("font-weight-alias-module") /*id: 939210*/;
  var typographyBody2ClassComposer = require("typography-body-2-class-composer") /*id: 50795*/;
  var a = composeClassNamesUtil.composeClassNames.compose(typographyBody2ClassComposer.typographyBody2Class, fontWeightAliasModule.fontWeightAlias);
  a.alias = "ud-typography-caption-0";
  require.d(exports, {
    udTypographyCaption: function () {
      return a;
    }
  });
}