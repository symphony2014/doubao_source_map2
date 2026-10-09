// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'i' to 'isConstructorUtil'
// - Resolved require(356118) to 'is-constructor-util'
// - Renamed variable 'u' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 420453
         */
module.exports = function (module, exports, require) {
  var n = require("get-intrinsic-util") /*id: 120433*/("%Symbol.species%", true);
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var isConstructorUtil = require("is-constructor-util") /*id: 356118*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  module.exports = function (t, e) {
    if (!isObjectOrFunction(t)) {
      throw new typeErrorConstructor("Assertion failed: Type(O) is not Object");
    }
    var r = t.constructor;
    if (r === undefined) {
      return e;
    }
    if (!isObjectOrFunction(r)) {
      throw new typeErrorConstructor("O.constructor is not an Object");
    }
    var a = n ? r[n] : undefined;
    if (a == null) {
      return e;
    }
    if (isConstructorUtil(a)) {
      return a;
    }
    throw new typeErrorConstructor("no constructor found");
  };
}