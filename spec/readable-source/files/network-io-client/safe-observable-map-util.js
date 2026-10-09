// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createSafeMapOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 292803
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  var s = Array.isArray;
  function o(e, t) {
    if (s(t)) {
      return e.apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(t)));
    } else {
      return e(t);
    }
  }
  function a(e) {
    return observableSafeMapOperator.createSafeMapOperator(function (t) {
      return o(e, t);
    });
  }
  require.d(exports, {
    createSafeMapOperator: function () {
      return a;
    }
  });
}