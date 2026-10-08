// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'definePropertyCheck'
// - Resolved require(594896) to 'define-property-check'
// - Renamed variable 'o' to 'syntaxErrorAlias'
// - Resolved require(309667) to 'syntax-error-alias'
// - Renamed variable 'i' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'u' to 'safeObjectPropertyDescriptor'
// - Resolved require(467842) to 'safe-object-property-descriptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 848618
         */
module.exports = function (module, exports, require) {
  var definePropertyCheck = require("define-property-check") /*id: 594896*/;
  var syntaxErrorAlias = require("syntax-error-alias") /*id: 309667*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var safeObjectPropertyDescriptor = require("safe-object-property-descriptor") /*id: 467842*/;
  module.exports = function (t, e, r) {
    if (!t || typeof t != "object" && typeof t != "function") {
      throw new typeErrorConstructor("`obj` must be an object or a function`");
    }
    if (typeof e != "string" && typeof e != "symbol") {
      throw new typeErrorConstructor("`property` must be a string or a symbol`");
    }
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) {
      throw new typeErrorConstructor("`nonEnumerable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) {
      throw new typeErrorConstructor("`nonWritable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) {
      throw new typeErrorConstructor("`nonConfigurable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 6 && typeof arguments[6] != "boolean") {
      throw new typeErrorConstructor("`loose`, if provided, must be a boolean");
    }
    var a = arguments.length > 3 ? arguments[3] : null;
    var s = arguments.length > 4 ? arguments[4] : null;
    var c = arguments.length > 5 ? arguments[5] : null;
    var f = arguments.length > 6 && arguments[6];
    var l = !!safeObjectPropertyDescriptor && safeObjectPropertyDescriptor(t, e);
    if (definePropertyCheck) {
      definePropertyCheck(t, e, {
        configurable: c === null && l ? l.configurable : !c,
        enumerable: a === null && l ? l.enumerable : !a,
        value: r,
        writable: s === null && l ? l.writable : !s
      });
    } else if (!f && (a || s || c)) {
      throw new syntaxErrorAlias("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    } else {
      t[e] = r;
    }
  };
}