// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'typographyConfig'
// - Renamed export 'j' to 'typographyConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 518279
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let r = {
    PREFIX: `${semiIdentifier.semiIdentifier}-typography`
  };
  let o = {
    WEIGHT: ["light", "regular", "medium", "semibold", "bold", "default"],
    TYPE: ["primary", "secondary", "danger", "warning", "success", "tertiary", "quaternary"],
    SIZE: ["normal", "small"],
    SPACING: ["normal", "extended"],
    HEADING: [1, 2, 3, 4, 5, 6],
    RULE: ["text", "numbers", "bytes-decimal", "bytes-binary", "percentages", "exponential"],
    TRUNCATE: ["ceil", "floor", "round"]
  };
  require.d(exports, {
    typographyConfig: function () {
      return r;
    },
    typographyConstants: function () {
      return o;
    }
  });
}