// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'appendUrlParams'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 163706
         */
module.exports = function (module, exports, require) {
  function n(e, t = {}) {
    let r = new URL(e);
    Object.entries(t).map(e => {
      let [t, n] = e;
      return r.searchParams.append(t, n);
    });
    return r.href;
  }
  require.d(exports, {
    appendUrlParams: function () {
      return n;
    }
  });
}