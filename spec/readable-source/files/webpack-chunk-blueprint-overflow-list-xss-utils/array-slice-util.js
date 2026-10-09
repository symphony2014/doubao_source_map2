// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sliceArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 132796
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var n = 0;
    var r = Array(t);
    for (; n < t; n++) {
      r[n] = e[n];
    }
    return r;
  }
  require.d(exports, {
    sliceArray: function () {
      return r;
    }
  });
}