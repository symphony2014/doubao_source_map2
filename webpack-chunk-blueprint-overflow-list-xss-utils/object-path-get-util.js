// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getObjectPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 55071
         */
module.exports = function (module, exports, require) {
  var pathCastUtil = require("path-cast-util") /*id: 539693*/;
  var valueToStringUtil_1 = require("value-to-string-util_1") /*id: 59353*/;
  exports.getObjectPath = function (e, t) {
    t = pathCastUtil.castPath(t, e);
    var n = 0;
    var o = t.length;
    while (e != null && n < o) {
      e = e[valueToStringUtil_1.valueToString(t[n++])];
    }
    if (n && n == o) {
      return e;
    } else {
      return undefined;
    }
  };
}