// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicSafe'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Resolved require(708085) to 'symbol-to-string-tag-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 908897
         */
module.exports = function (module, exports, require) {
  var getIntrinsicSafe = require("get-intrinsic-safe") /*id: 187792*/;
  var o = getIntrinsicSafe("Date.prototype.getDay");
  function i(t) {
    try {
      o(t);
      return true;
    } catch (t) {
      return false;
    }
  }
  var u = getIntrinsicSafe("Object.prototype.toString");
  var a = require("symbol-to-string-tag-check") /*id: 708085*/();
  module.exports = function (t) {
    return typeof t == "object" && t !== null && (a ? i(t) : u(t) === "[object Date]");
  };
}