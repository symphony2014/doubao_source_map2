// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'isBrowser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68975.2fb3af7c.js
         * chunkId: 68975
         * moduleId: 512008
         */
module.exports = function (module, exports, require) {
  let n = typeof document != "undefined";
  require.d(exports, {
    isBrowser: function () {
      return n;
    }
  });
}