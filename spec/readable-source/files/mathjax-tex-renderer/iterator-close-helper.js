// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'T' to 'requireObjectOrThrowTypeError'
// - Resolved require(434324) to 'require-object-or-throw-type-error'
// - Renamed variable 'n' to 'safeTypeGuardPropertyAccessor'
// - Resolved require(155472) to 'safe-type-guard-property-accessor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 934991
         */
module.exports = function (module, exports, require) {
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var requireObjectOrThrowTypeError = require("require-object-or-throw-type-error") /*id: 434324*/;
  var safeTypeGuardPropertyAccessor = require("safe-type-guard-property-accessor") /*id: 155472*/;
  module.exports = function (t, e, Q) {
    var o;
    var i;
    requireObjectOrThrowTypeError(t);
    try {
      if (!(o = safeTypeGuardPropertyAccessor(t, "return"))) {
        if (e === "throw") {
          throw Q;
        }
        return Q;
      }
      o = functionCallBindHelper(o, t);
    } catch (t) {
      i = true;
      o = t;
    }
    if (e === "throw") {
      throw Q;
    }
    if (i) {
      throw o;
    }
    requireObjectOrThrowTypeError(o);
    return Q;
  };
}