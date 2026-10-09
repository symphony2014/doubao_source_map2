// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'i' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'a' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'u' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'c' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'f' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 's' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'l' to 'arrayIsarrayPolyfill'
// - Resolved require(332607) to 'array-isarray-polyfill'
// - Renamed variable 'v' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'p' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'h' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'd' to 'es5DefinePropertyPolyfill'
// - Resolved require(864373) to 'es5-define-property-polyfill'
// - Renamed variable 'y' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'g' to 'stringLiteralParserUtil'
// - Resolved require(996811) to 'string-literal-parser-util'
// - Renamed variable 'b' to 'nativeSymbolSupportDetector'
// - Resolved require(655222) to 'native-symbol-support-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 697404
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var arrayIsarrayPolyfill = require("array-isarray-polyfill") /*id: 332607*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var es5DefinePropertyPolyfill = require("es5-define-property-polyfill") /*id: 864373*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var stringLiteralParserUtil = require("string-literal-parser-util") /*id: 996811*/;
  var nativeSymbolSupportDetector = require("native-symbol-support-detector") /*id: 655222*/;
  var w = globalObjectPolyfill.JSON;
  var m = globalObjectPolyfill.Number;
  var x = globalObjectPolyfill.SyntaxError;
  var A = w && w.parse;
  var E = globalPolyfillAccess("Object", "keys");
  var S = Object.getOwnPropertyDescriptor;
  var O = functionBindFallback("".charAt);
  var R = functionBindFallback("".slice);
  var I = functionBindFallback(/./.exec);
  var T = functionBindFallback([].push);
  var k = /^\d$/;
  var M = /^[1-9]$/;
  var j = /^[\d-]$/;
  var D = /^[\t\n\r ]$/;
  function P(t, r) {
    var e = new U(t = symbolToStringConverter_1(t), 0, "");
    var n = e.parse();
    var o = n.value;
    var i = e.skip(D, n.end);
    if (i < t.length) {
      throw new x("Unexpected extra character: \"" + O(t, i) + "\" after the parsed data at: " + i);
    }
    if (isFunctionPolyfill(r)) {
      return _({
        "": o
      }, "", r, n);
    } else {
      return o;
    }
  }
  function _(t, r, e, n) {
    var o;
    var i;
    var a;
    var u;
    var f;
    var p = t[r];
    var d = n && p === n.value;
    var y = d && typeof n.source == "string" ? {
      source: n.source
    } : {};
    if (isObjectOrFunctionCheck(p)) {
      var g = arrayIsarrayPolyfill(p);
      var b = d ? n.nodes : g ? [] : {};
      if (g) {
        u = 0;
        o = b.length;
        a = getArrayLengthSafe(p);
        for (; u < a; u++) {
          C(p, u, _(p, "" + u, e, u < o ? b[u] : undefined));
        }
      } else {
        u = 0;
        a = getArrayLengthSafe(i = E(p));
        for (; u < a; u++) {
          C(p, f = i[u], _(p, f, e, objectHasOwnPolyfill_1(b, f) ? b[f] : undefined));
        }
      }
    }
    return callBindPolyfill(e, t, r, p, y);
  }
  function C(t, r, e) {
    if (es5PropertyDescriptorCheck) {
      var n = S(t, r);
      if (n && !n.configurable) {
        return;
      }
    }
    if (e === undefined) {
      delete t[r];
    } else {
      es5DefinePropertyPolyfill(t, r, e);
    }
  }
  function N(t, r, e, n) {
    this.value = t;
    this.end = r;
    this.source = e;
    this.nodes = n;
  }
  function U(t, r) {
    this.source = t;
    this.index = r;
  }
  U.prototype = {
    fork: function (t) {
      return new U(this.source, t);
    },
    parse: function () {
      var t = this.source;
      var r = this.skip(D, this.index);
      var e = this.fork(r);
      var n = O(t, r);
      if (I(j, n)) {
        return e.number();
      }
      switch (n) {
        case "{":
          return e.object();
        case "[":
          return e.array();
        case "\"":
          return e.string();
        case "t":
          return e.keyword(true);
        case "f":
          return e.keyword(false);
        case "n":
          return e.keyword(null);
      }
      throw new x("Unexpected character: \"" + n + "\" at: " + r);
    },
    node: function (t, r, e, n, o) {
      return new N(r, n, t ? null : R(this.source, e, n), o);
    },
    object: function () {
      var t = this.source;
      var r = this.index + 1;
      var e = false;
      var n = {};
      var o = {};
      while (r < t.length) {
        if (O(t, r = this.until(["\"", "}"], r)) === "}" && !e) {
          r++;
          break;
        }
        var i = this.fork(r).string();
        var a = i.value;
        r = i.end;
        r = this.until([":"], r) + 1;
        r = this.skip(D, r);
        es5DefinePropertyPolyfill(o, a, i = this.fork(r).parse());
        es5DefinePropertyPolyfill(n, a, i.value);
        var u = O(t, r = this.until([",", "}"], i.end));
        if (u === ",") {
          e = true;
          r++;
        } else if (u === "}") {
          r++;
          break;
        }
      }
      return this.node(1, n, this.index, r, o);
    },
    array: function () {
      var t = this.source;
      var r = this.index + 1;
      var e = false;
      var n = [];
      var o = [];
      while (r < t.length) {
        if (O(t, r = this.skip(D, r)) === "]" && !e) {
          r++;
          break;
        }
        var i = this.fork(r).parse();
        T(o, i);
        T(n, i.value);
        if (O(t, r = this.until([",", "]"], i.end)) === ",") {
          e = true;
          r++;
        } else if (O(t, r) === "]") {
          r++;
          break;
        }
      }
      return this.node(1, n, this.index, r, o);
    },
    string: function () {
      var t = this.index;
      var r = stringLiteralParserUtil(this.source, this.index + 1);
      return this.node(0, r.value, t, r.end);
    },
    number: function () {
      var t = this.source;
      var r = this.index;
      var e = r;
      if (O(t, e) === "-") {
        e++;
      }
      if (O(t, e) === "0") {
        e++;
      } else if (I(M, O(t, e))) {
        e = this.skip(k, e + 1);
      } else {
        throw new x("Failed to parse number at: " + e);
      }
      if (O(t, e) === ".") {
        e = this.skip(k, e + 1);
      }
      if ((O(t, e) === "e" || O(t, e) === "E") && ((O(t, ++e) === "+" || O(t, e) === "-") && e++, e === (e = this.skip(k, e)))) {
        throw new x("Failed to parse number's exponent value at: " + e);
      }
      return this.node(0, m(R(t, r, e)), r, e);
    },
    keyword: function (t) {
      var r = "" + t;
      var e = this.index;
      var n = e + r.length;
      if (R(this.source, e, n) !== r) {
        throw new x("Failed to parse value at: " + e);
      }
      return this.node(0, t, e, n);
    },
    skip: function (t, r) {
      for (var e = this.source; r < e.length && I(t, O(e, r)); r++);
      return r;
    },
    until: function (t, r) {
      r = this.skip(D, r);
      var e = O(this.source, r);
      var n = 0;
      for (; n < t.length; n++) {
        if (t[n] === e) {
          return r;
        }
      }
      throw new x("Unexpected character: \"" + e + "\" at: " + r);
    }
  };
  var F = tryCatchFunctionWrapper(function () {
    var t;
    var r = "9007199254740993";
    A(r, function (r, e, n) {
      t = n.source;
    });
    return t !== r;
  });
  var B = nativeSymbolSupportDetector && !tryCatchFunctionWrapper(function () {
    return 1 / A("-0 \t") != -Infinity;
  });
  polyfillPropertyDefiner({
    target: "JSON",
    stat: true,
    forced: F
  }, {
    parse: function (t, r) {
      if (B && !isFunctionPolyfill(r)) {
        return A(t);
      } else {
        return P(t, r);
      }
    }
  });
}