// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isValidDate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 571627
         */
module.exports = function (module, exports, require) {
  function a(e) {
    return e && Object.prototype.toString.call(e) === "[object Date]" && !isNaN(e);
  }
  require.d(exports, {
    isValidDate: function () {
      return a;
    }
  });
}