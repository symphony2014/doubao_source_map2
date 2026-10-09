// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 695211
         */
module.exports = function (module, exports, require) {
  function t() {
    this._listeners = {};
  }
  module.exports = t;
  t.prototype.on = function (e, t, r) {
    (this._listeners[e] ||= []).push({
      fn: t,
      ctx: r || this
    });
    return this;
  };
  t.prototype.off = function (e, t) {
    if (e === undefined) {
      this._listeners = {};
    } else if (t === undefined) {
      this._listeners[e] = [];
    } else {
      var r = this._listeners[e];
      var n = 0;
      while (n < r.length) {
        if (r[n].fn === t) {
          r.splice(n, 1);
        } else {
          ++n;
        }
      }
    }
    return this;
  };
  t.prototype.emit = function (e) {
    var t = this._listeners[e];
    if (t) {
      var r = [];
      var n = 1;
      while (n < arguments.length) {
        r.push(arguments[n++]);
      }
      for (n = 0; n < t.length;) {
        t[n].fn.apply(t[n++].ctx, r);
      }
    }
    return this;
  };
}