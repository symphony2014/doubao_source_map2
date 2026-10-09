// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'objectExtensibilityPolyfillCheck'
// - Resolved require(866540) to 'object-extensibility-polyfill-check'
// - Renamed variable 'i' to 'jsonRawJsonSupportCheck'
// - Resolved require(685980) to 'json-raw-json-support-check'
// - Renamed variable 'a' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'u' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'c' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'f' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 's' to 'isRawJsonTypeCheck'
// - Resolved require(92553) to 'is-raw-json-type-check'
// - Renamed variable 'l' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'v' to 'es5DefinePropertyPolyfill'
// - Resolved require(864373) to 'es5-define-property-polyfill'
// - Renamed variable 'p' to 'stringLiteralParserUtil'
// - Resolved require(996811) to 'string-literal-parser-util'
// - Renamed variable 'h' to 'arrayToValidatorFunction'
// - Resolved require(180627) to 'array-to-validator-function'
// - Renamed variable 'd' to 'symbolDescriptionGenerator'
// - Resolved require(556893) to 'symbol-description-generator'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 188972
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var objectExtensibilityPolyfillCheck = require("object-extensibility-polyfill-check") /*id: 866540*/;
  var jsonRawJsonSupportCheck = require("json-raw-json-support-check") /*id: 685980*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isRawJsonTypeCheck = require("is-raw-json-type-check") /*id: 92553*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var es5DefinePropertyPolyfill = require("es5-define-property-polyfill") /*id: 864373*/;
  var stringLiteralParserUtil = require("string-literal-parser-util") /*id: 996811*/;
  var arrayToValidatorFunction = require("array-to-validator-function") /*id: 180627*/;
  var symbolDescriptionGenerator = require("symbol-description-generator") /*id: 556893*/;
  var y = require("object-state-manager") /*id: 488732*/.set;
  var g = String;
  var b = SyntaxError;
  var w = globalPolyfillAccess("JSON", "parse");
  var m = globalPolyfillAccess("JSON", "stringify");
  var x = globalPolyfillAccess("Object", "create");
  var A = globalPolyfillAccess("Object", "freeze");
  var E = functionBindFallback("".charAt);
  var S = functionBindFallback("".slice);
  var O = functionBindFallback([].push);
  var R = symbolDescriptionGenerator();
  var I = R.length;
  var T = "Unacceptable as raw JSON";
  function k(t) {
    return t === " " || t === "\t" || t === "\n" || t === "\r";
  }
  polyfillPropertyDefiner({
    target: "JSON",
    stat: true,
    forced: !jsonRawJsonSupportCheck
  }, {
    rawJSON: function (t) {
      var r = symbolToStringConverter_1(t);
      if (r === "" || k(E(r, 0)) || k(E(r, r.length - 1))) {
        throw new b(T);
      }
      var e = w(r);
      if (typeof e == "object" && e !== null) {
        throw new b(T);
      }
      var n = x(null);
      y(n, {
        type: "RawJSON"
      });
      es5DefinePropertyPolyfill(n, "rawJSON", r);
      if (objectExtensibilityPolyfillCheck) {
        return A(n);
      } else {
        return n;
      }
    }
  });
  if (m) {
    polyfillPropertyDefiner({
      target: "JSON",
      stat: true,
      arity: 3,
      forced: !jsonRawJsonSupportCheck
    }, {
      stringify: function (t, r, e) {
        var n = arrayToValidatorFunction(r);
        var o = [];
        var i = m(t, function (t, r) {
          var e = isFunctionPolyfill(n) ? callBindPolyfill(n, this, g(t), r) : r;
          if (isRawJsonTypeCheck(e)) {
            return R + (O(o, e.rawJSON) - 1);
          } else {
            return e;
          }
        }, e);
        if (typeof i != "string") {
          return i;
        }
        var a = "";
        var c = i.length;
        var l = 0;
        for (; l < c; l++) {
          var v = E(i, l);
          if (v === "\"") {
            var d = stringLiteralParserUtil(i, ++l).end - 1;
            var y = S(i, l, d);
            a += S(y, 0, I) === R ? o[S(y, I)] : "\"" + y + "\"";
            l = d;
          } else {
            a += v;
          }
        }
        return a;
      }
    });
  }
}