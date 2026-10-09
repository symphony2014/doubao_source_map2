// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'autoBindMethod'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 969612
         */
module.exports = function (module, exports, require) {
  function n(t, e, r) {
    var n = r == null ? undefined : r.value;
    return {
      configurable: true,
      get: function () {
        if (this === t.prototype || this.hasOwnProperty(e) || typeof n != "function") {
          return n;
        }
        var r = n.bind(this);
        Object.defineProperty(this, e, {
          value: r,
          configurable: true,
          writable: true
        });
        return r;
      }
    };
  }
  require.d(exports, {
    autoBindMethod: function () {
      return n;
    }
  });
}