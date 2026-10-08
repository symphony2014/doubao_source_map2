// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'o' to 'truncateNumberToInteger'
// - Resolved require(124148) to 'truncate-number-to-integer'
// - Renamed variable 'i' to 'symbolSafeStringConverter'
// - Resolved require(227969) to 'symbol-safe-string-converter'
// - Renamed variable 'u' to 'requireObjectCoercible'
// - Resolved require(770186) to 'require-object-coercible'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 160983
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var truncateNumberToInteger = require("truncate-number-to-integer") /*id: 124148*/;
  var symbolSafeStringConverter = require("symbol-safe-string-converter") /*id: 227969*/;
  var requireObjectCoercible = require("require-object-coercible") /*id: 770186*/;
  var c = functionBindPrototypeCheckWrapper("".charAt);
  var s = functionBindPrototypeCheckWrapper("".charCodeAt);
  var f = functionBindPrototypeCheckWrapper("".slice);
  function a(t) {
    return function (r, n) {
      var e;
      var a;
      var p = symbolSafeStringConverter(requireObjectCoercible(r));
      var l = truncateNumberToInteger(n);
      var v = p.length;
      if (l < 0 || l >= v) {
        if (t) {
          return "";
        } else {
          return undefined;
        }
      } else if ((e = s(p, l)) < 55296 || e > 56319 || l + 1 === v || (a = s(p, l + 1)) < 56320 || a > 57343) {
        if (t) {
          return c(p, l);
        } else {
          return e;
        }
      } else if (t) {
        return f(p, l, l + 2);
      } else {
        return (e - 55296 << 10) + (a - 56320) + 65536;
      }
    };
  }
  module.exports = {
    codeAt: a(false),
    charAt: a(true)
  };
}