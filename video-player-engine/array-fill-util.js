// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'l' to 'mathTruncClamp'
// - Resolved require(673993) to 'math-trunc-clamp'
// - Renamed variable 'i' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 222053
         */
module.exports = function (module, exports, require) {
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var mathTruncClamp = require("math-trunc-clamp") /*id: 673993*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  module.exports = function (U) {
    var n = requireObjectNotNullish(this);
    var F = getArrayLengthSafe(n);
    var a = arguments.length;
    var d = mathTruncClamp(a > 1 ? arguments[1] : undefined, F);
    var r = a > 2 ? arguments[2] : undefined;
    var o = r === undefined ? F : mathTruncClamp(r, F);
    while (o > d) {
      n[d++] = U;
    }
    return n;
  };
}