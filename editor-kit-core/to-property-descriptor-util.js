// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'boundHasOwnPropertyUtil'
// - Resolved require(495924) to 'bound-has-own-property-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'i' to 'isCallableUtilReexport'
// - Resolved require(897221) to 'is-callable-util-reexport'
// - Renamed variable 'u' to 'booleanCastUtil'
// - Resolved require(263752) to 'boolean-cast-util'
// - Renamed variable 'a' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 360812
         */
module.exports = function (module, exports, require) {
  var boundHasOwnPropertyUtil = require("bound-has-own-property-util") /*id: 495924*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var isCallableUtilReexport = require("is-callable-util-reexport") /*id: 897221*/;
  var booleanCastUtil = require("boolean-cast-util") /*id: 263752*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  module.exports = function (t) {
    if (!isObjectOrFunction(t)) {
      throw new typeErrorConstructor("ToPropertyDescriptor requires an object");
    }
    var e = {};
    if (boundHasOwnPropertyUtil(t, "enumerable")) {
      e["[[Enumerable]]"] = booleanCastUtil(t.enumerable);
    }
    if (boundHasOwnPropertyUtil(t, "configurable")) {
      e["[[Configurable]]"] = booleanCastUtil(t.configurable);
    }
    if (boundHasOwnPropertyUtil(t, "value")) {
      e["[[Value]]"] = t.value;
    }
    if (boundHasOwnPropertyUtil(t, "writable")) {
      e["[[Writable]]"] = booleanCastUtil(t.writable);
    }
    if (boundHasOwnPropertyUtil(t, "get")) {
      var r = t.get;
      if (r !== undefined && !isCallableUtilReexport(r)) {
        throw new typeErrorConstructor("getter must be a function");
      }
      e["[[Get]]"] = r;
    }
    if (boundHasOwnPropertyUtil(t, "set")) {
      var s = t.set;
      if (s !== undefined && !isCallableUtilReexport(s)) {
        throw new typeErrorConstructor("setter must be a function");
      }
      e["[[Set]]"] = s;
    }
    if ((boundHasOwnPropertyUtil(e, "[[Get]]") || boundHasOwnPropertyUtil(e, "[[Set]]")) && (boundHasOwnPropertyUtil(e, "[[Value]]") || boundHasOwnPropertyUtil(e, "[[Writable]]"))) {
      throw new typeErrorConstructor("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
    }
    return e;
  };
}