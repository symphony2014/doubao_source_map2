// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledStringify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 677768
         */
module.exports = function (module, exports, require) {
  var i = "Expected a function";
  function n(t, e, r) {
    if (typeof t != "function") {
      throw TypeError(i);
    }
    return setTimeout(function () {
      t.apply(undefined, r);
    }, e);
  }
  var o = require("throttled-arg-string-util") /*id: 293873*/.throttledStringify(function (t, e) {
    return n(t, 1, e);
  });
  require.d(exports, {
    throttledStringify: function () {
      return o;
    }
  });
}