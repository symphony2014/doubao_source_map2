// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'T' to 'functionTypeGuardAssertion'
// - Resolved require(750329) to 'function-type-guard-assertion'
// - Renamed variable 'n' to 'requireObjectOrThrowTypeError'
// - Resolved require(434324) to 'require-object-or-throw-type-error'
// - Renamed variable 'o' to 'safeStringConvert'
// - Resolved require(355263) to 'safe-string-convert'
// - Renamed variable 'i' to 'iteratorGetterUtil'
// - Resolved require(593407) to 'iterator-getter-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 989372
         */
module.exports = function (module, exports, require) {
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var functionTypeGuardAssertion = require("function-type-guard-assertion") /*id: 750329*/;
  var requireObjectOrThrowTypeError = require("require-object-or-throw-type-error") /*id: 434324*/;
  var safeStringConvert = require("safe-string-convert") /*id: 355263*/;
  var iteratorGetterUtil = require("iterator-getter-util") /*id: 593407*/;
  var a = TypeError;
  module.exports = function (t, e) {
    var Q = arguments.length < 2 ? iteratorGetterUtil(t) : e;
    if (functionTypeGuardAssertion(Q)) {
      return requireObjectOrThrowTypeError(functionCallBindHelper(Q, t));
    }
    throw new a(safeStringConvert(t) + " is not iterable");
  };
}