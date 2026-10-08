// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'compileTemplate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 128013
         */
module.exports = function (module, exports, require) {
  var safePropertyAssign = require("safe-property-assign") /*id: 182115*/;
  var throttledArgVerifyUtil = require("throttled-arg-verify-util") /*id: 680343*/;
  var getOwnKeysUtil_1 = require("get-own-keys-util_1") /*id: 144417*/;
  var a = throttledArgVerifyUtil.throttledArgVerify(function (t, e, n, r) {
    safePropertyAssign.safePropAssign(e, getOwnKeysUtil_1.getOwnKeys(e), t, r);
  });
  var functionCallHelper = require("function-call-helper") /*id: 296477*/;
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  var u = throttledArgStringUtil.throttledStringify(function (t, e) {
    try {
      return functionCallHelper.callHelper(t, undefined, e);
    } catch (t) {
      if (isErrorUtil.isError(t)) {
        return t;
      } else {
        return Error(t);
      }
    }
  });
  var arrayToValuesUtil = require("array-to-values-util") /*id: 726066*/;
  var isEqualUtil = require("is-equal-util") /*id: 18380*/;
  var d = Object.prototype;
  var f = d.hasOwnProperty;
  function g(t, e, n, i) {
    if (t === undefined || isEqualUtil.isEqual(t, d[n]) && !f.call(i, n)) {
      return e;
    } else {
      return t;
    }
  }
  var y = {
    "\\": "\\",
    "'": "'",
    "\n": "n",
    "\r": "r",
    "\u2028": "u2028",
    "\u2029": "u2029"
  };
  function v(t) {
    return "\\" + y[t];
  }
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var _ = /<%=([\s\S]+?)%>/g;
  var b = {
    escape: /<%-([\s\S]+?)%>/g,
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: _,
    variable: "",
    imports: {
      _: {
        escape: require("html-escape-util_2") /*id: 381642*/.escapeHtml
      }
    }
  };
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  var S = /\b__p \+= '';/g;
  var A = /\b(__p \+=) '' \+/g;
  var E = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
  var k = /[()=,{}\[\]\/\s]/;
  var M = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
  var P = /($^)/;
  var O = /['\n\r\u2028\u2029\\]/g;
  var C = Object.prototype.hasOwnProperty;
  function T(t, e, n) {
    var i = b.imports._.templateSettings || b;
    if (n && verifyPropertyMatch.checkPropertyValue(t, e, n)) {
      e = undefined;
    }
    t = safeValueToStringUtil.safeToString(t);
    e = a({}, e, i, g);
    var r;
    var o;
    var s = a({}, e.imports, i.imports, g);
    var h = getOwnKeys.getOwnKeys(s);
    var p = arrayToValuesUtil.mapArrayValues(s, h);
    var d = 0;
    var f = e.interpolate || P;
    var y = "__p += '";
    var T = RegExp((e.escape || P).source + "|" + f.source + "|" + (f === _ ? M : P).source + "|" + (e.evaluate || P).source + "|$", "g");
    var I = C.call(e, "sourceURL") ? "//# sourceURL=" + (e.sourceURL + "").replace(/\s/g, " ") + "\n" : "";
    t.replace(T, function (e, n, i, a, s, h) {
      i ||= a;
      y += t.slice(d, h).replace(O, v);
      if (n) {
        r = true;
        y += "' +\n__e(" + n + ") +\n'";
      }
      if (s) {
        o = true;
        y += "';\n" + s + ";\n__p += '";
      }
      if (i) {
        y += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'";
      }
      d = h + e.length;
      return e;
    });
    y += "';\n";
    var Z = C.call(e, "variable") && e.variable;
    if (Z) {
      if (k.test(Z)) {
        throw Error("Invalid `variable` option passed into `_.template`");
      }
    } else {
      y = "with (obj) {\n" + y + "\n}\n";
    }
    y = (o ? y.replace(S, "") : y).replace(A, "$1").replace(E, "$1;");
    y = "function(" + (Z || "obj") + ") {\n" + (Z ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (r ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + y + "return __p\n}";
    var L = u(function () {
      return Function(h, I + "return " + y).apply(undefined, p);
    });
    L.source = y;
    if (isErrorUtil.isError(L)) {
      throw L;
    }
    return L;
  }
  require.d(exports, {
    compileTemplate: function () {
      return T;
    }
  });
}