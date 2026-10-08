// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Renamed variable 'i' to 'functionApplyUtil'
// - Resolved require(954387) to 'function-apply-util'
// - Renamed variable 'u' to 'objectPropertyGetter_1'
// - Resolved require(91546) to 'object-property-getter_1'
// - Renamed variable 'a' to 'isCallableUtilReexport'
// - Resolved require(897221) to 'is-callable-util-reexport'
// - Renamed variable 's' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 184438
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var o = require("get-intrinsic-safe") /*id: 187792*/("RegExp.prototype.exec");
  var functionApplyUtil = require("function-apply-util") /*id: 954387*/;
  var objectPropertyGetter_1 = require("object-property-getter_1") /*id: 91546*/;
  var isCallableUtilReexport = require("is-callable-util-reexport") /*id: 897221*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  module.exports = function (t, e) {
    if (!isObjectOrFunction(t)) {
      throw new typeErrorConstructor("Assertion failed: `R` must be an Object");
    }
    if (typeof e != "string") {
      throw new typeErrorConstructor("Assertion failed: `S` must be a String");
    }
    var r = objectPropertyGetter_1(t, "exec");
    if (isCallableUtilReexport(r)) {
      var c = functionApplyUtil(r, t, [e]);
      if (c === null || isObjectOrFunction(c)) {
        return c;
      }
      throw new typeErrorConstructor("\"exec\" method must return `null` or an Object");
    }
    return o(t, e);
  };
}