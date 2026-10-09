// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'normalizeEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 64930
         */
module.exports = function (module, exports, require) {
  let n = e => e.type.includes("touch") ? e.changedTouches[0] : e;
  require.d(exports, {
    normalizeEvent: function () {
      return n;
    }
  });
}