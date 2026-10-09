// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B1' to 'colorConstants'
// - Renamed export 'Dg' to 'backgroundClassMap'
// - Renamed export 'fw' to 'textClassMap'
// - Renamed export 'wv' to 'themeClassConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 434278
         */
module.exports = function (module, exports, require) {
  var uiThemeConstants = require("ui-theme-constants") /*id: 541237*/;
  let i = {
    COLOR_PINK_LIGHT_BACKGROUND: "COLOR_PINK_LIGHT_BACKGROUND",
    COLOR_ORANGE_LIGHT_BACKGROUND: "COLOR_ORANGE_LIGHT_BACKGROUND",
    COLOR_YELLOW_LIGHT_BACKGROUND: "COLOR_YELLOW_LIGHT_BACKGROUND",
    COLOR_GREEN_LIGHT_BACKGROUND: "COLOR_GREEN_LIGHT_BACKGROUND",
    COLOR_BLUE_LIGHT_BACKGROUND: "COLOR_BLUE_LIGHT_BACKGROUND",
    COLOR_PURPLE_LIGHT_BACKGROUND: "COLOR_PURPLE_LIGHT_BACKGROUND",
    COLOR_GRAY_LIGHT_BACKGROUND: "COLOR_GRAY_LIGHT_BACKGROUND",
    COLOR_GRAY_SLIGHT_BACKGROUND: "COLOR_GRAY_SLIGHT_BACKGROUND",
    COLOR_PINK_DARK_BACKGROUND: "COLOR_PINK_DARK_BACKGROUND",
    COLOR_ORANGE_DARK_BACKGROUND: "COLOR_ORANGE_DARK_BACKGROUND",
    COLOR_YELLOW_DARK_BACKGROUND: "COLOR_YELLOW_DARK_BACKGROUND",
    COLOR_GREEN_DARK_BACKGROUND: "COLOR_GREEN_DARK_BACKGROUND",
    COLOR_BLUE_DARK_BACKGROUND: "COLOR_BLUE_DARK_BACKGROUND",
    COLOR_PURPLE_DARK_BACKGROUND: "COLOR_PURPLE_DARK_BACKGROUND",
    COLOR_GRAY_DARK_BACKGROUND: "COLOR_GRAY_DARK_BACKGROUND",
    COLOR_DEFAULT_BACKGROUND: "COLOR_DEFAULT_BACKGROUND",
    COLOR_PINK_TEXT: "COLOR_PINK_TEXT",
    COLOR_ORANGE_TEXT: "COLOR_ORANGE_TEXT",
    COLOR_YELLOW_TEXT: "COLOR_YELLOW_TEXT",
    COLOR_GREEN_TEXT: "COLOR_GREEN_TEXT",
    COLOR_BLUE_TEXT: "COLOR_BLUE_TEXT",
    COLOR_PURPLE_TEXT: "COLOR_PURPLE_TEXT",
    COLOR_GRAY_TEXT: "COLOR_GRAY_TEXT",
    COLOR_DEFAULT_TEXT: "COLOR_DEFAULT_TEXT",
    COLOR_CLEAR: "COLOR_CLEAR"
  };
  let l = {
    [i.COLOR_DEFAULT_BACKGROUND]: "bg-float",
    [i.COLOR_GRAY_LIGHT_BACKGROUND]: "ccmtoken-doc-highlightcolor-neutral-light",
    [i.COLOR_PINK_LIGHT_BACKGROUND]: "ccmtoken-doc-highlightcolor-red-soft",
    [i.COLOR_ORANGE_LIGHT_BACKGROUND]: "ccmtoken-doc-highlightcolor-orange-soft",
    [i.COLOR_YELLOW_LIGHT_BACKGROUND]: "ccmtoken-doc-highlightcolor-sunflower-soft",
    [i.COLOR_GREEN_LIGHT_BACKGROUND]: "ccmtoken-doc-highlightcolor-green-soft",
    [i.COLOR_BLUE_LIGHT_BACKGROUND]: "ccmtoken-doc-highlightcolor-blue-soft",
    [i.COLOR_PURPLE_LIGHT_BACKGROUND]: "ccmtoken-doc-highlightcolor-purple-soft",
    [i.COLOR_GRAY_SLIGHT_BACKGROUND]: "ccmtoken-doc-highlightcolor-neutral-soft",
    [i.COLOR_GRAY_DARK_BACKGROUND]: "ccmtoken-doc-highlightcolor-neutral-solid",
    [i.COLOR_PINK_DARK_BACKGROUND]: "ccmtoken-doc-highlightcolor-red-solid",
    [i.COLOR_ORANGE_DARK_BACKGROUND]: "ccmtoken-doc-highlightcolor-orange-solid",
    [i.COLOR_YELLOW_DARK_BACKGROUND]: "ccmtoken-doc-highlightcolor-sunflower-solid",
    [i.COLOR_GREEN_DARK_BACKGROUND]: "ccmtoken-doc-highlightcolor-green-solid",
    [i.COLOR_BLUE_DARK_BACKGROUND]: "ccmtoken-doc-highlightcolor-blue-solid",
    [i.COLOR_PURPLE_DARK_BACKGROUND]: "ccmtoken-doc-highlightcolor-purple-solid"
  };
  let c = {
    [i.COLOR_DEFAULT_TEXT]: "text-title",
    [i.COLOR_GRAY_TEXT]: "ccmtoken-doc-textcolor-gray",
    [i.COLOR_PINK_TEXT]: "ccmtoken-doc-textcolor-red",
    [i.COLOR_ORANGE_TEXT]: "ccmtoken-doc-textcolor-orange",
    [i.COLOR_YELLOW_TEXT]: "ccmtoken-doc-textcolor-yellow",
    [i.COLOR_GREEN_TEXT]: "ccmtoken-doc-textcolor-green",
    [i.COLOR_BLUE_TEXT]: "ccmtoken-doc-textcolor-blue",
    [i.COLOR_PURPLE_TEXT]: "ccmtoken-doc-textcolor-purple"
  };
  let u = {
    [i.COLOR_DEFAULT_BACKGROUND]: "default",
    [i.COLOR_GRAY_LIGHT_BACKGROUND]: "gray-slight-bg",
    [i.COLOR_PINK_LIGHT_BACKGROUND]: "pink-light-bg",
    [i.COLOR_ORANGE_LIGHT_BACKGROUND]: "orange-light-bg",
    [i.COLOR_YELLOW_LIGHT_BACKGROUND]: "yellow-light-bg",
    [i.COLOR_GREEN_LIGHT_BACKGROUND]: "green-light-bg",
    [i.COLOR_BLUE_LIGHT_BACKGROUND]: "blue-light-bg",
    [i.COLOR_PURPLE_LIGHT_BACKGROUND]: "purple-light-bg",
    [i.COLOR_GRAY_SLIGHT_BACKGROUND]: "gray-light-bg",
    [i.COLOR_GRAY_DARK_BACKGROUND]: "gray-dark-bg",
    [i.COLOR_PINK_DARK_BACKGROUND]: "pink-dark-bg",
    [i.COLOR_ORANGE_DARK_BACKGROUND]: "orange-dark-bg",
    [i.COLOR_YELLOW_DARK_BACKGROUND]: "yellow-dark-bg",
    [i.COLOR_GREEN_DARK_BACKGROUND]: "green-dark-bg",
    [i.COLOR_BLUE_DARK_BACKGROUND]: "blue-dark-bg",
    [i.COLOR_PURPLE_DARK_BACKGROUND]: "purple-dark-bg"
  };
  let a = {
    [i.COLOR_DEFAULT_TEXT]: "default",
    [i.COLOR_PINK_TEXT]: "pink-text",
    [i.COLOR_ORANGE_TEXT]: "orange-text",
    [i.COLOR_YELLOW_TEXT]: "yellow-text",
    [i.COLOR_GREEN_TEXT]: "green-text",
    [i.COLOR_BLUE_TEXT]: "blue-text",
    [i.COLOR_PURPLE_TEXT]: "purple-text",
    [i.COLOR_GRAY_TEXT]: "gray-text"
  };
  let s = {
    [uiThemeConstants.basicTheme.Text]: a,
    [uiThemeConstants.basicTheme.Background]: u
  };
  require.d(exports, {
    colorConstants: function () {
      return i;
    },
    backgroundClassMap: function () {
      return l;
    },
    textClassMap: function () {
      return c;
    },
    themeClassConfig: function () {
      return s;
    }
  });
}