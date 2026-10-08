// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'udTypographyBody2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 144525
         */
module.exports = function (module, exports, require) {
  var staticStringConstant = require("static-string-constant") /*id: 498839*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontRegularConfig = require("ud-font-regular-config") /*id: 347290*/;
  var u = composeClassNamesUtil.composeClassNames.compose({
    props: {
      fontSize: staticStringConstant.staticString,
      lineHeight: "u130fo1p"
    }
  }, udFontRegularConfig.getUdFontRegular);
  u.alias = "ud-typography-body-2";
  require.d(exports, {
    udTypographyBody2: function () {
      return u;
    }
  });
}