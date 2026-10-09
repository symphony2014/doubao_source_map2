// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'wrapRenderFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 31592
         */
module.exports = function (module, exports, require) {
  function r(t, e, n) {
    var r = n.value;
    n.value = function (t) {
      var e = t.children;
      if (t.attributes.lmkr) {
        return e;
      } else {
        return r.apply(this, [t]);
      }
    };
  }
  require.d(exports, {
    wrapRenderFunction: function () {
      return r;
    }
  });
}