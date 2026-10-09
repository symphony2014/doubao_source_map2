// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'emptyObservable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 724888
         */
module.exports = function (module, exports, require) {
  var n = new (require("observable-core-class") /*id: 392610*/.Observable)(function (e) {
    return e.complete();
  });
  require.d(exports, {
    emptyObservable: function () {
      return n;
    }
  });
}