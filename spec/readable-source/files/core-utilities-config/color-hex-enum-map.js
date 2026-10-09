// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'dec2HexMap'
// - Renamed export 'w' to 'colorFormats'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 486822
         */
module.exports = function (module, exports, require) {
  var colorConversionUtils = require("color-conversion-utils") /*id: 965962*/;
  let a = {};
  for (let t = 0; t <= 255; t++) {
    a[t] = colorConversionUtils.colorUtils.unit.dec2hex(t);
  }
  let o = {
    ALL: 0,
    RGB: 1,
    HSL: 2
  };
  require.d(exports, {
    dec2HexMap: function () {
      return a;
    },
    colorFormats: function () {
      return o;
    }
  });
}