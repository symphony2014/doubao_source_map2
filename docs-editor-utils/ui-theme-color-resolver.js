// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EU' to 'getThemeClassConfig'
// - Renamed export 'hC' to 'getLightThemeMap'
// - Renamed export 'ro' to 'resolveThemeClass'
// - Renamed export 't1' to 'getThemeToken'
// - Renamed export 'zO' to 'initThemeCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 410762
         */
module.exports = function (module, exports, require) {
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var themeDesignTokensProvider = require("theme-design-tokens-provider") /*id: 408160*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  var colorThemeDefaults = require("color-theme-defaults") /*id: 315758*/;
  var uiThemeColorDefinitions = require("ui-theme-color-definitions") /*id: 434278*/;
  var uiThemeConstants = require("ui-theme-constants") /*id: 541237*/;
  var themeColorUtils = require("theme-color-utils") /*id: 191810*/;
  let d = {};
  let f = {
    text: new Map(Object.keys(uiThemeColorDefinitions.textClassMap).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(uiThemeColorDefinitions.textClassMap[e], browserThemeManager.ThemeMode.LIGHT))])),
    background: new Map(Object.keys(uiThemeColorDefinitions.backgroundClassMap).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(uiThemeColorDefinitions.backgroundClassMap[e], browserThemeManager.ThemeMode.LIGHT))]))
  };
  let h = e => ({
    text: new Map(Object.keys(uiThemeColorDefinitions.textClassMap).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(uiThemeColorDefinitions.textClassMap[n], e))])),
    background: new Map(Object.keys(uiThemeColorDefinitions.backgroundClassMap).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(uiThemeColorDefinitions.backgroundClassMap[n], e))]))
  });
  let _ = (e, n) => {
    let r = f[e];
    return themeColorUtils.findThemeKey(r, n);
  };
  let p = (e, n) => {
    let r = _(e, n);
    let o = e === uiThemeConstants.basicTheme.Background ? uiThemeColorDefinitions.backgroundClassMap : uiThemeColorDefinitions.textClassMap;
    if (r) {
      return o[r];
    } else {
      return n;
    }
  };
  let g = (e, n) => {
    let r = _(e, n);
    return r && uiThemeColorDefinitions.themeClassConfig[e][r];
  };
  let E = e => {
    let n = d[e];
    if (!n) {
      n = h(e);
      d[e] = n;
    }
  };
  let m = function (e, n = browserThemeManager.getThemeMode()) {
    if (!d[n]) {
      E(n);
    }
    return d[n][e];
  };
  let b = e => f[e];
  require.d(exports, {
    getThemeClassConfig: function () {
      return g;
    },
    getLightThemeMap: function () {
      return b;
    },
    resolveThemeClass: function () {
      return p;
    },
    getThemeToken: function () {
      return m;
    },
    initThemeCache: function () {
      return E;
    }
  });
}