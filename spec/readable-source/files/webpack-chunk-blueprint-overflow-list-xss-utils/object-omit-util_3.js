// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'omitKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 435902
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    if (e == null) {
      return {};
    }
    var n;
    var r;
    var i = {};
    var o = Object.keys(e);
    for (r = 0; r < o.length; r++) {
      n = o[r];
      if (!(t.indexOf(n) >= 0)) {
        i[n] = e[n];
      }
    }
    return i;
  }
  require.d(exports, {
    omitKeys: function () {
      return r;
    }
  });
}