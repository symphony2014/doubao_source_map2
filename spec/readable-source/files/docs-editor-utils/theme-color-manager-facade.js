// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HD' to 'getThemeColor'
// - Renamed export 'hC' to 'getLightThemeMap'
// - Renamed export 'LA' to 'getTextColors'
// - Renamed export 'oL' to 'getThemeColorByKey'
// - Renamed export 'mK' to 'getThemeRgbMap'
// - Renamed export 'j5' to 'menuIconClassName'
// - Renamed export 'f3' to 'getBackgrounds'
// - Renamed export 'c_' to 'getColorOrDefault'
// - Renamed export 'YE' to 'getThemeClassMap'
// - Renamed export 't1' to 'getThemeToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 552375
         */
module.exports = function (module, exports, require) {
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var themeColorManager = require("theme-color-manager") /*id: 514931*/;
  var docCalloutThemeColors = require("doc-callout-theme-colors") /*id: 113049*/;
  var uiThemeColorResolver = require("ui-theme-color-resolver") /*id: 410762*/;
  var themeDesignTokensProvider = require("theme-design-tokens-provider") /*id: 408160*/;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  var docButtonBgColors = require("doc-button-bg-colors") /*id: 11473*/;
  var themeColorUtils = require("theme-color-utils") /*id: 191810*/;
  let h = false;
  let _ = new Map();
  let p = () => {
    if (!h) {
      Object.keys(docButtonBgColors.ColorClassMap).forEach(e => _.set(e, colorRgbUtils.colorToRgb(themeDesignTokensProvider.getTokenByMode(docButtonBgColors.ColorClassMap[e], browserThemeManager.ThemeMode.LIGHT))));
      h = true;
    }
    return _;
  };
  memoizeFunction.memoize(e => themeColorUtils.findThemeKey(p(), e) || docButtonBgColors.ButtonBgColors.LightNeutral);
  let g = function (e, n = "rgba(127,59,245,1)") {
    return p().get(e) || n;
  };
  let E = "menu_ud_icon";
  uiThemeColorResolver.initThemeCache(browserThemeManager.getThemeMode());
  docCalloutThemeColors.initThemeColors(browserThemeManager.getThemeMode());
  themeColorManager.initThemeCache(browserThemeManager.getThemeMode());
  browserThemeManager.registerThemeCallback(e => {
    let n = (e.mode && e.mode.toUpperCase()) === "DARK" ? browserThemeManager.ThemeMode.DARK : browserThemeManager.ThemeMode.LIGHT;
    uiThemeColorResolver.initThemeCache(n);
    docCalloutThemeColors.initThemeColors(n);
    themeColorManager.initThemeCache(n);
  });
  require.d(exports, {
    getThemeColor: function () {
      return themeColorManager.getThemeColor;
    },
    getLightThemeMap: function () {
      return uiThemeColorResolver.getLightThemeMap;
    },
    getTextColors: function () {
      return themeColorManager.getTextColors;
    },
    getThemeColorByKey: function () {
      return docCalloutThemeColors.getThemeColorByKey;
    },
    getThemeRgbMap: function () {
      return docCalloutThemeColors.getThemeRgbMap;
    },
    menuIconClassName: function () {
      return E;
    },
    getBackgrounds: function () {
      return themeColorManager.getBackgrounds;
    },
    getColorOrDefault: function () {
      return g;
    },
    getThemeClassMap: function () {
      return docCalloutThemeColors.getThemeClassMap;
    },
    getThemeToken: function () {
      return uiThemeColorResolver.getThemeToken;
    }
  });
}