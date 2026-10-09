// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'boxThemeCreator'
// - Resolved require(369642) to 'box-theme-creator'
// - Renamed variable 'i' to 'boxBreakpointUtil'
// - Resolved require(576098) to 'box-breakpoint-util'
// - Renamed variable 'o' to 'colorSchemeStyle'
// - Resolved require(491552) to 'color-scheme-style'
// - Updated imported property 'Z' to 'createBoxTheme' (module 369642)
// - Updated imported property 'Z' to 'createBreakpoints' (module 576098)
// - Updated imported property 'Z' to 'resolveColorScheme' (module 491552)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 130518
         */
module.exports = function (module, exports, require) {
  var boxThemeCreator = require("box-theme-creator") /*id: 369642*/;
  var boxBreakpointUtil = require("box-breakpoint-util") /*id: 576098*/;
  var colorSchemeStyle = require("color-scheme-style") /*id: 491552*/;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return boxThemeCreator.createBoxTheme;
    },
    private_createBreakpoints: function () {
      return boxBreakpointUtil.createBreakpoints;
    },
    unstable_applyStyles: function () {
      return colorSchemeStyle.resolveColorScheme;
    }
  });
}