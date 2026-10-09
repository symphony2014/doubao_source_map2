// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jU' to 'isBrowser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 235295
         */
module.exports = function (module, exports, require) {
  let r = typeof window != "undefined" && typeof navigator != "undefined" && typeof document != "undefined";
  require.d(exports, {
    isBrowser: function () {
      return r;
    }
  });
}