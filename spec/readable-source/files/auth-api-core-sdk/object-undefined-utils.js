// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'filterUndefined'
// - Renamed export 'v' to 'assignDefined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 250122
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    if (e && t) {
      Object.entries(t).forEach(t => {
        let [r, n] = t;
        if (n !== undefined) {
          e[r] = n;
        }
      });
    }
  }
  function i(e) {
    return Object.fromEntries(Object.entries(e).filter(e => {
      let [t, r] = e;
      return r !== undefined;
    }));
  }
  require.d(exports, {
    filterUndefined: function () {
      return i;
    },
    assignDefined: function () {
      return n;
    }
  });
}