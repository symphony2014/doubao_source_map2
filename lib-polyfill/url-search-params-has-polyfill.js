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
         * moduleId: 493580
         */
module.exports = function (module, exports, require) {
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var argumentLengthValidator_1 = require("argument-length-validator_1") /*id: 798037*/;
  var u = URLSearchParams;
  var c = u.prototype;
  var f = functionBindFallback(c.getAll);
  var s = functionBindFallback(c.has);
  var l = new u("a=1");
  if (l.has("a", 2) || !l.has("a", undefined)) {
    definePropertyHelper_1_1(c, "has", function (t) {
      var r = arguments.length;
      var e = r < 2 ? undefined : arguments[1];
      if (r && e === undefined) {
        return s(this, t);
      }
      var n = f(this, t);
      argumentLengthValidator_1(r, 1);
      var o = symbolToStringConverter_1(e);
      var u = 0;
      while (u < n.length) {
        if (n[u++] === o) {
          return true;
        }
      }
      return false;
    }, {
      enumerable: true,
      unsafe: true
    });
  }
}