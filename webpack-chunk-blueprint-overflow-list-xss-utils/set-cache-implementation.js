// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SetCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 776133
         */
module.exports = function (module, exports, require) {
  var mapCacheImplementation = require("map-cache-implementation") /*id: 802725*/;
  function i(e) {
    var t = -1;
    var n = e == null ? 0 : e.length;
    for (this.__data__ = new mapCacheImplementation.MapCache(); ++t < n;) {
      this.add(e[t]);
    }
  }
  i.prototype.add = i.prototype.push = function (e) {
    this.__data__.set(e, "__lodash_hash_undefined__");
    return this;
  };
  i.prototype.has = function (e) {
    return this.__data__.has(e);
  };
  var o = i;
  require.d(exports, {
    SetCache: function () {
      return o;
    }
  });
}