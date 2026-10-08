// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'polyfillArrayFlatRecursive'
// - Resolved require(988040) to 'polyfill-array-flat-recursive'
// - Renamed variable 'i' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'a' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'u' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'c' to 'arraySpeciesCreate'
// - Resolved require(279621) to 'array-species-create'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 259213
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var polyfillArrayFlatRecursive = require("polyfill-array-flat-recursive") /*id: 988040*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var arraySpeciesCreate = require("array-species-create") /*id: 279621*/;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true
  }, {
    flat: function () {
      var t = arguments.length ? arguments[0] : undefined;
      var r = requireObjectNotNullish(this);
      var e = getArrayLengthSafe(r);
      var n = arraySpeciesCreate(r, 0);
      n.length = polyfillArrayFlatRecursive(n, r, r, e, 0, t === undefined ? 1 : mathTruncPolyfill_2(t));
      return n;
    }
  });
}