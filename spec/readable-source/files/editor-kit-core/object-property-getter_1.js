// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'objectInspectImpl'
// - Resolved require(565505) to 'object-inspect-impl'
// - Renamed variable 'i' to 'isStringOrSymbol'
// - Resolved require(75503) to 'is-string-or-symbol'
// - Renamed variable 'u' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 91546
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var objectInspectImpl = require("object-inspect-impl") /*id: 565505*/;
  var isStringOrSymbol = require("is-string-or-symbol") /*id: 75503*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  module.exports = function (t, e) {
    if (!isObjectOrFunction(t)) {
      throw new typeErrorConstructor("Assertion failed: Type(O) is not Object");
    }
    if (!isStringOrSymbol(e)) {
      throw new typeErrorConstructor("Assertion failed: IsPropertyKey(P) is not true, got " + objectInspectImpl(e));
    }
    return t[e];
  };
}