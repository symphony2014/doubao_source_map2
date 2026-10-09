// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'isArgumentsCheck'
// - Resolved require(944999) to 'is-arguments-check'
// - Resolved require(180097) to 'object-keys-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 603065
         */
module.exports = function (module, exports, require) {
  var n = Array.prototype.slice;
  var isArgumentsCheck = require("is-arguments-check") /*id: 944999*/;
  var i = Object.keys;
  var u = i ? function (t) {
    return i(t);
  } : require("object-keys-polyfill_1") /*id: 180097*/;
  var a = Object.keys;
  u.shim = function () {
    if (Object.keys) {
      if (!function () {
        var t = Object.keys(arguments);
        return t && t.length === arguments.length;
      }(1, 2)) {
        Object.keys = function (t) {
          if (isArgumentsCheck(t)) {
            return a(n.call(t));
          } else {
            return a(t);
          }
        };
      }
    } else {
      Object.keys = u;
    }
    return Object.keys || u;
  };
  module.exports = u;
}