// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'cancelIdleCallback'
// - Renamed export 'K' to 'requestIdleCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 847959
         */
module.exports = function (module, exports, require) {
  function o(e) {
    if (window.requestIdleCallback) {
      return window.requestIdleCallback(e);
    }
    var t = Date.now();
    return window.setTimeout(function () {
      e({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - t));
        }
      });
    });
  }
  function i(e) {
    if (window.cancelIdleCallback) {
      return window.cancelIdleCallback(e);
    } else {
      return clearTimeout(e);
    }
  }
  require.d(exports, {
    cancelIdleCallback: function () {
      return i;
    },
    requestIdleCallback: function () {
      return o;
    }
  });
}