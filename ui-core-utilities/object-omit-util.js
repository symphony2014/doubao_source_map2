// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'omitObjectKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 379788
         */
module.exports = function (module, exports, require) {
  function i(e, n) {
    var r = Object.assign({}, e);
    var i = 0;
    for (; i < n.length; i += 1) {
      var o = n[i];
      delete r[o];
    }
    return r;
  }
  require.d(exports, {
    omitObjectKeys: function () {
      return i;
    }
  });
}