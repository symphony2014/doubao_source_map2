// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'calculateArrayDiff'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 810065
         */
module.exports = function (module, exports, require) {
  var i = function () {
    function t() {
      this.keys = [];
      this.values = [];
    }
    var e = t.prototype;
    e.get = function (t) {
      return this.values[this.keys.indexOf(t)];
    };
    e.set = function (t, e) {
      var n = this.keys;
      var i = this.values;
      var r = n.indexOf(t);
      var o = r === -1 ? n.length : r;
      n[o] = t;
      i[o] = e;
    };
    return t;
  }();
  var r = function () {
    function t() {
      this.object = {};
    }
    var e = t.prototype;
    e.get = function (t) {
      return this.object[t];
    };
    e.set = function (t, e) {
      this.object[t] = e;
    };
    return t;
  }();
  var o = typeof Map == "function";
  var a = function () {
    function t() {}
    var e = t.prototype;
    e.connect = function (t, e) {
      this.prev = t;
      this.next = e;
      if (t) {
        t.next = this;
      }
      if (e) {
        e.prev = this;
      }
    };
    e.disconnect = function () {
      var t = this.prev;
      var e = this.next;
      if (t) {
        t.next = e;
      }
      if (e) {
        e.prev = t;
      }
    };
    e.getIndex = function () {
      var t = this;
      var e = -1;
      while (t) {
        t = t.prev;
        ++e;
      }
      return e;
    };
    return t;
  }();
  var s = function () {
    function t(t, e, n, i, r, o, a, s) {
      this.prevList = t;
      this.list = e;
      this.added = n;
      this.removed = i;
      this.changed = r;
      this.maintained = o;
      this.changedBeforeAdded = a;
      this.fixed = s;
    }
    var e = t.prototype;
    Object.defineProperty(e, "ordered", {
      get: function () {
        if (!this.cacheOrdered) {
          this.caculateOrdered();
        }
        return this.cacheOrdered;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(e, "pureChanged", {
      get: function () {
        if (!this.cachePureChanged) {
          this.caculateOrdered();
        }
        return this.cachePureChanged;
      },
      enumerable: true,
      configurable: true
    });
    e.caculateOrdered = function () {
      var t;
      var e;
      var n;
      var i;
      t = this.changedBeforeAdded;
      e = this.fixed;
      n = [];
      i = [];
      t.forEach(function (t) {
        var e = t[0];
        var r = t[1];
        var o = new a();
        n[e] = o;
        i[r] = o;
      });
      n.forEach(function (t, e) {
        t.connect(n[e - 1]);
      });
      var r = t.filter(function (t, n) {
        return !e[n];
      }).map(function (t, e) {
        var r = t[0];
        var o = t[1];
        if (r === o) {
          return [0, 0];
        }
        var a = n[r];
        var s = i[o - 1];
        var h = a.getIndex();
        a.disconnect();
        if (s) {
          a.connect(s, s.next);
        } else {
          a.connect(undefined, n[0]);
        }
        return [h, a.getIndex()];
      });
      var o = this.changed;
      var s = [];
      this.cacheOrdered = r.filter(function (t, e) {
        var n = t[0];
        var i = t[1];
        var r = o[e];
        var a = r[0];
        var h = r[1];
        if (n !== i) {
          s.push([a, h]);
          return true;
        }
      });
      this.cachePureChanged = s;
    };
    return t;
  }();
  function h(t, e, n) {
    var a = o ? Map : n ? r : i;
    var h = n || function (t) {
      return t;
    };
    var l = [];
    var u = [];
    var c = [];
    var p = t.map(h);
    var d = e.map(h);
    var f = new a();
    var g = new a();
    var y = [];
    var v = [];
    var m = {};
    var x = [];
    var _ = 0;
    var b = 0;
    p.forEach(function (t, e) {
      f.set(t, e);
    });
    d.forEach(function (t, e) {
      g.set(t, e);
    });
    p.forEach(function (t, e) {
      var n = g.get(t);
      if (n === undefined) {
        ++b;
        u.push(e);
      } else {
        m[n] = b;
      }
    });
    d.forEach(function (t, e) {
      var n = f.get(t);
      if (n === undefined) {
        l.push(e);
        ++_;
      } else {
        c.push([n, e]);
        b = m[e] || 0;
        y.push([n - b, e - _]);
        v.push(e === n);
        if (n !== e) {
          x.push([n, e]);
        }
      }
    });
    u.reverse();
    return new s(t, e, l, u, x, c, y, v);
  }
  require.d(exports, {
    calculateArrayDiff: function () {
      return h;
    }
  });
}