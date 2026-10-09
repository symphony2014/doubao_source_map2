// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'typographyHeadlineClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 932304
         */
module.exports = function (module, exports, require) {
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontMediumStyle = require("ud-font-medium-style") /*id: 757909*/;
  var typographyBodyStyleConfig = require("typography-body-style-config") /*id: 607187*/;
  var l = composeClassNamesUtil.composeClassNames.compose(typographyBodyStyleConfig.typographyBodyStyle, udFontMediumStyle.udFontMedium);
  l.alias = "ud-typography-headline";
  require.d(exports, {
    typographyHeadlineClass: function () {
      return l;
    }
  });
}