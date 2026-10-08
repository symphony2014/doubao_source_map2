// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'createSafeCall'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 741051
         */
module.exports = function (module, exports, require) {
  function o(e) {
    return function () {
      var n = arguments.length;
      var r = Array(n);
      var o = 0;
      for (; o < n; o++) {
        r[o] = arguments[o];
      }
      try {
        return e(...r);
      } catch (e) {}
    };
  }
  require.d(exports, {
    createSafeCall: function () {
      return o;
    }
  });
}