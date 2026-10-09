// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'memoize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 565197
         */
module.exports = function (module, exports, require) {
  var mapCacheImplementation = require("map-cache-implementation") /*id: 802725*/;
  function i(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") {
      throw TypeError("Expected a function");
    }
    function n() {
      var r = arguments;
      var i = t ? t.apply(this, r) : r[0];
      var o = n.cache;
      if (o.has(i)) {
        return o.get(i);
      }
      var a = e.apply(this, r);
      n.cache = o.set(i, a) || o;
      return a;
    }
    n.cache = new (i.Cache || mapCacheImplementation.MapCache)();
    return n;
  }
  i.Cache = mapCacheImplementation.MapCache;
  exports.memoize = i;
}