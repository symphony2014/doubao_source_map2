// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'a' to 'nativeConstructorDetector'
// - Resolved require(876384) to 'native-constructor-detector'
// - Renamed variable 'u' to 'getAsyncIterator'
// - Resolved require(322629) to 'get-async-iterator'
// - Renamed variable 'c' to 'getIteratorMethod'
// - Resolved require(134822) to 'get-iterator-method'
// - Renamed variable 'f' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 's' to 'libPolyfillIterator'
// - Resolved require(150387) to 'lib-polyfill-iterator'
// - Renamed variable 'l' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'v' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'p' to 'globalPrototypeAccessUtil'
// - Resolved require(329929) to 'global-prototype-access-util'
// - Renamed variable 'h' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'd' to 'asyncFromSyncIteratorPolyfill'
// - Resolved require(42869) to 'async-from-sync-iterator-polyfill'
// - Resolved require(149116) to 'async-iterator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 360638
         */
module.exports = function (module, exports, require) {
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var nativeConstructorDetector = require("native-constructor-detector") /*id: 876384*/;
  var getAsyncIterator = require("get-async-iterator") /*id: 322629*/;
  var getIteratorMethod = require("get-iterator-method") /*id: 134822*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var libPolyfillIterator = require("lib-polyfill-iterator") /*id: 150387*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var globalPrototypeAccessUtil = require("global-prototype-access-util") /*id: 329929*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var asyncFromSyncIteratorPolyfill = require("async-from-sync-iterator-polyfill") /*id: 42869*/;
  var y = require("async-iterator-utils") /*id: 149116*/.toArray;
  var g = coreJsWksAccess("asyncIterator");
  var b = functionBindFallback(globalPrototypeAccessUtil("Array", "values"));
  var w = functionBindFallback(b([]).next);
  function m() {
    return new x(this);
  }
  function x(t) {
    this.iterator = b(t);
  }
  x.prototype.next = function () {
    return w(this.iterator);
  };
  module.exports = function (t) {
    var r = this;
    var e = arguments.length;
    var o = e > 1 ? arguments[1] : undefined;
    var p = e > 2 ? arguments[2] : undefined;
    return new (globalPolyfillAccess("Promise"))(function (e) {
      var v = requireObjectNotNullish(t);
      if (o !== undefined) {
        o = safeFunctionBind(o, p);
      }
      var h = safePropertyValidator(v, g);
      var b = h ? undefined : libPolyfillIterator(v) || m;
      var w = nativeConstructorDetector(r) ? new r() : [];
      e(y(h ? getAsyncIterator(v, h) : new asyncFromSyncIteratorPolyfill(iteratorWrapperHelper(getIteratorMethod(v, b))), o, w));
    });
  };
}