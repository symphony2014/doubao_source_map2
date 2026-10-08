// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'u' to 'checkNullOrPrimitive'
// - Resolved require(294565) to 'check-null-or-primitive'
// - Renamed variable 'a' to 'toPrimitiveWrapper'
// - Resolved require(514139) to 'to-primitive-wrapper'
// - Renamed variable 's' to 'safeStringToNumberUtil'
// - Resolved require(807200) to 'safe-string-to-number-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 165571
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var i = getIntrinsicUtil("%Number%");
  var checkNullOrPrimitive = require("check-null-or-primitive") /*id: 294565*/;
  var toPrimitiveWrapper = require("to-primitive-wrapper") /*id: 514139*/;
  var safeStringToNumberUtil = require("safe-string-to-number-util") /*id: 807200*/;
  module.exports = function (t) {
    var e = checkNullOrPrimitive(t) ? t : toPrimitiveWrapper(t, i);
    if (typeof e == "symbol") {
      throw new typeErrorConstructor("Cannot convert a Symbol value to a number");
    }
    if (typeof e == "bigint") {
      throw new typeErrorConstructor("Conversion from 'BigInt' to 'number' is not allowed.");
    }
    if (typeof e == "string") {
      return safeStringToNumberUtil(e);
    } else {
      return +e;
    }
  };
}