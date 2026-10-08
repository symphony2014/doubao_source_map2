// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KT' to 'placeholderConfig'
// - Renamed export 'UX' to 'inputPrefixConfig'
// - Renamed export 'j2' to 'inputConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 859366
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let r = {
    PREFIX: `${semiIdentifier.semiIdentifier}-input`
  };
  let o = {
    SIZE: ["small", "large", "default"],
    DEFAULT_SIZE: "default",
    STATUS: ["default", "error", "warning", "success"],
    CLEARBTN_CLICKED_EVENT_FLAG: "__fromClearBtn",
    MODE: ["password"]
  };
  let l = {};
  require.d(exports, {
    placeholderConfig: function () {
      return l;
    },
    inputPrefixConfig: function () {
      return r;
    },
    inputConstants: function () {
      return o;
    }
  });
}