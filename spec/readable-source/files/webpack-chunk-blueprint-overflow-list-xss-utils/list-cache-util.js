// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ListCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 587706
         */
module.exports = function (module, exports, require) {
  var isEqualUtil = require("is-equal-util") /*id: 18380*/;
  function i(e, t) {
    for (var n = e.length; n--;) {
      if (isEqualUtil.isEqual(e[n][0], t)) {
        return n;
      }
    }
    return -1;
  }
  var o = Array.prototype.splice;
  function a(e) {
    var t = -1;
    var n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  a.prototype.clear = function () {
    this.__data__ = [];
    this.size = 0;
  };
  a.prototype.delete = function (e) {
    var t = this.__data__;
    var n = i(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, true);
  };
  a.prototype.get = function (e) {
    var t = this.__data__;
    var n = i(t, e);
    if (n < 0) {
      return undefined;
    } else {
      return t[n][1];
    }
  };
  a.prototype.has = function (e) {
    return i(this.__data__, e) > -1;
  };
  a.prototype.set = function (e, t) {
    var n = this.__data__;
    var r = i(n, e);
    if (r < 0) {
      ++this.size;
      n.push([e, t]);
    } else {
      n[r][1] = t;
    }
    return this;
  };
  var s = a;
  require.d(exports, {
    ListCache: function () {
      return s;
    }
  });
}