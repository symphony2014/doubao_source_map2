// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'objectInspectImpl'
// - Resolved require(565505) to 'object-inspect-impl'
// - Renamed variable 'i' to 'isStringOrSymbol'
// - Resolved require(75503) to 'is-string-or-symbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 227224
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var objectInspectImpl = require("object-inspect-impl") /*id: 565505*/;
  var isStringOrSymbol = require("is-string-or-symbol") /*id: 75503*/;
  module.exports = function (t, e) {
    if (!isStringOrSymbol(e)) {
      throw new typeErrorConstructor("Assertion failed: IsPropertyKey(P) is not true, got " + objectInspectImpl(e));
    }
    return t[e];
  };
}