// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HD' to 'getThemeColor'
// - Renamed export 'LA' to 'getTextColors'
// - Renamed export 'Le' to 'findThemeColor'
// - Renamed export 'YR' to 'initThemeCache'
// - Renamed export 'f3' to 'getBackgrounds'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 514931
         */
module.exports = function (module, exports, require) {
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var themeDesignTokensProvider = require("theme-design-tokens-provider") /*id: 408160*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  var colorThemeDefaults = require("color-theme-defaults") /*id: 315758*/;
  var colorThemeTokens = require("color-theme-tokens") /*id: 635565*/;
  var themeColorUtils = require("theme-color-utils") /*id: 191810*/;
  let s = {};
  let d = {
    text: new Map(Object.keys(colorThemeTokens.textColorClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(colorThemeTokens.textColorClasses[e], browserThemeManager.ThemeMode.LIGHT))])),
    background: new Map(Object.keys(colorThemeTokens.highlightClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(colorThemeTokens.highlightClasses[e], browserThemeManager.ThemeMode.LIGHT))]))
  };
  let f = {
    text: new Map(Object.keys(colorThemeTokens.textColorClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorThemeTokens.textColorClasses[e]])),
    background: new Map(Object.keys(colorThemeTokens.highlightClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorThemeTokens.highlightClasses[e]]))
  };
  let h = e => ({
    text: new Map(Object.keys(colorThemeTokens.textColorClasses).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(colorThemeTokens.textColorClasses[n], e))])),
    background: new Map(Object.keys(colorThemeTokens.highlightClasses).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(colorThemeTokens.highlightClasses[n], e))])),
    panelBackground: new Map(Object.keys(colorThemeTokens.backgroundClasses).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(colorThemeTokens.backgroundClasses[n], e), colorThemeTokens.backgroundOpacities[n])]))
  });
  let _ = e => {
    let n = s[e];
    if (!n) {
      n = h(e);
      s[e] = n;
    }
  };
  let p = function (e, n = browserThemeManager.getThemeMode()) {
    if (!s[n]) {
      _(n);
    }
    return s[n][e];
  };
  let g = e => d[e];
  let E = e => f[e];
  let m = (e, n) => {
    let r = themeColorUtils.findThemeKey(g(e), n);
    return r && E(e).get(r) || n;
  };
  require.d(exports, {
    getThemeColor: function () {
      return p;
    },
    getTextColors: function () {
      return g;
    },
    findThemeColor: function () {
      return m;
    },
    initThemeCache: function () {
      return _;
    },
    getBackgrounds: function () {
      return E;
    }
  });
}