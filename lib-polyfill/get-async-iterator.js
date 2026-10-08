// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'asyncFromSyncIteratorPolyfill'
// - Resolved require(42869) to 'async-from-sync-iterator-polyfill'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'getIteratorMethod'
// - Resolved require(134822) to 'get-iterator-method'
// - Renamed variable 'u' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 'c' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 322629
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var asyncFromSyncIteratorPolyfill = require("async-from-sync-iterator-polyfill") /*id: 42869*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var getIteratorMethod = require("get-iterator-method") /*id: 134822*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var f = require("core-js-wks-access") /*id: 349338*/("asyncIterator");
  module.exports = function (t, r) {
    var e = arguments.length < 2 ? safePropertyValidator(t, f) : r;
    if (e) {
      return requireObjectOrThrowTypeError_1(callBindPolyfill(e, t));
    } else {
      return new asyncFromSyncIteratorPolyfill(iteratorWrapperHelper(getIteratorMethod(t)));
    }
  };
}