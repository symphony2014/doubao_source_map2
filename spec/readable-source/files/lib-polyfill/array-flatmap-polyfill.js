// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'polyfillArrayFlatRecursive'
// - Resolved require(988040) to 'polyfill-array-flat-recursive'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'u' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'c' to 'arraySpeciesCreate'
// - Resolved require(279621) to 'array-species-create'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 405896
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var polyfillArrayFlatRecursive = require("polyfill-array-flat-recursive") /*id: 988040*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var arraySpeciesCreate = require("array-species-create") /*id: 279621*/;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true
  }, {
    flatMap: function (t) {
      var r;
      var e = requireObjectNotNullish(this);
      var n = getArrayLengthSafe(e);
      functionValidator(t);
      (r = arraySpeciesCreate(e, 0)).length = polyfillArrayFlatRecursive(r, e, e, n, 0, 1, t, arguments.length > 1 ? arguments[1] : undefined);
      return r;
    }
  });
}