// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V7' to 'findThemeColor'
// - Renamed export 'YE' to 'getThemeClassMap'
// - Renamed export 'mK' to 'getThemeRgbMap'
// - Renamed export 'oL' to 'getThemeColorByKey'
// - Renamed export 'w2' to 'initThemeColors'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 113049
         */
module.exports = function (module, exports, require) {
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var themeDesignTokensProvider = require("theme-design-tokens-provider") /*id: 408160*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  var colorThemeDefaults = require("color-theme-defaults") /*id: 315758*/;
  var docCalloutColorThemes = require("doc-callout-color-themes") /*id: 309297*/;
  var themeColorUtils = require("theme-color-utils") /*id: 191810*/;
  let s = {};
  let d = {
    [docCalloutColorThemes.colorTypeKeys.TextColor]: new Map(Object.keys(docCalloutColorThemes.textColorClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.textColorClasses[e], browserThemeManager.ThemeMode.LIGHT))])),
    [docCalloutColorThemes.colorTypeKeys.BackgroundColor]: new Map([...new Map(Object.keys(docCalloutColorThemes.lightHighlightClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.lightHighlightClasses[e], browserThemeManager.ThemeMode.LIGHT))])), ...new Map(Object.keys(docCalloutColorThemes.darkBgClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.darkBgClasses[e], browserThemeManager.ThemeMode.LIGHT))]))]),
    [docCalloutColorThemes.colorTypeKeys.Border]: {
      light: new Map(Object.keys(docCalloutColorThemes.blockBgClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.blockBgClasses[e], browserThemeManager.ThemeMode.LIGHT))])),
      dark: new Map(Object.keys(docCalloutColorThemes.borderClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.borderClasses[e], browserThemeManager.ThemeMode.LIGHT))]))
    }
  };
  let f = {
    [docCalloutColorThemes.colorTypeKeys.TextColor]: new Map(Object.keys(docCalloutColorThemes.textColorClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : docCalloutColorThemes.textColorClasses[e]])),
    [docCalloutColorThemes.colorTypeKeys.BackgroundColor]: new Map([...new Map(Object.keys(docCalloutColorThemes.lightHighlightClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : docCalloutColorThemes.lightHighlightClasses[e]])), ...new Map(Object.keys(docCalloutColorThemes.darkBgClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : docCalloutColorThemes.darkBgClasses[e]]))]),
    [docCalloutColorThemes.colorTypeKeys.Border]: {
      light: new Map(Object.keys(docCalloutColorThemes.blockBgClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : docCalloutColorThemes.blockBgClasses[e]])),
      dark: new Map(Object.keys(docCalloutColorThemes.borderClasses).map(e => [e, colorThemeDefaults.colorThemeDefaults.includes(e) ? "" : docCalloutColorThemes.borderClasses[e]]))
    }
  };
  let h = e => ({
    text: new Map(Object.keys(docCalloutColorThemes.textColorClasses).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.textColorClasses[n], e))])),
    lightBackground: new Map(Object.keys(docCalloutColorThemes.lightHighlightClasses).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.lightHighlightClasses[n], e))])),
    darkBackground: new Map(Object.keys(docCalloutColorThemes.darkBgClasses).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.darkBgClasses[n], e))])),
    lightBorder: new Map(Object.keys(docCalloutColorThemes.blockBgClasses).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.blockBgClasses[n], e))])),
    darkBroder: new Map(Object.keys(docCalloutColorThemes.borderClasses).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.borderClasses[n], e))])),
    panelBorder: new Map(Object.keys(docCalloutColorThemes.bgFloatClasses).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.bgFloatClasses[n], e))])),
    panelBackground: new Map(Object.keys(docCalloutColorThemes.bgClassMappings).map(n => [n, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docCalloutColorThemes.bgClassMappings[n], e), docCalloutColorThemes.opacityValues[n])]))
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
    if (e === docCalloutColorThemes.colorTypeKeys.Border) {
      let e = d[docCalloutColorThemes.colorTypeKeys.Border];
      let r = f[docCalloutColorThemes.colorTypeKeys.Border];
      let o = themeColorUtils.findThemeKey(e.light, n);
      if (o) {
        return r.light.get(o) || n;
      } else {
        return (o = themeColorUtils.findThemeKey(e.dark, n)) && r.dark.get(o) || n;
      }
    }
    let r = g(e);
    let o = E(e);
    let i = themeColorUtils.findThemeKey(r, n);
    return i && o.get(i) || n;
  };
  require.d(exports, {
    findThemeColor: function () {
      return m;
    },
    getThemeClassMap: function () {
      return E;
    },
    getThemeRgbMap: function () {
      return g;
    },
    getThemeColorByKey: function () {
      return p;
    },
    initThemeColors: function () {
      return _;
    }
  });
}