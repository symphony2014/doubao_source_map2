// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'symbolObservable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 468947
         */
module.exports = function (module, exports, require) {
  var r = typeof Symbol == "function" && Symbol.observable || "@@observable";
  require.d(exports, {
    symbolObservable: function () {
      return r;
    }
  });
}