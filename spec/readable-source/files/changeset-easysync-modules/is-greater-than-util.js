// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isGreaterThan'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 747639
         */
module.exports = function (module, exports, require) {
  var r;
  var greaterThanUtil = require("greater-than-util") /*id: 166954*/;
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  r = greaterThanUtil.isGreaterThan;
  function s(t, e) {
    if (typeof t != "string" || typeof e != "string") {
      t = toNumberUtil_1.toNumber(t);
      e = toNumberUtil_1.toNumber(e);
    }
    return r(t, e);
  }
  require.d(exports, {
    isGreaterThan: function () {
      return s;
    }
  });
}