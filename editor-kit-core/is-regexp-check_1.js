// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'getIntrinsicSafe'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Resolved require(708085) to 'symbol-to-string-tag-check'
// - Renamed variable 'u' to 'boundHasOwnPropertyUtil'
// - Resolved require(495924) to 'bound-has-own-property-util'
// - Renamed variable 'a' to 'safeObjectPropertyDescriptor'
// - Resolved require(467842) to 'safe-object-property-descriptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 655670
         */
module.exports = function (module, exports, require) {
  var n;
  var getIntrinsicSafe = require("get-intrinsic-safe") /*id: 187792*/;
  var i = require("symbol-to-string-tag-check") /*id: 708085*/();
  var boundHasOwnPropertyUtil = require("bound-has-own-property-util") /*id: 495924*/;
  var safeObjectPropertyDescriptor = require("safe-object-property-descriptor") /*id: 467842*/;
  if (i) {
    var s = getIntrinsicSafe("RegExp.prototype.exec");
    var c = {};
    function f() {
      throw c;
    }
    var l = {
      toString: f,
      valueOf: f
    };
    if (typeof Symbol.toPrimitive == "symbol") {
      l[Symbol.toPrimitive] = f;
    }
    n = function (t) {
      if (!t || typeof t != "object") {
        return false;
      }
      var e = safeObjectPropertyDescriptor(t, "lastIndex");
      if (!e || !boundHasOwnPropertyUtil(e, "value")) {
        return false;
      }
      try {
        s(t, l);
      } catch (t) {
        return t === c;
      }
    };
  } else {
    var p = getIntrinsicSafe("Object.prototype.toString");
    n = function (t) {
      return !!t && (typeof t == "object" || typeof t == "function") && p(t) === "[object RegExp]";
    };
  }
  module.exports = n;
}