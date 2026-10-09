// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'a' to 'coreJsSharedStoreInit'
// - Resolved require(53489) to 'core-js-shared-store-init'
// - Renamed variable 'u' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'c' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 'f' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 's' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'l' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'v' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 198718
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var coreJsSharedStoreInit = require("core-js-shared-store-init") /*id: 53489*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var p = "USE_FUNCTION_CONSTRUCTOR";
  var h = coreJsWksAccess("asyncIterator");
  var d = globalObjectPolyfill.AsyncIterator;
  var y = coreJsSharedStoreInit.AsyncIteratorPrototype;
  if (y) {
    n = y;
  } else if (isFunctionPolyfill(d)) {
    n = d.prototype;
  } else if (coreJsSharedStoreInit[p] || globalObjectPolyfill[p]) {
    try {
      o = getPrototypeOfPolyfill_1(getPrototypeOfPolyfill_1(getPrototypeOfPolyfill_1(Function("return async function*(){}()")())));
      if (getPrototypeOfPolyfill_1(o) === Object.prototype) {
        n = o;
      }
    } catch (t) {}
  }
  if (n) {
    if (libPolyfillCheck) {
      n = objectCreatePolyfill_1(n);
    }
  } else {
    n = {};
  }
  if (!isFunctionPolyfill(n[h])) {
    definePropertyHelper_1_1(n, h, function () {
      return this;
    });
  }
  module.exports = n;
}