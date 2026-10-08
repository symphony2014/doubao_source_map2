// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'symbolIterator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 939076
         */
module.exports = function (module, exports, require) {
  var r = typeof Symbol == "function" && Symbol.iterator ? Symbol.iterator : "@@iterator";
  require.d(exports, {
    symbolIterator: function () {
      return r;
    }
  });
}