// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 'i' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 'a' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'u' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'c' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'f' to 'asyncIteratorPrototypePolyfill'
// - Resolved require(198718) to 'async-iterator-prototype-polyfill'
// - Renamed variable 's' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 726232
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var asyncIteratorPrototypePolyfill = require("async-iterator-prototype-polyfill") /*id: 198718*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var l = coreJsWksAccess("toStringTag");
  var v = TypeError;
  function p() {
    validatePrototypeInvocation(this, asyncIteratorPrototypePolyfill);
    if (getPrototypeOfPolyfill_1(this) === asyncIteratorPrototypePolyfill) {
      throw new v("Abstract class AsyncIterator not directly constructable");
    }
  }
  p.prototype = asyncIteratorPrototypePolyfill;
  if (!objectHasOwnPolyfill_1(asyncIteratorPrototypePolyfill, l)) {
    definePropertyHelper_1(asyncIteratorPrototypePolyfill, l, "AsyncIterator");
  }
  if (libPolyfillCheck || !objectHasOwnPolyfill_1(asyncIteratorPrototypePolyfill, "constructor") || asyncIteratorPrototypePolyfill.constructor === Object) {
    definePropertyHelper_1(asyncIteratorPrototypePolyfill, "constructor", p);
  }
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    forced: libPolyfillCheck
  }, {
    AsyncIterator: p
  });
}