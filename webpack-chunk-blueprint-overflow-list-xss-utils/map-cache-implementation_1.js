// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'MapCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 215370
         */
module.exports = function (module, exports, require) {
  var listCacheUtil = require("list-cache-util") /*id: 587706*/;
  var nativeMapConstructor = require("native-map-constructor") /*id: 331775*/;
  var mapCacheImplementation = require("map-cache-implementation") /*id: 802725*/;
  function a(e) {
    var t = this.__data__ = new listCacheUtil.ListCache(e);
    this.size = t.size;
  }
  a.prototype.clear = function () {
    this.__data__ = new listCacheUtil.ListCache();
    this.size = 0;
  };
  a.prototype.delete = function (e) {
    var t = this.__data__;
    var n = t.delete(e);
    this.size = t.size;
    return n;
  };
  a.prototype.get = function (e) {
    return this.__data__.get(e);
  };
  a.prototype.has = function (e) {
    return this.__data__.has(e);
  };
  a.prototype.set = function (e, t) {
    var n = this.__data__;
    if (n instanceof listCacheUtil.ListCache) {
      var a = n.__data__;
      if (!nativeMapConstructor.NativeMap || a.length < 199) {
        a.push([e, t]);
        this.size = ++n.size;
        return this;
      }
      n = this.__data__ = new mapCacheImplementation.MapCache(a);
    }
    n.set(e, t);
    this.size = n.size;
    return this;
  };
  var s = a;
  require.d(exports, {
    MapCache: function () {
      return s;
    }
  });
}