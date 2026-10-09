// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'l' to 'mathTruncClamp'
// - Resolved require(673993) to 'math-trunc-clamp'
// - Renamed variable 'i' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'a' to 'assertPropertyDelete'
// - Resolved require(240579) to 'assert-property-delete'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 380917
         */
module.exports = function (module, exports, require) {
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var mathTruncClamp = require("math-trunc-clamp") /*id: 673993*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var assertPropertyDelete = require("assert-property-delete") /*id: 240579*/;
  var d = Math.min;
  module.exports = [].copyWithin || function (U, n) {
    var F = requireObjectNotNullish(this);
    var r = getArrayLengthSafe(F);
    var o = mathTruncClamp(U, r);
    var B = mathTruncClamp(n, r);
    var R = arguments.length > 2 ? arguments[2] : undefined;
    var c = d((R === undefined ? r : mathTruncClamp(R, r)) - B, r - o);
    var s = 1;
    for (B < o && o < B + c && (s = -1, B += c - 1, o += c - 1); c-- > 0;) {
      if (B in F) {
        F[o] = F[B];
      } else {
        assertPropertyDelete(F, o);
      }
      o += s;
      B += s;
    }
    return F;
  };
}