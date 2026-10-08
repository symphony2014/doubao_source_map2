// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OG' to 'checkboxGroupNames'
// - Renamed export 'gX' to 'checkboxNames'
// - Renamed export 'j2' to 'checkboxGroupCfg'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 911415
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let o = {
    PREFIX: `${semiIdentifier.semiIdentifier}-checkbox`,
    INNER: `${semiIdentifier.semiIdentifier}-checkbox-inner`,
    TEXT: `${semiIdentifier.semiIdentifier}-checkbox-text`,
    INPUT: `${semiIdentifier.semiIdentifier}-checkbox-input`,
    CHECKED: `${semiIdentifier.semiIdentifier}-checkbox-checked`,
    DISABLED: `${semiIdentifier.semiIdentifier}-checkbox-disabled`,
    BUTTON: `${semiIdentifier.semiIdentifier}-checkbox-button`,
    WRAPPER: ""
  };
  let a = {
    PREFIX: `${semiIdentifier.semiIdentifier}-checkboxGroup`,
    INNER: `${semiIdentifier.semiIdentifier}-checkboxGroup-inner`,
    TEXT: `${semiIdentifier.semiIdentifier}-checkboxGroup-text`,
    INPUT: `${semiIdentifier.semiIdentifier}-checkboxGroup-input`,
    CHECKED: `${semiIdentifier.semiIdentifier}-checkboxGroup-checked`,
    DISABLED: `${semiIdentifier.semiIdentifier}-checkboxGroup-disabled`
  };
  let l = {
    DIRECTION_SET: ["horizontal", "vertical"],
    TYPE_DEFAULT: "default",
    TYPE_CARD: "card",
    TYPE_PURECARD: "pureCard",
    DEFAULT_DIRECTION: "vertical"
  };
  require.d(exports, {
    checkboxGroupNames: function () {
      return a;
    },
    checkboxNames: function () {
      return o;
    },
    checkboxGroupCfg: function () {
      return l;
    }
  });
}