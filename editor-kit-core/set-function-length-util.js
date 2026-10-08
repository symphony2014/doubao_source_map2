// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'definePropertySafeUtil'
// - Resolved require(848618) to 'define-property-safe-util'
// - Resolved require(642274) to 'define-property-check_1'
// - Renamed variable 'u' to 'safeObjectPropertyDescriptor'
// - Resolved require(467842) to 'safe-object-property-descriptor'
// - Renamed variable 'a' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 550480
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var definePropertySafeUtil = require("define-property-safe-util") /*id: 848618*/;
  var i = require("define-property-check_1") /*id: 642274*/();
  var safeObjectPropertyDescriptor = require("safe-object-property-descriptor") /*id: 467842*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var s = getIntrinsicUtil("%Math.floor%");
  module.exports = function (t, e) {
    if (typeof t != "function") {
      throw new typeErrorConstructor("`fn` is not a function");
    }
    if (typeof e != "number" || e < 0 || e > 4294967295 || s(e) !== e) {
      throw new typeErrorConstructor("`length` must be a positive 32-bit integer");
    }
    var r = arguments.length > 2 && !!arguments[2];
    var n = true;
    var c = true;
    if ("length" in t && safeObjectPropertyDescriptor) {
      var f = safeObjectPropertyDescriptor(t, "length");
      if (f && !f.configurable) {
        n = false;
      }
      if (f && !f.writable) {
        c = false;
      }
    }
    if (n || c || !r) {
      if (i) {
        definePropertySafeUtil(t, "length", e, true, true);
      } else {
        definePropertySafeUtil(t, "length", e);
      }
    }
    return t;
  };
}