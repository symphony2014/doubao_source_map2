// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'isStringOrSymbol'
// - Resolved require(75503) to 'is-string-or-symbol'
// - Renamed variable 'i' to 'sameValueEqual'
// - Resolved require(253094) to 'same-value-equal'
// - Renamed variable 'u' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 755146
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var isStringOrSymbol = require("is-string-or-symbol") /*id: 75503*/;
  var sameValueEqual = require("same-value-equal") /*id: 253094*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  var a = function () {
    try {
      delete [].length;
      return true;
    } catch (t) {
      return false;
    }
  }();
  module.exports = function (t, e, r, s) {
    if (!isObjectOrFunction(t)) {
      throw new typeErrorConstructor("Assertion failed: `O` must be an Object");
    }
    if (!isStringOrSymbol(e)) {
      throw new typeErrorConstructor("Assertion failed: `P` must be a Property Key");
    }
    if (typeof s != "boolean") {
      throw new typeErrorConstructor("Assertion failed: `Throw` must be a Boolean");
    }
    if (s) {
      t[e] = r;
      if (a && !sameValueEqual(t[e], r)) {
        throw new typeErrorConstructor("Attempted to assign to readonly property.");
      }
      return true;
    }
    try {
      t[e] = r;
      return !a || sameValueEqual(t[e], r);
    } catch (t) {
      return false;
    }
  };
}