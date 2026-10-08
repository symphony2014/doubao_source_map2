// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'requireObjectOrThrowTypeError'
// - Resolved require(434324) to 'require-object-or-throw-type-error'
// - Renamed variable 'T' to 'iteratorCloseHelper'
// - Resolved require(934991) to 'iterator-close-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 995722
         */
module.exports = function (module, exports, require) {
  var requireObjectOrThrowTypeError = require("require-object-or-throw-type-error") /*id: 434324*/;
  var iteratorCloseHelper = require("iterator-close-helper") /*id: 934991*/;
  module.exports = function (t, e, Q, n) {
    try {
      if (n) {
        return e(requireObjectOrThrowTypeError(Q)[0], Q[1]);
      } else {
        return e(Q);
      }
    } catch (e) {
      iteratorCloseHelper(t, "throw", e);
    }
  };
}