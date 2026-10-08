// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'sourceMapPathUtil'
// - Resolved require(919725) to 'source-map-path-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53224.ebaf78df.js
         * chunkId: 53224
         * moduleId: 3276
         */
module.exports = function (module, exports, require) {
  var sourceMapPathUtil = require("source-map-path-util") /*id: 919725*/;
  var i = Object.prototype.hasOwnProperty;
  var o = typeof Map != "undefined";
  function a() {
    this._array = [];
    this._set = o ? new Map() : Object.create(null);
  }
  a.fromArray = function (e, t) {
    var n = new a();
    var r = 0;
    var i = e.length;
    for (; r < i; r++) {
      n.add(e[r], t);
    }
    return n;
  };
  a.prototype.size = function () {
    if (o) {
      return this._set.size;
    } else {
      return Object.getOwnPropertyNames(this._set).length;
    }
  };
  a.prototype.add = function (e, t) {
    var n = o ? e : sourceMapPathUtil.toSetString(e);
    var a = o ? this.has(e) : i.call(this._set, n);
    var s = this._array.length;
    if (!a || t) {
      this._array.push(e);
    }
    if (!a) {
      if (o) {
        this._set.set(e, s);
      } else {
        this._set[n] = s;
      }
    }
  };
  a.prototype.has = function (e) {
    if (o) {
      return this._set.has(e);
    }
    var t = sourceMapPathUtil.toSetString(e);
    return i.call(this._set, t);
  };
  a.prototype.indexOf = function (e) {
    if (o) {
      var t = this._set.get(e);
      if (t >= 0) {
        return t;
      }
    } else {
      var n = sourceMapPathUtil.toSetString(e);
      if (i.call(this._set, n)) {
        return this._set[n];
      }
    }
    throw Error("\"" + e + "\" is not in the set.");
  };
  a.prototype.at = function (e) {
    if (e >= 0 && e < this._array.length) {
      return this._array[e];
    }
    throw Error("No element indexed by " + e);
  };
  a.prototype.toArray = function () {
    return this._array.slice();
  };
  exports.ArraySet = a;
}