// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'a' to 'polyfillPropertyDescriptor'
// - Resolved require(790197) to 'polyfill-property-descriptor'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Renamed variable 'c' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'f' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 's' to 'setPrototypeOfPolyfill_1'
// - Resolved require(579783) to 'set-prototype-of-polyfill_1'
// - Renamed variable 'l' to 'safeStringDefaultUtil'
// - Resolved require(560205) to 'safe-string-default-util'
// - Renamed variable 'v' to 'domErrorConstants'
// - Resolved require(353238) to 'dom-error-constants'
// - Renamed variable 'p' to 'stackTraceCleaner'
// - Resolved require(903868) to 'stack-trace-cleaner'
// - Renamed variable 'h' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'd' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 552297
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var polyfillPropertyDescriptor = require("polyfill-property-descriptor") /*id: 790197*/;
  var u = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var setPrototypeOfPolyfill_1 = require("set-prototype-of-polyfill_1") /*id: 579783*/;
  var safeStringDefaultUtil = require("safe-string-default-util") /*id: 560205*/;
  var domErrorConstants = require("dom-error-constants") /*id: 353238*/;
  var stackTraceCleaner = require("stack-trace-cleaner") /*id: 903868*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var y = "DOMException";
  var g = globalPolyfillAccess("Error");
  var b = globalPolyfillAccess(y);
  function w() {
    validatePrototypeInvocation(this, m);
    var t = arguments.length;
    var r = safeStringDefaultUtil(t < 1 ? undefined : arguments[0]);
    var e = safeStringDefaultUtil(t < 2 ? undefined : arguments[1], "Error");
    var n = new b(r, e);
    var o = new g(r);
    o.name = y;
    u(n, "stack", polyfillPropertyDescriptor(1, stackTraceCleaner(o.stack, 1)));
    setPrototypeOfPolyfill_1(n, this, w);
    return n;
  }
  var m = w.prototype = b.prototype;
  var x = "stack" in new g(y);
  var A = "stack" in new b(1, 2);
  var E = b && es5PropertyDescriptorCheck && Object.getOwnPropertyDescriptor(globalObjectPolyfill, y);
  var S = !!E && (!E.writable || !E.configurable);
  var O = x && !S && !A;
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    forced: libPolyfillCheck || O
  }, {
    DOMException: O ? w : b
  });
  var R = globalPolyfillAccess(y);
  var I = R.prototype;
  if (I.constructor !== R) {
    if (!libPolyfillCheck) {
      u(I, "constructor", polyfillPropertyDescriptor(1, R));
    }
    for (var T in domErrorConstants) {
      if (objectHasOwnPolyfill_1(domErrorConstants, T)) {
        var k = domErrorConstants[T];
        var M = k.s;
        if (!objectHasOwnPolyfill_1(R, M)) {
          u(R, M, polyfillPropertyDescriptor(6, k.c));
        }
      }
    }
  }
}