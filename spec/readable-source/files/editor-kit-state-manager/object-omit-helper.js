// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'omit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 598375
         */
module.exports = function (module, exports, require) {
  function r(t, e) {
    if (t === null) {
      return {};
    } else if (Array.isArray(e) && e.length) {
      return Object.keys(t).filter(function (t) {
        return !e.includes(t);
      }).reduce(function (e, n) {
        e[n] = t[n];
        return e;
      }, {});
    } else {
      return t;
    }
  }
  require.d(exports, {
    omit: function () {
      return r;
    }
  });
}