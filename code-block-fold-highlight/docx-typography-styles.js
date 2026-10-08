// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'captionStyleZoom'
// - Renamed export 'a' to 'captionStyleBase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 293391
         */
module.exports = function (module, exports, require) {
  var isRegexpUtility = require("is-regexp-utility") /*id: 29627*/;
  var docxToolboxConstant_4 = require("docx-toolbox-constant_4") /*id: 758281*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var fontWeightAliasModule = require("font-weight-alias-module") /*id: 939210*/;
  var c = composeClassNamesUtil.composeClassNames.compose({
    props: {
      fontSize: docxToolboxConstant_4.toolboxId,
      lineHeight: "u1gwc0l6"
    }
  }, fontWeightAliasModule.fontWeightAlias);
  c.alias = "ud-typography-caption-1";
  var u = composeClassNamesUtil.composeClassNames.compose({
    props: {
      fontSize: isRegexpUtility.isRegExp,
      lineHeight: "u1s7gvzz",
      zoom: "uoqx2ln",
      "-webkit-text-size-adjust": "u11hbqlq"
    }
  }, fontWeightAliasModule.fontWeightAlias);
  u.alias = "ud-typography-caption-1";
  require.d(exports, {
    captionStyleZoom: function () {
      return u;
    },
    captionStyleBase: function () {
      return c;
    }
  });
}