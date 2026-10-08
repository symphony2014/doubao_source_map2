// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Mj' to 'composeHandlers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 999993
         */
module.exports = function (module, exports, require) {
  function r(e, t, {
    checkForDefaultPrevented: n = true
  } = {}) {
    return function (r) {
      if (e != null) {
        e(r);
      }
      if (n === false || !r.defaultPrevented) {
        if (t == null) {
          return undefined;
        } else {
          return t(r);
        }
      }
    };
  }
  if (typeof window != "undefined" && window.document) {
    window.document.createElement;
  }
  require.d(exports, {
    composeHandlers: function () {
      return r;
    }
  });
}