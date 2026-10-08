// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$h' to 'getColorByString'
// - Renamed export 'fq' to 'getColorIndex'
// - Renamed export '$T' to 'clearColorCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 737517
         */
module.exports = function (module, exports, require) {
  var colorThemeConstants = require("color-theme-constants") /*id: 561108*/;
  var urlParseUtils = require("url-parse-utils") /*id: 365040*/;
  let o = ["#336DF4", "#2DBEAB", "#6B7F06", "#ED6D0C", "#520052", "#8D55ED", "#047FB0", "#258832", "#865B03", "#F54A45", "#A630A6", "#151B70", "#1295CA", "#04430C", "#C25705", "#DF58A5", "#7A35F0", "#10A893", "#333D00", "#D99904", "#9D1562", "#2F0080", "#0442D2", "#067062", "#91AD00", "#642B02", "#CC398C", "#4811A6", "#C02A26", "#CF5ECF", "#002F9E", "#0F587A", "#35BD4B", "#741915", "#6A116A", "#5B65F5", "#32A645", "#959BEE", "#002270"];
  let s = new Map();
  let a = function (t) {
    let e = 0;
    let n = 0;
    let r = t.length;
    if (r > 0) {
      while (n < r) {
        e = (e << 5) - e + t.charCodeAt(n++) | 0;
      }
    }
    return e;
  };
  let u = function (t = false) {
    if (t) {
      return o;
    } else {
      return colorThemeConstants.colorPalette;
    }
  };
  let c = function (t, e = {}) {
    let n = s.get(t);
    if (n) {
      return n;
    }
    let {
      getToken: r = urlParseUtils.getToken,
      useNewPalette: o
    } = e;
    n = Math.abs(a(r() + t)) % u(o).length;
    s.set(t, n);
    return n;
  };
  let l = function (t, e = {}) {
    let n = c(t, e);
    return u(e.useNewPalette)[n];
  };
  let p = function () {
    s.clear();
  };
  require.d(exports, {
    getColorByString: function () {
      return l;
    },
    getColorIndex: function () {
      return c;
    },
    clearColorCache: function () {
      return p;
    }
  });
}