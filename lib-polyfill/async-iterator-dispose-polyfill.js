// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'i' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'a' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'u' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'c' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'f' to 'asyncIteratorPrototypePolyfill'
// - Resolved require(198718) to 'async-iterator-prototype-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 737150
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var asyncIteratorPrototypePolyfill = require("async-iterator-prototype-polyfill") /*id: 198718*/;
  var s = coreJsWksAccess("asyncDispose");
  var l = globalPolyfillAccess("Promise");
  if (!objectHasOwnPolyfill_1(asyncIteratorPrototypePolyfill, s)) {
    definePropertyHelper_1_1(asyncIteratorPrototypePolyfill, s, function () {
      var t = this;
      return new l(function (r, e) {
        var o = safePropertyValidator(t, "return");
        if (o) {
          l.resolve(callBindPolyfill(o, t)).then(function () {
            r(undefined);
          }, e);
        } else {
          r(undefined);
        }
      });
    });
  }
}