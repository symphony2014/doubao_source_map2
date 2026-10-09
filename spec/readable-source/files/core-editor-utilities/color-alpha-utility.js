// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'If' to 'getColorWithAlpha'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 265732
         */
module.exports = function (module, exports, require) {
  var colorUtils = require("color-utils") /*id: 845364*/;
  var o = colorUtils;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var colorThemeConstants = require("color-theme-constants") /*id: 561108*/;
  let c = memoizeFunction.memoize(function (e, t = 0.3) {
    return o(e).setAlpha(t).toRgbString();
  }, (e, t = 0.3) => `${e}-${t}`);
  [...colorThemeConstants.colorPalette];
  require.d(exports, {
    getColorWithAlpha: function () {
      return c;
    }
  });
}