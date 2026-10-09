// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'i' to 'syntaxErrorAlias'
// - Resolved require(309667) to 'syntax-error-alias'
// - Renamed variable 'u' to 'isArrayUtil_1'
// - Resolved require(528056) to 'is-array-util_1'
// - Renamed variable 'a' to 'arrayForEachUtil'
// - Resolved require(675827) to 'array-for-each-util'
// - Renamed variable 's' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// - Renamed variable 'c' to 'sideChannelSlotStore'
// - Resolved require(405467) to 'side-channel-slot-store'
// - Resolved require(747771) to 'object-proto-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 863083
         */
module.exports = function (module, exports, require) {
  var n = require("get-intrinsic-util") /*id: 120433*/("%Object.create%", true);
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var syntaxErrorAlias = require("syntax-error-alias") /*id: 309667*/;
  var isArrayUtil_1 = require("is-array-util_1") /*id: 528056*/;
  var arrayForEachUtil = require("array-for-each-util") /*id: 675827*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  var sideChannelSlotStore = require("side-channel-slot-store") /*id: 405467*/;
  var f = require("object-proto-check") /*id: 747771*/();
  module.exports = function (t) {
    if (t !== null && !isObjectOrFunction(t)) {
      throw new typeErrorConstructor("Assertion failed: `proto` must be null or an object");
    }
    var e;
    var r = arguments.length < 2 ? [] : arguments[1];
    if (!isArrayUtil_1(r)) {
      throw new typeErrorConstructor("Assertion failed: `additionalInternalSlotsList` must be an Array");
    }
    if (n) {
      e = n(t);
    } else if (f) {
      e = {
        __proto__: t
      };
    } else {
      if (t === null) {
        throw new syntaxErrorAlias("native Object.create support is required to create null objects");
      }
      function l() {}
      l.prototype = t;
      e = new l();
    }
    if (r.length > 0) {
      arrayForEachUtil(r, function (t) {
        sideChannelSlotStore.set(e, t, undefined);
      });
    }
    return e;
  };
}