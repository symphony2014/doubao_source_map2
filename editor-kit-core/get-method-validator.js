// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'safePropertyAccessUtil'
// - Resolved require(227224) to 'safe-property-access-util'
// - Renamed variable 'i' to 'isCallableUtilReexport'
// - Resolved require(897221) to 'is-callable-util-reexport'
// - Renamed variable 'u' to 'isStringOrSymbol'
// - Resolved require(75503) to 'is-string-or-symbol'
// - Renamed variable 'a' to 'objectInspectImpl'
// - Resolved require(565505) to 'object-inspect-impl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 229866
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var safePropertyAccessUtil = require("safe-property-access-util") /*id: 227224*/;
  var isCallableUtilReexport = require("is-callable-util-reexport") /*id: 897221*/;
  var isStringOrSymbol = require("is-string-or-symbol") /*id: 75503*/;
  var objectInspectImpl = require("object-inspect-impl") /*id: 565505*/;
  module.exports = function (t, e) {
    if (!isStringOrSymbol(e)) {
      throw new typeErrorConstructor("Assertion failed: IsPropertyKey(P) is not true");
    }
    var r = safePropertyAccessUtil(t, e);
    if (r != null) {
      if (!isCallableUtilReexport(r)) {
        throw new typeErrorConstructor(objectInspectImpl(e) + " is not a function: " + objectInspectImpl(r));
      }
      return r;
    }
  };
}