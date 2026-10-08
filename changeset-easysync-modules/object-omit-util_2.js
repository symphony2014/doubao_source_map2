// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'omitProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 644631
         */
module.exports = function (module, exports, require) {
  function r(t, e) {
    var n = Object.assign({}, t);
    var r = 0;
    for (; r < e.length; r += 1) {
      var i = e[r];
      delete n[i];
    }
    return n;
  }
  require.d(exports, {
    omitProps: function () {
      return r;
    }
  });
}