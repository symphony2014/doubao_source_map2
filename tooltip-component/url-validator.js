// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'isValidUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 714614
         */
module.exports = function (module, exports, require) {
  let i = e => {
    try {
      new URL(e);
      return true;
    } catch (e) {
      return false;
    }
  };
  require.d(exports, {
    isValidUrl: function () {
      return i;
    }
  });
}