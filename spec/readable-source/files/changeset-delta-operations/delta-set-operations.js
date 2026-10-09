// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'Delta'
// - Renamed export 'D' to 'DeltaSet'
// - Renamed export 'f' to 'getOperationType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 69805.3aa70c1d.js
         * chunkId: 69805
         * moduleId: 454622
         */
module.exports = function (module, exports, require) {
  var typescriptHelperUtils = require("typescript-helper-utils") /*id: 669540*/;
  var zoneStructConsts = require("zone-struct-consts") /*id: 750205*/;
  var o = Object.prototype.toString;
  function s(t) {
    if (t == null) {
      if (t === undefined) {
        return "[object Undefined]";
      } else {
        return "[object Null]";
      }
    } else {
      return o.call(t);
    }
  }
  function a(t) {
    return typeof t == "object" && t !== null;
  }
  var u = Symbol.prototype.valueOf;
  function c(t, e) {
    return t === e || t != t && e != e;
  }
  function h(t, e) {
    return function t(e, n, r, i) {
      if (e === n) {
        return true;
      }
      if (e == null || n == null || !a(e) && !a(n) && typeof e != "function") {
        return c(e, n);
      }
      var o = s(e);
      var h = s(n);
      if (o !== h) {
        return false;
      }
      var f = r.indexOf(e);
      if (f === i.indexOf(n) && f >= 0) {
        return true;
      }
      r.push(e);
      i.push(n);
      if ((o === "[object Array]" ? e.length : Object.keys(e).length) !== (h === "[object Array]" ? n.length : Object.keys(n).length)) {
        return false;
      }
      if (o === "[object Array]") {
        for (var p = 0; p < e.length; p++) {
          if (!t(e[p], n[p], r.slice(), i.slice())) {
            return false;
          }
        }
        return true;
      }
      if (o === "[object Object]") {
        for (var l in e) {
          if (e.hasOwnProperty(l) && t(e[l], n[l], r.slice(), i.slice()) === false) {
            return false;
          }
        }
        return true;
      }
      if (o === "[object Function]") {
        return e.toString() === n.toString();
      }
      if (["[object Number]", "[object Boolean]", "[object Date]"].includes(o)) {
        return c(+e, +n);
      }
      if (o === "[object String]") {
        return "" + e == "" + n;
      }
      if (o === "[object Symbol]" && u) {
        return u.call(e) === u.call(n);
      }
      return false;
    }(t, e, [], []);
  }
  require("diff-match-patch") /*id: 183089*/;
  var f = function () {
    function t(t) {
      this.ops = t;
      this.index = 0;
      this.offset = 0;
    }
    var e = t.prototype;
    e.hasNext = function () {
      return this.peekLength() < Infinity;
    };
    e.next = function (t) {
      t ||= Infinity;
      var e = this.ops[this.index];
      if (!e) {
        return {
          retain: Infinity
        };
      }
      var n = this.offset;
      var r = l(e);
      if (t >= r - n) {
        t = r - n;
        this.index += 1;
        this.offset = 0;
      } else {
        this.offset += t;
      }
      if (d(e)) {
        return {
          delete: t
        };
      }
      var i = {};
      if (e.attributes) {
        i.attributes = e.attributes;
      }
      if (b(e)) {
        i.retain = t;
      } else if (v(e)) {
        i.insert = e.insert.substr(n, t);
      } else {
        i.insert = e.insert;
      }
      return i;
    };
    e.peek = function () {
      return this.ops[this.index];
    };
    e.peekLength = function () {
      if (this.ops[this.index]) {
        return l(this.ops[this.index]) - this.offset;
      } else {
        return Infinity;
      }
    };
    e.peekType = function () {
      if (this.ops[this.index]) {
        return g(this.ops[this.index]);
      } else {
        return zoneStructConsts.operationTypes.RETAIN;
      }
    };
    e.rest = function () {
      if (!this.hasNext()) {
        return [];
      }
      if (this.offset === 0) {
        return this.ops.slice(this.index);
      }
      var t = this.offset;
      var e = this.index;
      var n = this.next();
      var r = this.ops.slice(this.index);
      this.offset = t;
      this.index = e;
      return [n].concat(r);
    };
    return t;
  }();
  function p(t) {
    return new f(t);
  }
  function l(t) {
    if (d(t)) {
      return t.delete;
    }
    if (b(t)) {
      return t.retain;
    }
    if (v(t)) {
      return t.insert.length;
    }
    if (y(t)) {
      return 1;
    }
    throw Error("op is unknown");
  }
  function d(t) {
    return typeof (t == null ? undefined : t.delete) == "number";
  }
  function b(t) {
    return typeof (t == null ? undefined : t.retain) == "number";
  }
  function v(t) {
    return typeof (t == null ? undefined : t.insert) == "string";
  }
  function y(t) {
    return typeof (t == null ? undefined : t.insert) == "object";
  }
  function g(t) {
    if (d(t)) {
      return zoneStructConsts.operationTypes.DELETE;
    }
    if (b(t)) {
      return zoneStructConsts.operationTypes.RETAIN;
    }
    if (v(t) || y(t)) {
      return zoneStructConsts.operationTypes.INSERT;
    }
    throw Error("op is unknown");
  }
  var m = function () {
    function t(t = {}, e) {
      if (e = e ?? Object.keys(t).some(function (e) {
        return t[e] instanceof k;
      })) {
        this._deltas = t;
      } else {
        this._deltas = Object.keys(t).reduce(function (e, n) {
          var r;
          r = t[n];
          e[n] = new (k.getCreator(r.zoneType))(r);
          return e;
        }, {});
      }
    }
    var e = t.prototype;
    Object.defineProperty(e, "deltas", {
      get: function () {
        return this._deltas;
      },
      enumerable: false,
      configurable: true
    });
    e.get = function (t) {
      return this._deltas[t];
    };
    e.compose = function (t, e = true, n = true) {
      return this._call("compose", t, {
        keepEmptyAttributes: e,
        immutable: n
      });
    };
    e.concat = function (t) {
      return this._call("concat", t);
    };
    e.invert = function (e) {
      var n = new t();
      if (T(e)) {
        n = new t().add(e.zoneId, e);
      } else if (x(e)) {
        n = e;
      } else {
        throw Error("DeltaSet invert data is wrong");
      }
      return this.reduce(function (t, e) {
        var r = n.get(e.zoneId) || e.create({
          zoneId: e.zoneId
        });
        var i = e.invert(r);
        return t.compose(i);
      }, new t());
    };
    e.transform = function (e, n) {
      var r = this;
      if (n === undefined) {
        n = false;
      }
      if (T(e)) {
        if (e.zoneId in this.deltas) {
          return this.deltas[e.zoneId].transform(e, n);
        } else {
          return e;
        }
      }
      if (x(e)) {
        return new t(e.reduce(function (t, e) {
          t[e.zoneId] = r.transform(e, n);
          return t;
        }, {}));
      }
      throw Error("DeltaSet call data is wrong");
    };
    e.delete = function (t) {
      delete this._deltas[t];
      return this;
    };
    e.add = function (t, e) {
      if (T(t)) {
        var n = t.zoneId;
        this._deltas[n] = t;
      } else {
        if (!e) {
          return this;
        }
        var n = t;
        if (e.zoneId !== n) {
          return this;
        }
        this._deltas[n] = e;
      }
      return this;
    };
    e.replace = function (t, e) {
      this.delete(t).add(e.zoneId, e);
      return this;
    };
    e._call = function (e, n, r) {
      if (T(n)) {
        return this._callDeltaFunc(e, n, r);
      }
      if (x(n)) {
        var i = new t(this.deltas);
        n.forEach(function (t) {
          i = i._callDeltaFunc(e, t, r);
        });
        return i;
      }
      throw Error("DeltaSet call: data: " + n + " is not Delta or DeltaSet");
    };
    e._callDeltaFunc = function (e, n, i) {
      var o = Object.assign({
        keepEmptyAttributes: true,
        immutable: true
      }, i);
      var s = n.zoneId;
      var a = o.immutable ? typescriptHelperUtils.objectAssign({}, this.deltas) : this.deltas;
      if (this.deltas[s]) {
        a[s] = this.deltas[s][e](n, o.keepEmptyAttributes);
      } else {
        var u = n.zoneType;
        a[s] = n.create({
          zoneId: s,
          zoneType: u
        })[e](n, o.keepEmptyAttributes);
      }
      return new t(a, true);
    };
    e.reduce = function (t, e) {
      var n = this;
      return Object.keys(this._deltas).map(function (t) {
        return n._deltas[t];
      }).reduce(t, e);
    };
    e.forEach = function (t) {
      var e;
      var n;
      try {
        var i = typescriptHelperUtils.createIterator(Object.entries(this._deltas));
        var o = i.next();
        for (; !o.done; o = i.next()) {
          var s = typescriptHelperUtils.spreadArray(o.value, 2);
          var a = s[0];
          var u = s[1];
          t(u, a);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (n = i.return)) {
            n.call(i);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    return t;
  }();
  function T(t) {
    return Object.values(zoneStructConsts.structTypes).includes(t.zoneType);
  }
  function x(t) {
    return t.deltas !== undefined;
  }
  var k = function () {
    function t() {
      this.ops = [];
    }
    var e = t.prototype;
    t.registerCreator = function (e, n) {
      t.creators.set(e, n);
    };
    t.getCreator = function (e) {
      return t.creators.get(e);
    };
    e.insert = function (t, e, n = true) {
      if (typeof t == "string" && t.length === 0) {
        return this;
      }
      var i = {
        insert: t
      };
      if (e != null && typeof e == "object" && Object.keys(e).length > 0) {
        i.attributes = typescriptHelperUtils.getValues(e, n);
      }
      return this.push(i);
    };
    e.delete = function (t) {
      if (t <= 0) {
        return this;
      } else {
        return this.push({
          delete: t
        });
      }
    };
    e.retain = function (t, e) {
      if (t <= 0) {
        return this;
      }
      var n = {
        retain: t
      };
      if (e != null && typeof e == "object" && Object.keys(e).length > 0) {
        n.attributes = typescriptHelperUtils.getValues(e);
      }
      return this.push(n);
    };
    e.forEach = function (t) {
      this.ops.forEach(t);
    };
    e.eachLine = function (t, e = zoneStructConsts.newlineChar) {
      var n = p(this.ops);
      var r = 0;
      var o = {};
      var s = [];
      while (n.hasNext()) {
        if (n.peekType() !== zoneStructConsts.operationTypes.INSERT) {
          return;
        }
        var a = n.peek();
        if (a.insert === zoneStructConsts.wildcard && a.attributes && a.attributes.lmkr) {
          o = a.attributes || {};
        }
        var u = l(a) - n.peekLength();
        var c = typeof a.insert == "string" ? a.insert.indexOf(e, u) - u : -1;
        if (c < 0) {
          s.push(n.next());
        } else {
          s.push(n.next(c + 1));
          if (t(this.create({
            zoneId: this.zoneId,
            ops: s
          }), o, r) === false) {
            return;
          }
          s = [];
          o = {};
          r += 1;
        }
      }
      var h = this.create({
        zoneId: this.zoneId,
        ops: s
      });
      if (h.length() > 0) {
        t(h, o, r);
      }
    };
    e.push = function (t) {
      if (d(t) && t.delete <= 0 || b(t) && t.retain <= 0 || v(t) && t.insert.length === 0) {
        return this;
      }
      var e;
      var n;
      var i = this.ops.length;
      var o = this.ops[i - 1];
      e = t;
      n = typescriptHelperUtils.objectAssign({}, e);
      if (e.attributes) {
        n.attributes = typescriptHelperUtils.objectAssign({}, e.attributes);
      }
      t = n;
      if (typeof o == "object") {
        if (d(t) && d(o)) {
          this.ops[i - 1] = {
            delete: o.delete + t.delete
          };
          return this;
        }
        if (h(t.attributes, o.attributes)) {
          if (v(t) && v(o)) {
            this.ops[i - 1] = {
              insert: o.insert + t.insert
            };
            if (typeof t.attributes == "object") {
              this.ops[i - 1].attributes = t.attributes;
            }
            return this;
          }
          if (b(t) && b(o)) {
            this.ops[i - 1] = {
              retain: o.retain + t.retain
            };
            if (typeof t.attributes == "object") {
              this.ops[i - 1].attributes = t.attributes;
            }
            return this;
          }
        }
      }
      if (i === this.ops.length) {
        this.ops.push(t);
      } else {
        this.ops.splice(i, 0, t);
      }
      return this;
    };
    e.compose = function (t, e = true) {
      if (e === false) {
        var n = t.zoneId;
        var o = t.zoneType;
        t = t.reduce(function (t, n) {
          if (n.insert && n.attributes) {
            n.attributes = typescriptHelperUtils.getValues(n.attributes, e);
          }
          t.push(n);
          return t;
        }, this.create({
          zoneId: n,
          zoneType: o
        }));
      }
      var s = p(this.ops);
      var a = p(t.ops);
      var u = [];
      var c = a.peek();
      if (c != null && b(c) && c.attributes == null) {
        for (var f = c.retain; s.peekType() === zoneStructConsts.operationTypes.INSERT && s.peekLength() <= f;) {
          f -= s.peekLength();
          u.push(s.next());
        }
        if (c.retain - f > 0) {
          a.next(c.retain - f);
        }
      }
      var l = this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType,
        ops: u
      });
      for (; s.hasNext() || a.hasNext();) {
        if (a.peekType() === zoneStructConsts.operationTypes.INSERT) {
          l.push(a.next());
        } else if (s.peekType() === zoneStructConsts.operationTypes.DELETE) {
          l.push(s.next());
        } else {
          var y = Math.min(s.peekLength(), a.peekLength());
          var g = s.next(y);
          var m = a.next(y);
          if (d(m) && v(g)) ;else if (d(m) && b(g)) {
            l.push(m);
          } else if (b(m)) {
            var T = {};
            if (b(g)) {
              T.retain = y;
            } else {
              T.insert = g.insert;
            }
            var x = typescriptHelperUtils.restHelper(g.attributes, m.attributes, e);
            if (x) {
              T.attributes = x;
            }
            l.push(T);
            if (!a.hasNext() && h(l.ops[l.ops.length - 1], T)) {
              var k = this.create({
                zoneId: this.zoneId,
                zoneType: this.zoneType,
                ops: s.rest()
              });
              return l.concat(k).chop();
            }
          }
        }
      }
      return l.chop();
    };
    e.concat = function (t) {
      var e = this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType,
        ops: this.ops.slice()
      });
      if (t.ops.length > 0) {
        e.push(t.ops[0]);
        e.ops = e.ops.concat(t.ops.slice(1));
      }
      return e;
    };
    e.length = function () {
      return this.reduce(function (t, e) {
        return t + l(e);
      }, 0);
    };
    e.reduce = function (t, e) {
      return this.ops.reduce(t, e);
    };
    e.chop = function () {
      var t = this.ops[this.ops.length - 1];
      if (t && t.retain && !t.attributes) {
        this.ops.pop();
      }
      return this;
    };
    e.transform = function (t, e = false) {
      e = !!e;
      if (typeof t == "number") {
        return this.transformPosition(t, e);
      }
      var n = p(this.ops);
      var o = p(t.ops);
      var s = this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType
      });
      while (n.hasNext() || o.hasNext()) {
        if (n.peekType() === zoneStructConsts.operationTypes.INSERT && (e || o.peekType() !== zoneStructConsts.operationTypes.INSERT)) {
          s.retain(l(n.next()));
        } else if (o.peekType() === zoneStructConsts.operationTypes.INSERT) {
          s.push(o.next());
        } else {
          var a = Math.min(n.peekLength(), o.peekLength());
          var u = n.next(a);
          var c = o.next(a);
          if (d(u)) {
            continue;
          }
          if (d(c)) {
            s.push(c);
          } else {
            s.retain(a, typescriptHelperUtils.pickKeys(u.attributes, c.attributes, e));
          }
        }
      }
      return s.chop();
    };
    e.transformPosition = function (t, e = false) {
      e = !!e;
      var n = p(this.ops);
      var r = 0;
      while (n.hasNext() && r <= t) {
        var i = n.peekLength();
        var o = n.peekType();
        n.next();
        if (o === "delete") {
          t -= Math.min(i, t - r);
          continue;
        }
        if (o === "insert" && (r < t || !e)) {
          t += i;
        }
        r += i;
      }
      return t;
    };
    e.slice = function (t = 0, e = Infinity) {
      var n = [];
      var r = p(this.ops);
      var i = 0;
      while (i < e && r.hasNext()) {
        var o = undefined;
        if (i < t) {
          o = r.next(t - i);
        } else {
          o = r.next(e - i);
          n.push(o);
        }
        i += l(o);
      }
      return this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType,
        ops: n
      });
    };
    e.invert = function (t) {
      var e = this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType
      });
      this.reduce(function (n, i) {
        if (v(i) || y(i)) {
          e.delete(l(i));
        } else if (b(i) && !i.attributes) {
          e.retain(i.retain);
          return n + i.retain;
        } else if (d(i) || b(i) && i.attributes) {
          var o = i.delete || i.retain;
          t.slice(n, n + o).forEach(function (t) {
            if (d(i)) {
              e.push(t);
            } else if (b(i) && i.attributes) {
              e.retain(l(t), typescriptHelperUtils.omitKeys(i.attributes, t.attributes));
            }
          });
          return n + o;
        }
        return n;
      }, 0);
      return e.chop();
    };
    t.creators = new Map();
    return t;
  }();
  require.d(exports, {
    Delta: function () {
      return k;
    },
    DeltaSet: function () {
      return m;
    },
    getOperationType: function () {
      return g;
    }
  });
}