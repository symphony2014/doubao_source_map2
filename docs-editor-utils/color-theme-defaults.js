// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'colorThemeDefaults'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 315758
         */
module.exports = function (module, exports, require) {
  var colorThemeTokens = require("color-theme-tokens") /*id: 635565*/;
  var docCalloutColorThemes = require("doc-callout-color-themes") /*id: 309297*/;
  var uiThemeColorDefinitions = require("ui-theme-color-definitions") /*id: 434278*/;
  let c = [uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_TEXT, uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_BACKGROUND, docCalloutColorThemes.colorVariants.Default, docCalloutColorThemes.colorOptions.Default, docCalloutColorThemes.colorNames.Default, colorThemeTokens.colorConstants.COLOR_DEFAULT_TEXT, colorThemeTokens.colorConstants.COLOR_DEFAULT_BACKGROUND];
  require.d(exports, {
    colorThemeDefaults: function () {
      return c;
    }
  });
}