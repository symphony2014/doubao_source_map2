// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'o' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'i' to 'stringToArrayPolyfill'
// - Resolved require(826790) to 'string-to-array-polyfill'
// - Renamed variable 'a' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 20634
         */
module.exports = function (module, exports, require) {
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var stringToArrayPolyfill = require("string-to-array-polyfill") /*id: 826790*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var u = TypeError;
  var c = "Reduce of empty array with no initial value";
  function f(t) {
    return function (r, e, f, s) {
      var l = requireObjectNotNullish(r);
      var v = stringToArrayPolyfill(l);
      var p = getArrayLengthSafe(l);
      functionValidator(e);
      if (p === 0 && f < 2) {
        throw new u(c);
      }
      var h = t ? p - 1 : 0;
      var d = t ? -1 : 1;
      if (f < 2) {
        while (true) {
          if (h in v) {
            s = v[h];
            h += d;
            break;
          }
          h += d;
          if (t ? h < 0 : p <= h) {
            throw new u(c);
          }
        }
      }
      for (; t ? h >= 0 : p > h; h += d) {
        if (h in v) {
          s = e(s, v[h], h, l);
        }
      }
      return s;
    };
  }
  module.exports = {
    left: f(false),
    right: f(true)
  };
}