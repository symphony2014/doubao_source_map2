// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'scheduleTask'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 622487
         */
module.exports = function (module, exports, require) {
  function r(e, t, n, r = 0, i = false) {
    var o = t.schedule(function () {
      n();
      if (i) {
        e.add(this.schedule(null, r));
      } else {
        this.unsubscribe();
      }
    }, r);
    e.add(o);
    if (!i) {
      return o;
    }
  }
  require.d(exports, {
    scheduleTask: function () {
      return r;
    }
  });
}