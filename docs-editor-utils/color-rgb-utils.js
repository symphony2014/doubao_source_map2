// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'YQ' to 'compareColors'
// - Renamed export 'cp' to 'colorToRgb'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 194090
         */
module.exports = function (module, exports, require) {
  var colorUtils = require("color-utils") /*id: 845364*/;
  var i = colorUtils;
  function l(e, n) {
    let r = i(e);
    if (typeof n == "number") {
      r.setAlpha(n);
    }
    return r.toRgbString().replace(/\s+/g, "");
  }
  function c(e, n) {
    let r = i(e);
    let o = i(n);
    return r.toRgbString().replace(/\s+/g, "") === o.toRgbString().replace(/\s+/g, "");
  }
  require.d(exports, {
    compareColors: function () {
      return c;
    },
    colorToRgb: function () {
      return l;
    }
  });
}