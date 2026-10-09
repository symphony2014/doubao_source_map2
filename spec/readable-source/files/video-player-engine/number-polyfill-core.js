// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 'i' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'a' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'd' to 'blueprintOverflowListResizeSensor'
// - Resolved require(269058) to 'blueprint-overflow-list-resize-sensor'
// - Renamed variable 'r' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'functionFeatureDetectHelper'
// - Resolved require(948260) to 'function-feature-detect-helper'
// - Renamed variable 'B' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'R' to 'setPrototypeOfPolyfill_1'
// - Resolved require(579783) to 'set-prototype-of-polyfill_1'
// - Renamed variable 'c' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 's' to 'isSymbolPolyfill'
// - Resolved require(362010) to 'is-symbol-polyfill'
// - Renamed variable 'V' to 'toPrimitivePolyfill'
// - Resolved require(320986) to 'to-primitive-polyfill'
// - Renamed variable 'Z' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Resolved require(667264) to 'get-own-property-names-polyfill'
// - Resolved require(143761) to 'property-descriptor-polyfill'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Renamed variable 'J' to 'numberValueofBindUtil'
// - Resolved require(980065) to 'number-valueof-bind-util'
// - Resolved require(700296) to 'string-trim-utils'
// - Updated imported property 'f' to 'getOwnPropertyNames' (module 667264)
// - Updated imported property 'f' to 'getOwnPropertyDesc' (module 143761)
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 670689
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var blueprintOverflowListResizeSensor = require("blueprint-overflow-list-resize-sensor") /*id: 269058*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionFeatureDetectHelper = require("function-feature-detect-helper") /*id: 948260*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var setPrototypeOfPolyfill_1 = require("set-prototype-of-polyfill_1") /*id: 579783*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var isSymbolPolyfill = require("is-symbol-polyfill") /*id: 362010*/;
  var toPrimitivePolyfill = require("to-primitive-polyfill") /*id: 320986*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var h = require("get-own-property-names-polyfill") /*id: 667264*/.getOwnPropertyNames;
  var u = require("property-descriptor-polyfill") /*id: 143761*/.getOwnPropertyDesc;
  var S = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  var numberValueofBindUtil = require("number-valueof-bind-util") /*id: 980065*/;
  var m = require("string-trim-utils") /*id: 700296*/.trim;
  var p = "Number";
  var W = globalObjectPolyfill[p];
  var E = blueprintOverflowListResizeSensor[p];
  var k = W.prototype;
  var N = globalObjectPolyfill.TypeError;
  var y = functionBindFallback("".slice);
  var b = functionBindFallback("".charCodeAt);
  function f(U) {
    var n = toPrimitivePolyfill(U, "number");
    if (typeof n == "bigint") {
      return n;
    } else {
      return T(n);
    }
  }
  function T(U) {
    var n;
    var F;
    var Q;
    var l;
    var i;
    var a;
    var d;
    var r;
    var o = toPrimitivePolyfill(U, "number");
    if (isSymbolPolyfill(o)) {
      throw new N("Cannot convert a Symbol value to a number");
    }
    if (typeof o == "string" && o.length > 2) {
      if ((n = b(o = m(o), 0)) === 43 || n === 45) {
        if ((F = b(o, 2)) === 88 || F === 120) {
          return NaN;
        }
      } else if (n === 48) {
        switch (b(o, 1)) {
          case 66:
          case 98:
            Q = 2;
            l = 49;
            break;
          case 79:
          case 111:
            Q = 8;
            l = 55;
            break;
          default:
            return +o;
        }
        d = 0;
        a = (i = y(o, 2)).length;
        for (; d < a; d++) {
          if ((r = b(i, d)) < 48 || r > l) {
            return NaN;
          }
        }
        return parseInt(i, Q);
      }
    }
    return +o;
  }
  var v = functionFeatureDetectHelper(p, !W(" 0o1") || !W("0b1") || W("+0x1"));
  function C(U) {
    var n;
    var F = arguments.length < 1 ? 0 : W(f(U));
    n = this;
    if (isPrototypeOfPolyfill(k, n) && tryCatchFunctionWrapper(function () {
      numberValueofBindUtil(n);
    })) {
      return setPrototypeOfPolyfill_1(Object(F), this, C);
    } else {
      return F;
    }
  }
  C.prototype = k;
  if (v && !libPolyfillCheck) {
    k.constructor = C;
  }
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    wrap: true,
    forced: v
  }, {
    Number: C
  });
  function X(U, n) {
    var F;
    var Q = es5PropertyDescriptorCheck ? h(n) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",");
    var l = 0;
    for (; Q.length > l; l++) {
      if (objectHasOwnPolyfill_1(n, F = Q[l]) && !objectHasOwnPolyfill_1(U, F)) {
        S(U, F, u(n, F));
      }
    }
  }
  if (libPolyfillCheck && E) {
    X(blueprintOverflowListResizeSensor[p], E);
  }
  if (v || libPolyfillCheck) {
    X(blueprintOverflowListResizeSensor[p], W);
  }
}