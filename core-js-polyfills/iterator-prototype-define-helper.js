// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'o' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'i' to 'constantTrueValue'
// - Resolved require(659937) to 'constant-true-value'
// - Renamed variable 'u' to 'functionNamePropertySupportCheck'
// - Resolved require(804618) to 'function-name-property-support-check'
// - Renamed variable 'c' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 's' to 'defineIteratorConstructor'
// - Resolved require(927878) to 'define-iterator-constructor'
// - Renamed variable 'f' to 'getPrototypeOfUtil_1'
// - Resolved require(391711) to 'get-prototype-of-util_1'
// - Renamed variable 'a' to 'objectSetPrototypeOf'
// - Resolved require(595894) to 'object-set-prototype-of'
// - Renamed variable 'p' to 'setSymbolToStringTag_1'
// - Resolved require(434792) to 'set-symbol-to-string-tag_1'
// - Renamed variable 'l' to 'definePropertySafeWrapper'
// - Resolved require(336704) to 'define-property-safe-wrapper'
// - Renamed variable 'v' to 'definePropertyUtil'
// - Resolved require(469792) to 'define-property-util'
// - Renamed variable 'y' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// - Renamed variable 'h' to 'emptyModuleExport'
// - Resolved require(159645) to 'empty-module-export'
// - Renamed variable 'b' to 'iteratorPrototypePolyfill'
// - Resolved require(336147) to 'iterator-prototype-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 903338
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var constantTrueValue = require("constant-true-value") /*id: 659937*/;
  var functionNamePropertySupportCheck = require("function-name-property-support-check") /*id: 804618*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var defineIteratorConstructor = require("define-iterator-constructor") /*id: 927878*/;
  var getPrototypeOfUtil_1 = require("get-prototype-of-util_1") /*id: 391711*/;
  var objectSetPrototypeOf = require("object-set-prototype-of") /*id: 595894*/;
  var setSymbolToStringTag_1 = require("set-symbol-to-string-tag_1") /*id: 434792*/;
  var definePropertySafeWrapper = require("define-property-safe-wrapper") /*id: 336704*/;
  var definePropertyUtil = require("define-property-util") /*id: 469792*/;
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var emptyModuleExport = require("empty-module-export") /*id: 159645*/;
  var iteratorPrototypePolyfill = require("iterator-prototype-polyfill") /*id: 336147*/;
  var d = functionNamePropertySupportCheck.PROPER;
  var g = functionNamePropertySupportCheck.CONFIGURABLE;
  var m = iteratorPrototypePolyfill.IteratorPrototype;
  var x = iteratorPrototypePolyfill.BUGGY_SAFARI_ITERATORS;
  var S = symbolWellKnownRegistry("iterator");
  var O = "keys";
  var w = "values";
  var j = "entries";
  function A() {
    return this;
  }
  module.exports = function (t, r, n, u, y, b, P) {
    defineIteratorConstructor(n, r, u);
    var E;
    var L;
    var T;
    function F(t) {
      if (t === y && R) {
        return R;
      }
      if (!x && t && t in I) {
        return I[t];
      }
      switch (t) {
        case O:
        case w:
        case j:
          return function () {
            return new n(this, t);
          };
      }
      return function () {
        return new n(this);
      };
    }
    var _ = r + " Iterator";
    var D = false;
    var I = t.prototype;
    var C = I[S] || I["@@iterator"] || y && I[y];
    var R = !x && C || F(y);
    var k = r === "Array" && I.entries || C;
    if (k && (E = getPrototypeOfUtil_1(k.call(new t()))) !== Object.prototype && E.next) {
      if (!constantTrueValue && getPrototypeOfUtil_1(E) !== m) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(E, m);
        } else if (!isFunctionCheck(E[S])) {
          definePropertyUtil(E, S, A);
        }
      }
      setSymbolToStringTag_1(E, _, true, true);
      if (constantTrueValue) {
        emptyModuleExport[_] = A;
      }
    }
    if (d && y === w && C && C.name !== w) {
      if (!constantTrueValue && g) {
        definePropertySafeWrapper(I, "name", w);
      } else {
        D = true;
        R = function () {
          return functionCallBindHelper(C, this);
        };
      }
    }
    if (y) {
      L = {
        values: F(w),
        keys: b ? R : F(O),
        entries: F(j)
      };
      if (P) {
        for (T in L) {
          if (!!x || !!D || !(T in I)) {
            definePropertyUtil(I, T, L[T]);
          }
        }
      } else {
        coreJsExportUtil({
          target: r,
          proto: true,
          forced: x || D
        }, L);
      }
    }
    if ((!constantTrueValue || P) && I[S] !== R) {
      definePropertyUtil(I, S, R, {
        name: y
      });
    }
    emptyModuleExport[r] = R;
    return L;
  };
}