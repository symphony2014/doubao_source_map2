// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'functionBindPolyfill_2'
// - Resolved require(146857) to 'function-bind-polyfill_2'
// - Renamed variable 'a' to 'iteratorPrototypeFactory'
// - Resolved require(1775) to 'iterator-prototype-factory'
// - Renamed variable 'u' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'c' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'f' to 'clampSafeInteger'
// - Resolved require(279936) to 'clamp-safe-integer'
// - Renamed variable 's' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'l' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'v' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'p' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// - Renamed variable 'h' to 'isRegexpLike'
// - Resolved require(164047) to 'is-regexp-like'
// - Renamed variable 'd' to 'getRegexpFlags'
// - Resolved require(350472) to 'get-regexp-flags'
// - Renamed variable 'y' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'g' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'b' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'w' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'm' to 'speciesConstructorUtil'
// - Resolved require(206077) to 'species-constructor-util'
// - Renamed variable 'x' to 'unicodeStringIndexUtil'
// - Resolved require(472347) to 'unicode-string-index-util'
// - Renamed variable 'A' to 'regexpExecPolyfillHandler'
// - Resolved require(747017) to 'regexp-exec-polyfill-handler'
// - Renamed variable 'E' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'S' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 452532
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindPolyfill_2 = require("function-bind-polyfill_2") /*id: 146857*/;
  var iteratorPrototypeFactory = require("iterator-prototype-factory") /*id: 1775*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var clampSafeInteger = require("clamp-safe-integer") /*id: 279936*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var isRegexpLike = require("is-regexp-like") /*id: 164047*/;
  var getRegexpFlags = require("get-regexp-flags") /*id: 350472*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var speciesConstructorUtil = require("species-constructor-util") /*id: 206077*/;
  var unicodeStringIndexUtil = require("unicode-string-index-util") /*id: 472347*/;
  var regexpExecPolyfillHandler = require("regexp-exec-polyfill-handler") /*id: 747017*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var O = coreJsWksAccess("matchAll");
  var R = "RegExp String";
  var I = R + " Iterator";
  var T = objectStateManager.set;
  var k = objectStateManager.getterFor(I);
  var M = RegExp.prototype;
  var j = TypeError;
  var D = functionBindPolyfill_2("".indexOf);
  var P = functionBindPolyfill_2("".matchAll);
  var _ = !!P && !tryCatchFunctionWrapper(function () {
    P("a", /./);
  });
  var C = iteratorPrototypeFactory(function (t, r, e, n) {
    T(this, {
      type: I,
      regexp: t,
      string: r,
      global: e,
      unicode: n,
      done: false
    });
  }, R, function () {
    var t = k(this);
    if (t.done) {
      return iteratorResultFactory_1(undefined, true);
    }
    var r = t.regexp;
    var e = t.string;
    var n = regexpExecPolyfillHandler(r, e);
    if (n === null) {
      t.done = true;
      return iteratorResultFactory_1(undefined, true);
    } else {
      if (t.global) {
        if (symbolToStringConverter_1(n[0]) === "") {
          r.lastIndex = unicodeStringIndexUtil(e, clampSafeInteger(r.lastIndex), t.unicode);
        }
      } else {
        t.done = true;
      }
      return iteratorResultFactory_1(n, false);
    }
  });
  function N(t) {
    var r;
    var e;
    var n;
    var o = requireObjectOrThrowTypeError_1(this);
    var i = symbolToStringConverter_1(t);
    var a = speciesConstructorUtil(o, RegExp);
    var u = symbolToStringConverter_1(getRegexpFlags(o));
    r = new a(a === RegExp ? o.source : o, u);
    e = !!~D(u, "g");
    n = !!~D(u, "u");
    r.lastIndex = clampSafeInteger(o.lastIndex);
    return new C(r, i, e, n);
  }
  polyfillPropertyDefiner({
    target: "String",
    proto: true,
    forced: _
  }, {
    matchAll: function (t) {
      var r;
      var e;
      var n;
      var i = requireNotNullish(this);
      if (isNullishCheck_1(t)) {
        if (_) {
          return P(i, t);
        }
      } else {
        if (isRegexpLike(t) && !~D(symbolToStringConverter_1(requireNotNullish(getRegexpFlags(t))), "g")) {
          throw new j("`.matchAll` does not allow non-global regexes");
        }
        if (_) {
          return P(i, t);
        }
        if ((e = safePropertyValidator(t, O)) === undefined && libPolyfillCheck && objectTypeDetector(t) === "RegExp") {
          e = N;
        }
        if (e) {
          return callBindPolyfill(e, t, i);
        }
      }
      r = symbolToStringConverter_1(i);
      n = RegExp(t, "g");
      if (libPolyfillCheck) {
        return callBindPolyfill(N, n, r);
      } else {
        return n[O](r);
      }
    }
  });
  if (!libPolyfillCheck && !(O in M)) {
    definePropertyHelper_1_1(M, O, N);
  }
}