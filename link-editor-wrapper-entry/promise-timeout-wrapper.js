// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'withTimeout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 612247
         */
module.exports = function (module, exports, require) {
  function l(e, r) {
    let {
      timeout: o,
      onResolve: l,
      onReject: n,
      onTimeout: a
    } = r;
    let i = false;
    let c = setTimeout(() => {
      i = true;
      a();
    }, o);
    return e.then(e => {
      clearTimeout(c);
      if (l != null) {
        l(e, i);
      }
      return e;
    }, e => {
      clearTimeout(c);
      if (n != null) {
        n(e, i);
      }
    });
  }
  require.d(exports, {
    withTimeout: function () {
      return l;
    }
  });
}