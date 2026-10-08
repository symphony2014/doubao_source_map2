// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getTimezoneOffsetMs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 142313
         */
module.exports = function (module, exports, require) {
  function a(e) {
    var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    t.setUTCFullYear(e.getFullYear());
    return e.getTime() - t.getTime();
  }
  require.d(exports, {
    getTimezoneOffsetMs: function () {
      return a;
    }
  });
}