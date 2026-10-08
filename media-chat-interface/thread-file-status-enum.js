// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'ThreadFileStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-file.6fc25773.js
         * chunkId: 3449
         * moduleId: 669935
         */
module.exports = function (module, exports, require) {
  var r = {
    Generating: "generating",
    Finished: "finished",
    Cancel: "cancel",
    Error: "error",
    Default: "default"
  };
  require.d(exports, {
    ThreadFileStatus: function () {
      return r;
    }
  });
}