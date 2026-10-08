// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gv' to 'radioClasses'
// - Renamed export 'hl' to 'radioGroupClasses'
// - Renamed export 'j2' to 'radioConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 972818
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let r = {
    PREFIX: `${semiIdentifier.semiIdentifier}-radio`,
    INNER: `${semiIdentifier.semiIdentifier}-radio-inner`,
    TEXT: `${semiIdentifier.semiIdentifier}-radio-text`,
    INPUT: `${semiIdentifier.semiIdentifier}-radio-input`,
    CHECKED: `${semiIdentifier.semiIdentifier}-radio-checked`,
    DISABLED: `${semiIdentifier.semiIdentifier}-radio-disabled`,
    BUTTON: `${semiIdentifier.semiIdentifier}-radio-button`
  };
  let a = {
    PREFIX: `${semiIdentifier.semiIdentifier}-radioGroup`,
    INNER: `${semiIdentifier.semiIdentifier}-radioGroup-inner`,
    TEXT: `${semiIdentifier.semiIdentifier}-radioGroup-text`,
    INPUT: `${semiIdentifier.semiIdentifier}-radioGroup-input`,
    CHECKED: `${semiIdentifier.semiIdentifier}-radioGroup-checked`,
    DISABLED: `${semiIdentifier.semiIdentifier}-radioGroup-disabled`
  };
  let o = {
    DIRECTION_SET: ["horizontal", "vertical"],
    DEFAULT_DIRECTION: "horizontal",
    MODE: ["advanced", ""],
    TYPE_DEFAULT: "default",
    TYPE_BUTTON: "button",
    TYPE_CARD: "card",
    TYPE_PURECARD: "pureCard",
    BUTTON_SIZE: ["middle", "small", "large"]
  };
  require.d(exports, {
    radioClasses: function () {
      return r;
    },
    radioGroupClasses: function () {
      return a;
    },
    radioConstants: function () {
      return o;
    }
  });
}