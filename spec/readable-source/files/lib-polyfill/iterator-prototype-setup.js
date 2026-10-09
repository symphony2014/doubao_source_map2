// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'u' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'c' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'f' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 's' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 'l' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'v' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'p' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 136661
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var h = coreJsWksAccess("iterator");
  var d = false;
  if ([].keys) {
    if ("next" in (i = [].keys())) {
      if ((o = getPrototypeOfPolyfill_1(getPrototypeOfPolyfill_1(i))) !== Object.prototype) {
        n = o;
      }
    } else {
      d = true;
    }
  }
  if (!isObjectOrFunctionCheck(n) || tryCatchFunctionWrapper(function () {
    var t = {};
    return n[h].call(t) !== t;
  })) {
    n = {};
  } else if (libPolyfillCheck) {
    n = objectCreatePolyfill_1(n);
  }
  if (!isFunctionPolyfill(n[h])) {
    definePropertyHelper_1_1(n, h, function () {
      return this;
    });
  }
  module.exports = {
    IteratorPrototype: n,
    BUGGY_SAFARI_ITERATORS: d
  };
}