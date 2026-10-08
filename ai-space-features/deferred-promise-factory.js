// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'createDeferredPromise'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19365.bed2e0e3.js
         * chunkId: 19365
         * moduleId: 783660
         */
module.exports = function (module, exports, require) {
  function r() {
    let e;
    let t;
    return {
      promise: new Promise((n, r) => {
        e = n;
        t = r;
      }),
      resolve: e,
      reject: t
    };
  }
  require.d(exports, {
    createDeferredPromise: function () {
      return r;
    }
  });
}