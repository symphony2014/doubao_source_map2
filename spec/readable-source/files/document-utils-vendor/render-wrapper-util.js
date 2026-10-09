// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'wrapRenderFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 212000
         */
module.exports = function (module, exports, require) {
  function n(e, t, r) {
    var n = r.value;
    r.value = function (e) {
      var t = e.children;
      if (e.attributes.lmkr) {
        return t;
      } else {
        return n.apply(this, [e]);
      }
    };
  }
  require.d(exports, {
    wrapRenderFunction: function () {
      return n;
    }
  });
}