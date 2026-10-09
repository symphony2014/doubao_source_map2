// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'functionFeatureDetectHelper'
// - Resolved require(948260) to 'function-feature-detect-helper'
// - Renamed variable 'u' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'c' to 'weakDataMetadataManager'
// - Resolved require(553786) to 'weak-data-metadata-manager'
// - Renamed variable 'f' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 's' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 'l' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'v' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'p' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'h' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'd' to 'iteratorCloseCheck'
// - Resolved require(675728) to 'iterator-close-check'
// - Renamed variable 'y' to 'setToStringTagUtil'
// - Resolved require(768336) to 'set-to-string-tag-util'
// - Renamed variable 'g' to 'setPrototypeOfPolyfill_1'
// - Resolved require(579783) to 'set-prototype-of-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 312491
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionFeatureDetectHelper = require("function-feature-detect-helper") /*id: 948260*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var weakDataMetadataManager = require("weak-data-metadata-manager") /*id: 553786*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var iteratorCloseCheck = require("iterator-close-check") /*id: 675728*/;
  var setToStringTagUtil = require("set-to-string-tag-util") /*id: 768336*/;
  var setPrototypeOfPolyfill_1 = require("set-prototype-of-polyfill_1") /*id: 579783*/;
  module.exports = function (t, r, e) {
    var b = t.indexOf("Map") !== -1;
    var w = t.indexOf("Weak") !== -1;
    var m = b ? "set" : "add";
    var x = globalObjectPolyfill[t];
    var A = x && x.prototype;
    var E = x;
    var S = {};
    function O(t) {
      var r = functionBindFallback(A[t]);
      definePropertyHelper_1_1(A, t, t === "add" ? function (t) {
        r(this, t === 0 ? 0 : t);
        return this;
      } : t === "delete" ? function (t) {
        return (!w || !!isObjectOrFunctionCheck(t)) && r(this, t === 0 ? 0 : t);
      } : t === "get" ? function (t) {
        if (w && !isObjectOrFunctionCheck(t)) {
          return undefined;
        } else {
          return r(this, t === 0 ? 0 : t);
        }
      } : t === "has" ? function (t) {
        return (!w || !!isObjectOrFunctionCheck(t)) && r(this, t === 0 ? 0 : t);
      } : function (t, e) {
        r(this, t === 0 ? 0 : t, e);
        return this;
      });
    }
    if (functionFeatureDetectHelper(t, !isFunctionPolyfill(x) || !w && (!A.forEach || !!tryCatchFunctionWrapper(function () {
      new x().entries().next();
    })))) {
      E = e.getConstructor(r, t, b, m);
      weakDataMetadataManager.enable();
    } else if (functionFeatureDetectHelper(t, true)) {
      var R = new E();
      var I = R[m](w ? {} : -0, 1) !== R;
      var T = tryCatchFunctionWrapper(function () {
        R.has(1);
      });
      var k = iteratorCloseCheck(function (t) {
        new x(t);
      });
      var M = !w && tryCatchFunctionWrapper(function () {
        var t = new x();
        var r = 5;
        while (r--) {
          t[m](r, r);
        }
        return !t.has(-0);
      });
      if (!k) {
        (E = r(function (t, r) {
          validatePrototypeInvocation(t, A);
          var e = setPrototypeOfPolyfill_1(new x(), t, E);
          if (!isNullishCheck_1(r)) {
            iteratorForEachHelper(r, e[m], {
              that: e,
              AS_ENTRIES: b
            });
          }
          return e;
        })).prototype = A;
        A.constructor = E;
      }
      if (T || M) {
        O("delete");
        O("has");
        if (b) {
          O("get");
        }
      }
      if (M || I) {
        O(m);
      }
      if (w && A.clear) {
        delete A.clear;
      }
    }
    S[t] = E;
    polyfillPropertyDefiner({
      global: true,
      constructor: true,
      forced: E !== x
    }, S);
    setToStringTagUtil(E, t);
    if (!w) {
      e.setStrong(E, t, b);
    }
    return E;
  };
}