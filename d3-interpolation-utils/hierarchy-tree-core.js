// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'createHierarchy'
// - Renamed export 'NB' to 'HierarchyNode'
// - Renamed export 'le' to 'updateHeight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 358655
         */
module.exports = function (module, exports, require) {
  function i(t) {
    var n = 0;
    var e = t.children;
    var i = e && e.length;
    if (i) {
      while (--i >= 0) {
        n += e[i].value;
      }
    } else {
      n = 1;
    }
    t.value = n;
  }
  function r(t, n) {
    if (t instanceof Map) {
      t = [undefined, t];
      if (n === undefined) {
        n = u;
      }
    } else if (n === undefined) {
      n = o;
    }
    var e;
    var i;
    var r;
    var a;
    var h;
    var f = new c(t);
    var l = [f];
    while (e = l.pop()) {
      if ((r = n(e.data)) && (h = (r = Array.from(r)).length)) {
        e.children = r;
        a = h - 1;
        for (; a >= 0; --a) {
          l.push(i = r[a] = new c(r[a]));
          i.parent = e;
          i.depth = e.depth + 1;
        }
      }
    }
    return f.eachBefore(s);
  }
  function o(t) {
    return t.children;
  }
  function u(t) {
    if (Array.isArray(t)) {
      return t[1];
    } else {
      return null;
    }
  }
  function a(t) {
    if (t.data.value !== undefined) {
      t.value = t.data.value;
    }
    t.data = t.data.data;
  }
  function s(t) {
    var n = 0;
    do {
      t.height = n;
    } while ((t = t.parent) && t.height < ++n);
  }
  function c(t) {
    this.data = t;
    this.depth = this.height = 0;
    this.parent = null;
  }
  c.prototype = r.prototype = {
    constructor: c,
    count: function () {
      return this.eachAfter(i);
    },
    each: function (t, n) {
      let e = -1;
      for (let i of this) {
        t.call(n, i, ++e, this);
      }
      return this;
    },
    eachAfter: function (t, n) {
      var e;
      var i;
      var r;
      var o = this;
      var u = [o];
      var a = [];
      var s = -1;
      while (o = u.pop()) {
        a.push(o);
        if (e = o.children) {
          i = 0;
          r = e.length;
          for (; i < r; ++i) {
            u.push(e[i]);
          }
        }
      }
      while (o = a.pop()) {
        t.call(n, o, ++s, this);
      }
      return this;
    },
    eachBefore: function (t, n) {
      var e;
      var i;
      var r = this;
      var o = [r];
      var u = -1;
      while (r = o.pop()) {
        t.call(n, r, ++u, this);
        if (e = r.children) {
          for (i = e.length - 1; i >= 0; --i) {
            o.push(e[i]);
          }
        }
      }
      return this;
    },
    find: function (t, n) {
      let e = -1;
      for (let i of this) {
        if (t.call(n, i, ++e, this)) {
          return i;
        }
      }
    },
    sum: function (t) {
      return this.eachAfter(function (n) {
        var e = +t(n.data) || 0;
        var i = n.children;
        var r = i && i.length;
        while (--r >= 0) {
          e += i[r].value;
        }
        n.value = e;
      });
    },
    sort: function (t) {
      return this.eachBefore(function (n) {
        if (n.children) {
          n.children.sort(t);
        }
      });
    },
    path: function (t) {
      var n = this;
      var e = function (t, n) {
        if (t === n) {
          return t;
        }
        var e = t.ancestors();
        var i = n.ancestors();
        var r = null;
        t = e.pop();
        n = i.pop();
        while (t === n) {
          r = t;
          t = e.pop();
          n = i.pop();
        }
        return r;
      }(n, t);
      var i = [n];
      while (n !== e) {
        i.push(n = n.parent);
      }
      var r = i.length;
      for (; t !== e;) {
        i.splice(r, 0, t);
        t = t.parent;
      }
      return i;
    },
    ancestors: function () {
      var t = this;
      var n = [t];
      while (t = t.parent) {
        n.push(t);
      }
      return n;
    },
    descendants: function () {
      return Array.from(this);
    },
    leaves: function () {
      var t = [];
      this.eachBefore(function (n) {
        if (!n.children) {
          t.push(n);
        }
      });
      return t;
    },
    links: function () {
      var t = this;
      var n = [];
      t.each(function (e) {
        if (e !== t) {
          n.push({
            source: e.parent,
            target: e
          });
        }
      });
      return n;
    },
    copy: function () {
      return r(this).eachBefore(a);
    },
    [Symbol.iterator]: function* () {
      var t;
      var n;
      var e;
      var i;
      var r = this;
      var o = [r];
      do {
        t = o.reverse();
        o = [];
        while (r = t.pop()) {
          yield r;
          if (n = r.children) {
            e = 0;
            i = n.length;
            for (; e < i; ++e) {
              o.push(n[e]);
            }
          }
        }
      } while (o.length);
    }
  };
  require.d(exports, {
    createHierarchy: function () {
      return r;
    },
    HierarchyNode: function () {
      return c;
    },
    updateHeight: function () {
      return s;
    }
  });
}