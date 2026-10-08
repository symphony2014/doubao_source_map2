// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'i' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'a' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'u' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 284526
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true
  }, {
    at: function (t) {
      var r = requireObjectNotNullish(this);
      var e = getArrayLengthSafe(r);
      var n = mathTruncPolyfill_2(t);
      var u = n >= 0 ? n : e + n;
      if (u < 0 || u >= e) {
        return undefined;
      } else {
        return r[u];
      }
    }
  });
  arrayUnscopablesDefine("at");
}