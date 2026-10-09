// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'a' to 'argumentLengthValidator_1'
// - Resolved require(798037) to 'argument-length-validator_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 506240
         */
module.exports = function (module, exports, require) {
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var argumentLengthValidator_1 = require("argument-length-validator_1") /*id: 798037*/;
  var u = URLSearchParams;
  var c = u.prototype;
  var f = functionBindFallback(c.append);
  var s = functionBindFallback(c.delete);
  var l = functionBindFallback(c.forEach);
  var v = functionBindFallback([].push);
  var p = new u("a=1&a=2&b=3");
  p.delete("a", 1);
  p.delete("b", undefined);
  if (p + "" != "a=2") {
    definePropertyHelper_1_1(c, "delete", function (t) {
      var r;
      var e = arguments.length;
      var n = e < 2 ? undefined : arguments[1];
      if (e && n === undefined) {
        return s(this, t);
      }
      var o = [];
      l(this, function (t, r) {
        v(o, {
          key: r,
          value: t
        });
      });
      argumentLengthValidator_1(e, 1);
      var u = symbolToStringConverter_1(t);
      var c = symbolToStringConverter_1(n);
      var p = 0;
      var h = 0;
      var d = false;
      var y = o.length;
      while (p < y) {
        r = o[p++];
        if (d || r.key === u) {
          d = true;
          s(this, r.key);
        } else {
          h++;
        }
      }
      while (h < y) {
        if ((r = o[h++]).key !== u || r.value !== c) {
          f(this, r.key, r.value);
        }
      }
    }, {
      enumerable: true,
      unsafe: true
    });
  }
}