// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'deferredPromise'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 397926
         */
module.exports = function (module, exports, require) {
  function o() {
    let e;
    let n;
    return {
      promise: new Promise((r, o) => {
        e = r;
        n = o;
      }),
      resolve: e,
      reject: n
    };
  }
  require.d(exports, {
    deferredPromise: function () {
      return o;
    }
  });
}