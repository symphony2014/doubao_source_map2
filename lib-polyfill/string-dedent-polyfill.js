// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectExtensibilityPolyfillCheck'
// - Resolved require(866540) to 'object-extensibility-polyfill-check'
// - Renamed variable 'o' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'i' to 'functionNamePolyfillUtil'
// - Resolved require(525314) to 'function-name-polyfill-util'
// - Renamed variable 'a' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'u' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'c' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'f' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 's' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'l' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Renamed variable 'p' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// - Renamed variable 'h' to 'weakmapUtils'
// - Resolved require(76713) to 'weakmap-utils'
// - Renamed variable 'd' to 'templateStringPolyfill'
// - Resolved require(685654) to 'template-string-polyfill'
// - Renamed variable 'y' to 'stringEscapeParserUtil'
// - Resolved require(537500) to 'string-escape-parser-util'
// - Renamed variable 'g' to 'unicodeWhitespaceChars'
// - Resolved require(683193) to 'unicode-whitespace-chars'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 897000
         */
module.exports = function (module, exports, require) {
  var objectExtensibilityPolyfillCheck = require("object-extensibility-polyfill-check") /*id: 866540*/;
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionNamePolyfillUtil = require("function-name-polyfill-util") /*id: 525314*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var v = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var weakmapUtils = require("weakmap-utils") /*id: 76713*/;
  var templateStringPolyfill = require("template-string-polyfill") /*id: 685654*/;
  var stringEscapeParserUtil = require("string-escape-parser-util") /*id: 537500*/;
  var unicodeWhitespaceChars = require("unicode-whitespace-chars") /*id: 683193*/;
  var b = new weakmapUtils.WeakMap();
  var w = weakmapUtils.get;
  var m = weakmapUtils.has;
  var x = weakmapUtils.set;
  var A = Array;
  var E = TypeError;
  var S = Object.freeze || Object;
  var O = Object.isFrozen;
  var R = Math.min;
  var I = functionBindFallback("".charAt);
  var T = functionBindFallback("".slice);
  var k = functionBindFallback("".split);
  var M = functionBindFallback(/./.exec);
  var j = /([\n\u2028\u2029]|\r\n?)/g;
  var D = RegExp("^[" + unicodeWhitespaceChars + "]*");
  var P = RegExp("[^" + unicodeWhitespaceChars + "]");
  var _ = "Invalid tag";
  function C(t) {
    var r = t.raw;
    if (objectExtensibilityPolyfillCheck && !O(r)) {
      throw new E("Raw template should be frozen");
    }
    if (m(b, r)) {
      return w(b, r);
    }
    var e = N(r);
    var o = F(e);
    v(o, "raw", {
      value: S(e)
    });
    S(o);
    x(b, r, o);
    return o;
  }
  function N(t) {
    var r;
    var e;
    var n;
    var o;
    var i = requireObjectNotNullish(t);
    var a = getArrayLengthSafe(i);
    var u = A(a);
    var c = A(a);
    var s = 0;
    if (!a) {
      throw new E(_);
    }
    for (; s < a; s++) {
      var v = i[s];
      if (typeof v == "string") {
        u[s] = k(v, j);
      } else {
        throw new E(_);
      }
    }
    for (s = 0; s < a; s++) {
      var p = s + 1 === a;
      r = u[s];
      if (s === 0) {
        if (r.length === 1 || r[0].length > 0) {
          throw new E("Invalid opening line");
        }
        r[1] = "";
      }
      if (p) {
        if (r.length === 1 || M(P, r[r.length - 1])) {
          throw new E("Invalid closing line");
        }
        r[r.length - 2] = "";
        r[r.length - 1] = "";
      }
      for (var h = 2; h < r.length; h += 2) {
        var d = r[h];
        var y = h + 1 === r.length && !p;
        var g = M(D, d)[0];
        if (!y && g.length === d.length) {
          r[h] = "";
          continue;
        }
        e = U(g, e);
      }
    }
    var b = e ? e.length : 0;
    for (s = 0; s < a; s++) {
      n = (r = u[s])[0];
      o = 1;
      for (; o < r.length; o += 2) {
        n += r[o] + T(r[o + 1], b);
      }
      c[s] = n;
    }
    return c;
  }
  function U(t, r) {
    if (r === undefined || t === r) {
      return t;
    }
    var e = 0;
    var n = R(t.length, r.length);
    for (; e < n && I(t, e) === I(r, e); e++);
    return T(t, 0, e);
  }
  function F(t) {
    var r = 0;
    var e = t.length;
    var n = A(e);
    for (; r < e; r++) {
      n[r] = stringEscapeParserUtil(t[r]);
    }
    return n;
  }
  function B(t) {
    return functionNamePolyfillUtil(function (r) {
      var e = arraySlicePolyfill_2(arguments);
      e[0] = C(requireObjectOrThrowTypeError_1(r));
      return reflectApplyPolyfill_1(t, this, e);
    }, "");
  }
  var L = B(templateStringPolyfill);
  polyfillPropertyDefiner({
    target: "String",
    stat: true,
    forced: true
  }, {
    dedent: function (t) {
      requireObjectOrThrowTypeError_1(t);
      if (isFunctionPolyfill(t)) {
        return B(t);
      } else {
        return reflectApplyPolyfill_1(L, this, arguments);
      }
    }
  });
}