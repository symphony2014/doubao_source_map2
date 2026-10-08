// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'getIntrinsicSafe'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Renamed variable 'i' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'u' to 'isArrayUtil_1'
// - Resolved require(528056) to 'is-array-util_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 954387
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var getIntrinsicSafe = require("get-intrinsic-safe") /*id: 187792*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var isArrayUtil_1 = require("is-array-util_1") /*id: 528056*/;
  var a = getIntrinsicUtil("%Reflect.apply%", true) || getIntrinsicSafe("Function.prototype.apply");
  module.exports = function (t, e) {
    var r = arguments.length > 2 ? arguments[2] : [];
    if (!isArrayUtil_1(r)) {
      throw new typeErrorConstructor("Assertion failed: optional `argumentsList`, if provided, must be a List");
    }
    return a(t, e, r);
  };
}