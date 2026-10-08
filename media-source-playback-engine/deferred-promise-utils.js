// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'createDeferred'
// - Renamed export 'j' to 'getTimestamp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 373813
         */
module.exports = function (module, exports, require) {
  function r() {
    var e;
    var t;
    var n = new Promise(function (n, r) {
      e = n;
      t = r;
    });
    n.used = false;
    n.resolve = function () {
      n.used = true;
      return e.apply(undefined, arguments);
    };
    n.reject = function () {
      n.used = true;
      return t.apply(undefined, arguments);
    };
    return n;
  }
  function i() {
    try {
      return parseInt(performance.now(), 10);
    } catch (e) {
      return new Date().getTime();
    }
  }
  require.d(exports, {
    createDeferred: function () {
      return r;
    },
    getTimestamp: function () {
      return i;
    }
  });
}