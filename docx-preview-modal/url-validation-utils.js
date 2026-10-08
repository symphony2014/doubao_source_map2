// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'parseUrlSafe'
// - Renamed export 'j' to 'isValidUrlOrPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 209486
         */
module.exports = function (module, exports, require) {
  let i = e => {
    try {
      return new URL(e);
    } catch (e) {
      return null;
    }
  };
  let r = e => !!i(e) || !!e && e.startsWith("/") && !e.startsWith("//");
  require.d(exports, {
    parseUrlSafe: function () {
      return i;
    },
    isValidUrlOrPath: function () {
      return r;
    }
  });
}