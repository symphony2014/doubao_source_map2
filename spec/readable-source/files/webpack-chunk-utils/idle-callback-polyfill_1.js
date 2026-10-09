// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'cancelIdleCallback'
// - Renamed export 'K' to 'requestIdleCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 55404
         */
module.exports = function (module, exports, require) {
  function i(e, n) {
    if (window.requestIdleCallback) {
      return window.requestIdleCallback(e, n);
    }
    let r = Date.now();
    return setTimeout(() => {
      e({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - r))
      });
    });
  }
  function o(e) {
    if (window.cancelIdleCallback) {
      return window.cancelIdleCallback(e);
    } else {
      return clearTimeout(e);
    }
  }
  require.d(exports, {
    cancelIdleCallback: function () {
      return o;
    },
    requestIdleCallback: function () {
      return i;
    }
  });
}