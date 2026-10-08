// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'filterObjectByPaths'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 777489
         */
module.exports = function (module, exports, require) {
  var objectPathGetUtil = require("object-path-get-util") /*id: 55071*/;
  var safeObjectSetUtil = require("safe-object-set-util") /*id: 602113*/;
  var pathCastUtil = require("path-cast-util") /*id: 539693*/;
  exports.filterObjectByPaths = function (e, t, n) {
    var a = -1;
    var s = t.length;
    var u = {};
    while (++a < s) {
      var c = t[a];
      var l = objectPathGetUtil.getObjectPath(e, c);
      if (n(l, c)) {
        safeObjectSetUtil.safeObjectSet(u, pathCastUtil.castPath(c, e), l);
      }
    }
    return u;
  };
}