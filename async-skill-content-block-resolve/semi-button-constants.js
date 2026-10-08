// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UX' to 'buttonClassPrefix'
// - Renamed export 'j2' to 'buttonConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 666341
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let r = {
    PREFIX: `${semiIdentifier.semiIdentifier}-button`
  };
  let s = {
    sizes: ["default", "small", "large"],
    iconPositions: ["left", "right"],
    htmlTypes: ["button", "reset", "submit"],
    btnTypes: ["primary", "secondary", "tertiary", "warning", "danger"],
    themes: ["solid", "borderless", "light"],
    DEFAULT_ICON_SIZE: "default",
    DEFAULT_ICON_POSITION: "left"
  };
  require.d(exports, {
    buttonClassPrefix: function () {
      return r;
    },
    buttonConfig: function () {
      return s;
    }
  });
}