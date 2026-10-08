// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicSafe'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Resolved require(237121) to 'symbol-support-check_1'
// - Renamed variable 'u' to 'safeRegexTesterFactory'
// - Resolved require(973768) to 'safe-regex-tester-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 11085
         */
module.exports = function (module, exports, require) {
  var getIntrinsicSafe = require("get-intrinsic-safe") /*id: 187792*/;
  var o = getIntrinsicSafe("Object.prototype.toString");
  var i = require("symbol-support-check_1") /*id: 237121*/();
  var safeRegexTesterFactory = require("safe-regex-tester-factory") /*id: 973768*/;
  if (i) {
    var a = getIntrinsicSafe("Symbol.prototype.toString");
    var s = safeRegexTesterFactory(/^Symbol\(.*\)$/);
    module.exports = function (t) {
      if (typeof t == "symbol") {
        return true;
      }
      if (!t || typeof t != "object" || o(t) !== "[object Symbol]") {
        return false;
      }
      try {
        return typeof t.valueOf() == "symbol" && s(a(t));
      } catch (t) {
        return false;
      }
    };
  } else {
    module.exports = function (t) {
      return false;
    };
  }
}