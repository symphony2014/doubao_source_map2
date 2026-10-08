// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 'u' to 'libPolyfillIterator'
// - Resolved require(150387) to 'lib-polyfill-iterator'
// - Renamed variable 'c' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'f' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 's' to 'asyncFromSyncIteratorPolyfill'
// - Resolved require(42869) to 'async-from-sync-iterator-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 812771
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var libPolyfillIterator = require("lib-polyfill-iterator") /*id: 150387*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var asyncFromSyncIteratorPolyfill = require("async-from-sync-iterator-polyfill") /*id: 42869*/;
  var l = coreJsWksAccess("asyncIterator");
  module.exports = function (t) {
    var r;
    var e = requireObjectOrThrowTypeError_1(t);
    var f = true;
    var v = safePropertyValidator(e, l);
    if (!isFunctionPolyfill(v)) {
      v = libPolyfillIterator(e);
      f = false;
    }
    if (v !== undefined) {
      r = callBindPolyfill(v, e);
    } else {
      r = e;
      f = true;
    }
    requireObjectOrThrowTypeError_1(r);
    return iteratorWrapperHelper(f ? r : new asyncFromSyncIteratorPolyfill(iteratorWrapperHelper(r)));
  };
}