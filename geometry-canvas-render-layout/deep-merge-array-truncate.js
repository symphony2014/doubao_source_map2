// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mergeDeepTruncate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 351514
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var throttledDeepCloneUtil_2 = require("throttled-deep-clone-util_2") /*id: 739988*/;
  function o(t, e) {
    if (arrayIsArrayUtil.isArray(t) && arrayIsArrayUtil.isArray(e) && t.length > e.length) {
      return throttledDeepCloneUtil_2.throttledCloneDeep(t.slice(0, e.length), e, o);
    }
  }
  function a(t) {
    var e = [];
    var n = 1;
    for (; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
    return e.reduce(function (t, e) {
      return throttledDeepCloneUtil_2.throttledCloneDeep(t, e, o);
    }, t);
  }
  require.d(exports, {
    mergeDeepTruncate: function () {
      return a;
    }
  });
}