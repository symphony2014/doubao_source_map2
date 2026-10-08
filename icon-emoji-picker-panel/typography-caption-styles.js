// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'captionStyleCompat'
// - Renamed export 'a' to 'captionStyle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 332748
         */
module.exports = function (module, exports, require) {
  var staticStringConstant = require("static-string-constant") /*id: 498839*/;
  var constantStringValue = require("constant-string-value") /*id: 752246*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udFontMediumStyle = require("ud-font-medium-style") /*id: 757909*/;
  var a = composeClassNamesUtil.composeClassNames.compose({
    props: {
      fontSize: constantStringValue.constantValue,
      lineHeight: "u1gwc0l6"
    }
  }, udFontMediumStyle.udFontMedium);
  a.alias = "ud-typography-caption-1";
  var c = composeClassNamesUtil.composeClassNames.compose({
    props: {
      fontSize: staticStringConstant.staticString,
      lineHeight: "u1s7gvzz",
      zoom: "uoqx2ln",
      "-webkit-text-size-adjust": "u11hbqlq"
    }
  }, udFontMediumStyle.udFontMedium);
  c.alias = "ud-typography-caption-1";
  require.d(exports, {
    captionStyleCompat: function () {
      return c;
    },
    captionStyle: function () {
      return a;
    }
  });
}