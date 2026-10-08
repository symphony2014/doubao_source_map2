// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UX' to 'formPrefixConfig'
// - Renamed export 'j2' to 'formLayoutOptions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 740990
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let o = {
    PREFIX: `${semiIdentifier.semiIdentifier}-form`
  };
  let i = {
    LAYOUT: ["horizontal", "vertical"],
    LABEL_POS: ["left", "top", "inset"],
    LABEL_ALIGN: ["left", "right"],
    EXTRA_POS: ["middle", "bottom"],
    DEFAULT_TRIGGER: "change"
  };
  require.d(exports, {
    formPrefixConfig: function () {
      return o;
    },
    formLayoutOptions: function () {
      return i;
    }
  });
}