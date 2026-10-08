// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$B' to 'defaultBackgrounds'
// - Renamed export 'JH' to 'backgroundOpacities'
// - Renamed export 'Xl' to 'textColorClasses'
// - Renamed export 'ld' to 'colorConstants'
// - Renamed export 'z0' to 'backgroundClasses'
// - Renamed export 'z9' to 'highlightClasses'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 635565
         */
module.exports = function (module, exports, require) {
  let o = {
    COLOR_DEFAULT_BACKGROUND: "COLOR_DEFAULT_BACKGROUND",
    LIGHT_GRAY_BACKGROUND: "LIGHT_GRAY_BACKGROUND",
    LIGHT_RED_BACKGROUND: "LIGHT_RED_BACKGROUND",
    LIGHT_ORANGE_BACKGROUND: "LIGHT_ORANGE_BACKGROUND",
    LIGHT_YELLOW_BACKGROUND: "LIGHT_YELLOW_BACKGROUND",
    LIGHT_GREEN_BACKGROUND: "LIGHT_GREEN_BACKGROUND",
    LIGHT_BLUE_BACKGROUND: "LIGHT_BLUE_BACKGROUND",
    LIGHT_PURPLE_BACKGROUND: "LIGHT_PURPLE_BACKGROUND",
    DARK_NEUTRAL_BACKGROUND: "DARK_NEUTRAL_BACKGROUND",
    DARK_GRAY_BACKGROUND: "DARK_GRAY_BACKGROUND",
    DARK_RED_BACKGROUND: "DARK_RED_BACKGROUND",
    DARK_ORANGE_BACKGROUND: "DARK_ORANGE_BACKGROUND",
    DARK_YELLOW_BACKGROUND: "DARK_YELLOW_BACKGROUND",
    DARK_GREEN_BACKGROUND: "DARK_GREEN_BACKGROUND",
    DARK_BLUE_BACKGROUND: "DARK_BLUE_BACKGROUND",
    DARK_PURPLE_BACKGROUND: "DARK_PURPLE_BACKGROUND",
    COLOR_PINK_TEXT: "COLOR_PINK_TEXT",
    COLOR_ORANGE_TEXT: "COLOR_ORANGE_TEXT",
    COLOR_YELLOW_TEXT: "COLOR_YELLOW_TEXT",
    COLOR_GREEN_TEXT: "COLOR_GREEN_TEXT",
    COLOR_BLUE_TEXT: "COLOR_BLUE_TEXT",
    COLOR_PURPLE_TEXT: "COLOR_PURPLE_TEXT",
    COLOR_GRAY_TEXT: "COLOR_GRAY_TEXT",
    COLOR_DEFAULT_TEXT: "COLOR_DEFAULT_TEXT"
  };
  let i = {
    [o.COLOR_DEFAULT_TEXT]: "text-title",
    [o.COLOR_GRAY_TEXT]: "ccmtoken-doc-textcolor-gray",
    [o.COLOR_PINK_TEXT]: "ccmtoken-doc-textcolor-red",
    [o.COLOR_ORANGE_TEXT]: "ccmtoken-doc-textcolor-orange",
    [o.COLOR_YELLOW_TEXT]: "ccmtoken-doc-textcolor-yellow",
    [o.COLOR_GREEN_TEXT]: "ccmtoken-doc-textcolor-green",
    [o.COLOR_BLUE_TEXT]: "ccmtoken-doc-textcolor-blue",
    [o.COLOR_PURPLE_TEXT]: "ccmtoken-doc-textcolor-purple"
  };
  let l = {
    [o.COLOR_DEFAULT_BACKGROUND]: "bg-float",
    [o.LIGHT_GRAY_BACKGROUND]: "ccmtoken-doc-blockbackground-netural-solid",
    [o.LIGHT_RED_BACKGROUND]: "ccmtoken-doc-blockbackground-red",
    [o.LIGHT_ORANGE_BACKGROUND]: "ccmtoken-doc-blockbackground-orange",
    [o.LIGHT_YELLOW_BACKGROUND]: "ccmtoken-doc-blockbackground-yellow",
    [o.LIGHT_GREEN_BACKGROUND]: "ccmtoken-doc-blockbackground-green",
    [o.LIGHT_BLUE_BACKGROUND]: "ccmtoken-doc-blockbackground-blue",
    [o.LIGHT_PURPLE_BACKGROUND]: "ccmtoken-doc-blockbackground-purple",
    [o.DARK_NEUTRAL_BACKGROUND]: "ccmtoken-doc-blockbackground-gray",
    [o.DARK_GRAY_BACKGROUND]: "ccmtoken-doc-blockbackground-gray-solid",
    [o.DARK_RED_BACKGROUND]: "ccmtoken-doc-blockbackground-red-solid",
    [o.DARK_ORANGE_BACKGROUND]: "ccmtoken-doc-blockbackground-orange-solid",
    [o.DARK_YELLOW_BACKGROUND]: "ccmtoken-doc-blockbackground-yellow-solid",
    [o.DARK_GREEN_BACKGROUND]: "ccmtoken-doc-blockbackground-green-solid",
    [o.DARK_BLUE_BACKGROUND]: "ccmtoken-doc-blockbackground-blue-solid",
    [o.DARK_PURPLE_BACKGROUND]: "ccmtoken-doc-blockbackground-purple-solid"
  };
  let c = {
    [o.LIGHT_GRAY_BACKGROUND]: 0.6,
    [o.DARK_NEUTRAL_BACKGROUND]: 0.7,
    [o.DARK_GRAY_BACKGROUND]: 0.5
  };
  let u = {
    [o.COLOR_DEFAULT_BACKGROUND]: "",
    [o.LIGHT_GRAY_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-neutral-light",
    [o.LIGHT_RED_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-red-soft",
    [o.LIGHT_ORANGE_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-orange-soft",
    [o.LIGHT_YELLOW_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-sunflower-soft",
    [o.LIGHT_GREEN_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-green-soft",
    [o.LIGHT_BLUE_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-blue-soft",
    [o.LIGHT_PURPLE_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-purple-soft",
    [o.DARK_NEUTRAL_BACKGROUND]: "ccmtoken-doc-blockbackground-netural",
    [o.DARK_GRAY_BACKGROUND]: "ccmtoken-doc-blockbackground-netural-solid",
    [o.DARK_RED_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-red-solid",
    [o.DARK_ORANGE_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-orange-solid",
    [o.DARK_YELLOW_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-sunflower-solid",
    [o.DARK_GREEN_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-green-solid",
    [o.DARK_BLUE_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-blue-solid",
    [o.DARK_PURPLE_BACKGROUND]: "ccmtoken-doc-highlightcolor-bg-purple-solid"
  };
  let a = ["rgb(245,246,247)", "rgb(248, 249, 250)"];
  require.d(exports, {
    defaultBackgrounds: function () {
      return a;
    },
    backgroundOpacities: function () {
      return c;
    },
    textColorClasses: function () {
      return i;
    },
    colorConstants: function () {
      return o;
    },
    backgroundClasses: function () {
      return l;
    },
    highlightClasses: function () {
      return u;
    }
  });
}