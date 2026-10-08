// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'udTypographyCaption'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 579446
         */
module.exports = function (module, exports, require) {
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontMediumStyle = require("ud-font-medium-style") /*id: 757909*/;
  var udTypographyBody2 = require("ud-typography-body-2") /*id: 144525*/;
  var u = composeClassNamesUtil.composeClassNames.compose(udTypographyBody2.udTypographyBody2, udFontMediumStyle.udFontMedium);
  u.alias = "ud-typography-caption-0";
  require.d(exports, {
    udTypographyCaption: function () {
      return u;
    }
  });
}