// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'assertNativeConstructor'
// - Resolved require(15730) to 'assert-native-constructor'
// - Renamed variable 'i' to 'asyncIterableToArray'
// - Resolved require(360638) to 'async-iterable-to-array'
// - Renamed variable 'a' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'u' to 'safeArrayCreateUtil'
// - Resolved require(311252) to 'safe-array-create-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 539074
         */
module.exports = function (module, exports, require) {
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var assertNativeConstructor = require("assert-native-constructor") /*id: 15730*/;
  var asyncIterableToArray = require("async-iterable-to-array") /*id: 360638*/;
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var safeArrayCreateUtil = require("safe-array-create-util") /*id: 311252*/;
  var c = typedArrayPolyfillUtil.aTypedArrayConstructor;
  typedArrayPolyfillUtil.exportTypedArrayStaticMethod("fromAsync", function (t) {
    var r = this;
    var e = arguments.length;
    var a = e > 1 ? arguments[1] : undefined;
    var f = e > 2 ? arguments[2] : undefined;
    return new (globalPolyfillAccess("Promise"))(function (e) {
      assertNativeConstructor(r);
      e(asyncIterableToArray(t, a, f));
    }).then(function (t) {
      return safeArrayCreateUtil(c(r), t);
    });
  }, true);
}