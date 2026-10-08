// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 363061
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var a = "Invalid number representation";
  var u = RangeError;
  var c = SyntaxError;
  var f = TypeError;
  var s = parseInt;
  var l = Math.pow;
  var v = /^[\d.a-z]+$/;
  var p = functionBindFallback("".charAt);
  var h = functionBindFallback(v.exec);
  var d = functionBindFallback(1 .toString);
  var y = functionBindFallback("".slice);
  var g = functionBindFallback("".split);
  polyfillPropertyDefiner({
    target: "Number",
    stat: true,
    forced: true
  }, {
    fromString: function (t, r) {
      var e = 1;
      if (typeof t != "string") {
        throw new f(a);
      }
      if (!t.length || p(t, 0) === "-" && (e = -1, !(t = y(t, 1)).length)) {
        throw new c(a);
      }
      var n = r === undefined ? 10 : mathTruncPolyfill_2(r);
      if (n < 2 || n > 36) {
        throw new u("Invalid radix");
      }
      if (!h(v, t)) {
        throw new c(a);
      }
      var o = g(t, ".");
      var b = s(o[0], n);
      if (o.length > 1) {
        b += s(o[1], n) / l(n, o[1].length);
      }
      if (n === 10 && d(b, n) !== t) {
        throw new c(a);
      }
      return e * b;
    }
  });
}