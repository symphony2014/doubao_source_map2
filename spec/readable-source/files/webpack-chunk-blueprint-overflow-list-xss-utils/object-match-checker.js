// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'matchesObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 334875
         */
module.exports = function (module, exports, require) {
  var mapCacheImplementation_1 = require("map-cache-implementation_1") /*id: 215370*/;
  var deepEqualCore = require("deep-equal-core") /*id: 489806*/;
  exports.matchesObject = function (e, t, n, o) {
    var a = n.length;
    var s = a;
    var u = !o;
    if (e == null) {
      return !s;
    }
    for (e = Object(e); a--;) {
      var c = n[a];
      if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) {
        return false;
      }
    }
    while (++a < s) {
      var l = (c = n[a])[0];
      var f = e[l];
      var h = c[1];
      if (u && c[2]) {
        if (f === undefined && !(l in e)) {
          return false;
        }
      } else {
        var d = new mapCacheImplementation_1.MapCache();
        if (o) {
          var p = o(f, h, l, e, t, d);
        }
        if (!(p === undefined ? deepEqualCore.isEqual(h, f, 3, o, d) : p)) {
          return false;
        }
      }
    }
    return true;
  };
}