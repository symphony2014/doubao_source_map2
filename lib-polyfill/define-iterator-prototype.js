// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 'a' to 'functionNamePropertyCheck'
// - Resolved require(968072) to 'function-name-property-check'
// - Renamed variable 'u' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'c' to 'iteratorPrototypeFactory'
// - Resolved require(1775) to 'iterator-prototype-factory'
// - Renamed variable 'f' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 's' to 'setPrototypeOfPolyfill'
// - Resolved require(411942) to 'set-prototype-of-polyfill'
// - Renamed variable 'l' to 'setToStringTagUtil'
// - Resolved require(768336) to 'set-to-string-tag-util'
// - Renamed variable 'v' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'p' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'h' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'd' to 'libPolyfill'
// - Resolved require(173864) to 'lib-polyfill'
// - Renamed variable 'y' to 'iteratorPrototypeSetup'
// - Resolved require(136661) to 'iterator-prototype-setup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 675930
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var functionNamePropertyCheck = require("function-name-property-check") /*id: 968072*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var iteratorPrototypeFactory = require("iterator-prototype-factory") /*id: 1775*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var setPrototypeOfPolyfill = require("set-prototype-of-polyfill") /*id: 411942*/;
  var setToStringTagUtil = require("set-to-string-tag-util") /*id: 768336*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var libPolyfill = require("lib-polyfill") /*id: 173864*/;
  var iteratorPrototypeSetup = require("iterator-prototype-setup") /*id: 136661*/;
  var g = functionNamePropertyCheck.PROPER;
  var b = functionNamePropertyCheck.CONFIGURABLE;
  var w = iteratorPrototypeSetup.IteratorPrototype;
  var m = iteratorPrototypeSetup.BUGGY_SAFARI_ITERATORS;
  var x = coreJsWksAccess("iterator");
  var A = "keys";
  var E = "values";
  var S = "entries";
  function O() {
    return this;
  }
  module.exports = function (t, r, e, a, h, y, R) {
    iteratorPrototypeFactory(e, r, a);
    var I;
    var T;
    var k;
    function M(t) {
      if (t === h && C) {
        return C;
      }
      if (!m && t && t in P) {
        return P[t];
      }
      switch (t) {
        case A:
        case E:
        case S:
          return function () {
            return new e(this, t);
          };
      }
      return function () {
        return new e(this);
      };
    }
    var j = r + " Iterator";
    var D = false;
    var P = t.prototype;
    var _ = P[x] || P["@@iterator"] || h && P[h];
    var C = !m && _ || M(h);
    var N = r === "Array" && P.entries || _;
    if (N && (I = getPrototypeOfPolyfill_1(N.call(new t()))) !== Object.prototype && I.next) {
      if (!libPolyfillCheck && getPrototypeOfPolyfill_1(I) !== w) {
        if (setPrototypeOfPolyfill) {
          setPrototypeOfPolyfill(I, w);
        } else if (!isFunctionPolyfill(I[x])) {
          definePropertyHelper_1_1(I, x, O);
        }
      }
      setToStringTagUtil(I, j, true, true);
      if (libPolyfillCheck) {
        libPolyfill[j] = O;
      }
    }
    if (g && h === E && _ && _.name !== E) {
      if (!libPolyfillCheck && b) {
        definePropertyHelper_1(P, "name", E);
      } else {
        D = true;
        C = function () {
          return callBindPolyfill(_, this);
        };
      }
    }
    if (h) {
      T = {
        values: M(E),
        keys: y ? C : M(A),
        entries: M(S)
      };
      if (R) {
        for (k in T) {
          if (!!m || !!D || !(k in P)) {
            definePropertyHelper_1_1(P, k, T[k]);
          }
        }
      } else {
        polyfillPropertyDefiner({
          target: r,
          proto: true,
          forced: m || D
        }, T);
      }
    }
    if ((!libPolyfillCheck || R) && P[x] !== C) {
      definePropertyHelper_1_1(P, x, C, {
        name: h
      });
    }
    libPolyfill[r] = C;
    return T;
  };
}