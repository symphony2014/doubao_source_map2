// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'safeDefineProperty_1'
// - Resolved require(630551) to 'safe-define-property_1'
// - Renamed variable 'i' to 'isExtensibleUtil'
// - Resolved require(13567) to 'is-extensible-util'
// - Renamed variable 'u' to 'isStringOrSymbol'
// - Resolved require(75503) to 'is-string-or-symbol'
// - Renamed variable 'a' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 149969
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var safeDefineProperty_1 = require("safe-define-property_1") /*id: 630551*/;
  var isExtensibleUtil = require("is-extensible-util") /*id: 13567*/;
  var isStringOrSymbol = require("is-string-or-symbol") /*id: 75503*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  module.exports = function (t, e, r, s) {
    if (!isObjectOrFunction(t)) {
      throw new typeErrorConstructor("Assertion failed: `homeObject` is not an Object");
    }
    if (!isStringOrSymbol(e)) {
      throw new typeErrorConstructor("Assertion failed: `key` is not a Property Key or a Private Name");
    }
    if (typeof r != "function") {
      throw new typeErrorConstructor("Assertion failed: `closure` is not a function");
    }
    if (typeof s != "boolean") {
      throw new typeErrorConstructor("Assertion failed: `enumerable` is not a Boolean");
    }
    if (!isExtensibleUtil(t)) {
      throw new typeErrorConstructor("Assertion failed: `homeObject` is not an ordinary, extensible object, with no non-configurable properties");
    }
    safeDefineProperty_1(t, e, {
      "[[Value]]": r,
      "[[Writable]]": true,
      "[[Enumerable]]": s,
      "[[Configurable]]": true
    });
  };
}