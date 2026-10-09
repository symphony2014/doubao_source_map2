// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'getCssRgba'
// - Renamed export 'xK' to 'findThemeKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 191810
         */
module.exports = function (module, exports, require) {
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  function u(e, n) {
    if (e) {
      if (isNumberUtil.isNumber(n)) {
        n = Math.max(0, Math.min(1, n));
        return `rgba(var(--${e}-raw), ${n})`;
      } else {
        return `var(--${e})`;
      }
    } else {
      return "";
    }
  }
  function a(e, n) {
    let r;
    if (n && e) {
      for (let [o, i] of e) {
        if (n && i && colorRgbUtils.compareColors(n, i)) {
          r = o;
          break;
        }
      }
      return r;
    }
  }
  memoizeFunction.memoize(e => function (n) {
    e((n.mode && n.mode.toUpperCase()) === "DARK" ? browserThemeManager.ThemeMode.DARK : browserThemeManager.ThemeMode.LIGHT);
  });
  require.d(exports, {
    getCssRgba: function () {
      return u;
    },
    findThemeKey: function () {
      return a;
    }
  });
}