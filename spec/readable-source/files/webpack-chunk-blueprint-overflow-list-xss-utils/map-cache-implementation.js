// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'MapCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 802725
         */
module.exports = function (module, exports, require) {
  var r = require("core-js-native-check-util") /*id: 150570*/.getNativeFunction(Object, "create");
  var i = Object.prototype.hasOwnProperty;
  var o = Object.prototype.hasOwnProperty;
  function a(e) {
    var t = -1;
    var n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  a.prototype.clear = function () {
    this.__data__ = r ? r(null) : {};
    this.size = 0;
  };
  a.prototype.delete = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    this.size -= +!!t;
    return t;
  };
  a.prototype.get = function (e) {
    var t = this.__data__;
    if (r) {
      var n = t[e];
      if (n === "__lodash_hash_undefined__") {
        return undefined;
      } else {
        return n;
      }
    }
    if (i.call(t, e)) {
      return t[e];
    } else {
      return undefined;
    }
  };
  a.prototype.has = function (e) {
    var t = this.__data__;
    if (r) {
      return t[e] !== undefined;
    } else {
      return o.call(t, e);
    }
  };
  a.prototype.set = function (e, t) {
    var n = this.__data__;
    this.size += +!this.has(e);
    n[e] = r && t === undefined ? "__lodash_hash_undefined__" : t;
    return this;
  };
  var listCacheUtil = require("list-cache-util") /*id: 587706*/;
  var nativeMapConstructor = require("native-map-constructor") /*id: 331775*/;
  function c(e) {
    var t = typeof e;
    if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
      return e !== "__proto__";
    } else {
      return e === null;
    }
  }
  function l(e, t) {
    var n = e.__data__;
    if (c(t)) {
      return n[typeof t == "string" ? "string" : "hash"];
    } else {
      return n.map;
    }
  }
  function f(e) {
    var t = -1;
    var n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  f.prototype.clear = function () {
    this.size = 0;
    this.__data__ = {
      hash: new a(),
      map: new (nativeMapConstructor.NativeMap || listCacheUtil.ListCache)(),
      string: new a()
    };
  };
  f.prototype.delete = function (e) {
    var t = l(this, e).delete(e);
    this.size -= +!!t;
    return t;
  };
  f.prototype.get = function (e) {
    return l(this, e).get(e);
  };
  f.prototype.has = function (e) {
    return l(this, e).has(e);
  };
  f.prototype.set = function (e, t) {
    var n = l(this, e);
    var r = n.size;
    n.set(e, t);
    this.size += +(n.size != r);
    return this;
  };
  var h = f;
  require.d(exports, {
    MapCache: function () {
      return h;
    }
  });
}