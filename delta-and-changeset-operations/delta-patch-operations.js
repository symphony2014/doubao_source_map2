// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'Delta'
// - Renamed export 'D' to 'DeltaSet'
// - Renamed export 'a' to 'getOpLength'
// - Renamed export 'f' to 'getOpKind'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46252.e1de9c24.js
         * chunkId: 46252
         * moduleId: 713456
         */
module.exports = function (module, exports, require) {
  var typescriptHelperUtils_1 = require("typescript-helper-utils_1") /*id: 712698*/;
  var patchOperationConstants = require("patch-operation-constants") /*id: 329334*/;
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
  var c = Symbol.prototype.valueOf;
  function u(t, e) {
    return t === e || t != t && e != e;
  }
  function l(t, e) {
    return function t(e, n, r, i) {
      if (e === n) {
        return true;
      }
      if (e == null || n == null || !a(e) && !a(n) && typeof e != "function") {
        return u(e, n);
      }
      var o = s(e);
      var l = s(n);
      if (o !== l) {
        return false;
      }
      var h = r.indexOf(e);
      if (h === i.indexOf(n) && h >= 0) {
        return true;
      }
      r.push(e);
      i.push(n);
      if ((o === "[object Array]" ? e.length : Object.keys(e).length) !== (l === "[object Array]" ? n.length : Object.keys(n).length)) {
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
        for (var f in e) {
          if (e.hasOwnProperty(f) && t(e[f], n[f], r.slice(), i.slice()) === false) {
            return false;
          }
        }
        return true;
      }
      if (o === "[object Function]") {
        return e.toString() === n.toString();
      }
      if (["[object Number]", "[object Boolean]", "[object Date]"].includes(o)) {
        return u(+e, +n);
      }
      if (o === "[object String]") {
        return "" + e == "" + n;
      }
      if (o === "[object Symbol]" && c) {
        return c.call(e) === c.call(n);
      }
      return false;
    }(t, e, [], []);
  }
  require("diff-match-patch") /*id: 183089*/;
  var h = function () {
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
      var r = f(e);
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
        return f(this.ops[this.index]) - this.offset;
      } else {
        return Infinity;
      }
    };
    e.peekType = function () {
      if (this.ops[this.index]) {
        return y(this.ops[this.index]);
      } else {
        return patchOperationConstants.operationKind.RETAIN;
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
    return new h(t);
  }
  function f(t) {
    if (d(t)) {
      return t.delete;
    }
    if (b(t)) {
      return t.retain;
    }
    if (v(t)) {
      return t.insert.length;
    }
    if (g(t)) {
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
  function g(t) {
    return typeof (t == null ? undefined : t.insert) == "object";
  }
  function y(t) {
    if (d(t)) {
      return patchOperationConstants.operationKind.DELETE;
    }
    if (b(t)) {
      return patchOperationConstants.operationKind.RETAIN;
    }
    if (v(t) || g(t)) {
      return patchOperationConstants.operationKind.INSERT;
    }
    throw Error("op is unknown");
  }
  var m = function () {
    function t(t = {}, e) {
      if (e = e ?? Object.keys(t).some(function (e) {
        return t[e] instanceof w;
      })) {
        this._deltas = t;
      } else {
        this._deltas = Object.keys(t).reduce(function (e, n) {
          var r;
          r = t[n];
          e[n] = new (w.getCreator(r.zoneType))(r);
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
      if (x(e)) {
        n = new t().add(e.zoneId, e);
      } else if (T(e)) {
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
      if (x(e)) {
        if (e.zoneId in this.deltas) {
          return this.deltas[e.zoneId].transform(e, n);
        } else {
          return e;
        }
      }
      if (T(e)) {
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
      if (x(t)) {
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
      if (x(n)) {
        return this._callDeltaFunc(e, n, r);
      }
      if (T(n)) {
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
      var a = o.immutable ? typescriptHelperUtils_1.objectAssign({}, this.deltas) : this.deltas;
      if (this.deltas[s]) {
        a[s] = this.deltas[s][e](n, o.keepEmptyAttributes);
      } else {
        var c = n.zoneType;
        a[s] = n.create({
          zoneId: s,
          zoneType: c
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
        var i = typescriptHelperUtils_1.createIterator(Object.entries(this._deltas));
        var o = i.next();
        for (; !o.done; o = i.next()) {
          var s = typescriptHelperUtils_1.spreadArray(o.value, 2);
          var a = s[0];
          var c = s[1];
          t(c, a);
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
  function x(t) {
    return Object.values(patchOperationConstants.patchTypes).includes(t.zoneType);
  }
  function T(t) {
    return t.deltas !== undefined;
  }
  var w = function () {
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
        i.attributes = typescriptHelperUtils_1.getValues(e, n);
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
        n.attributes = typescriptHelperUtils_1.getValues(e);
      }
      return this.push(n);
    };
    e.forEach = function (t) {
      this.ops.forEach(t);
    };
    e.eachLine = function (t, e = patchOperationConstants.newline) {
      var n = p(this.ops);
      var r = 0;
      var o = {};
      var s = [];
      while (n.hasNext()) {
        if (n.peekType() !== patchOperationConstants.operationKind.INSERT) {
          return;
        }
        var a = n.peek();
        if (a.insert === patchOperationConstants.wildcard && a.attributes && a.attributes.lmkr) {
          o = a.attributes || {};
        }
        var c = f(a) - n.peekLength();
        var u = typeof a.insert == "string" ? a.insert.indexOf(e, c) - c : -1;
        if (u < 0) {
          s.push(n.next());
        } else {
          s.push(n.next(u + 1));
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
      var l = this.create({
        zoneId: this.zoneId,
        ops: s
      });
      if (l.length() > 0) {
        t(l, o, r);
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
      n = typescriptHelperUtils_1.objectAssign({}, e);
      if (e.attributes) {
        n.attributes = typescriptHelperUtils_1.objectAssign({}, e.attributes);
      }
      t = n;
      if (typeof o == "object") {
        if (d(t) && d(o)) {
          this.ops[i - 1] = {
            delete: o.delete + t.delete
          };
          return this;
        }
        if (l(t.attributes, o.attributes)) {
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
            n.attributes = typescriptHelperUtils_1.getValues(n.attributes, e);
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
      var c = [];
      var u = a.peek();
      if (u != null && b(u) && u.attributes == null) {
        for (var h = u.retain; s.peekType() === patchOperationConstants.operationKind.INSERT && s.peekLength() <= h;) {
          h -= s.peekLength();
          c.push(s.next());
        }
        if (u.retain - h > 0) {
          a.next(u.retain - h);
        }
      }
      var f = this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType,
        ops: c
      });
      for (; s.hasNext() || a.hasNext();) {
        if (a.peekType() === patchOperationConstants.operationKind.INSERT) {
          f.push(a.next());
        } else if (s.peekType() === patchOperationConstants.operationKind.DELETE) {
          f.push(s.next());
        } else {
          var g = Math.min(s.peekLength(), a.peekLength());
          var y = s.next(g);
          var m = a.next(g);
          if (d(m) && v(y)) ;else if (d(m) && b(y)) {
            f.push(m);
          } else if (b(m)) {
            var x = {};
            if (b(y)) {
              x.retain = g;
            } else {
              x.insert = y.insert;
            }
            var T = typescriptHelperUtils_1.restHelper(y.attributes, m.attributes, e);
            if (T) {
              x.attributes = T;
            }
            f.push(x);
            if (!a.hasNext() && l(f.ops[f.ops.length - 1], x)) {
              var w = this.create({
                zoneId: this.zoneId,
                zoneType: this.zoneType,
                ops: s.rest()
              });
              return f.concat(w).chop();
            }
          }
        }
      }
      return f.chop();
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
        return t + f(e);
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
        if (n.peekType() === patchOperationConstants.operationKind.INSERT && (e || o.peekType() !== patchOperationConstants.operationKind.INSERT)) {
          s.retain(f(n.next()));
        } else if (o.peekType() === patchOperationConstants.operationKind.INSERT) {
          s.push(o.next());
        } else {
          var a = Math.min(n.peekLength(), o.peekLength());
          var c = n.next(a);
          var u = o.next(a);
          if (d(c)) {
            continue;
          }
          if (d(u)) {
            s.push(u);
          } else {
            s.retain(a, typescriptHelperUtils_1.pickKeys(c.attributes, u.attributes, e));
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
        i += f(o);
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
        if (v(i) || g(i)) {
          e.delete(f(i));
        } else if (b(i) && !i.attributes) {
          e.retain(i.retain);
          return n + i.retain;
        } else if (d(i) || b(i) && i.attributes) {
          var o = i.delete || i.retain;
          t.slice(n, n + o).forEach(function (t) {
            if (d(i)) {
              e.push(t);
            } else if (b(i) && i.attributes) {
              e.retain(f(t), typescriptHelperUtils_1.omitKeys(i.attributes, t.attributes));
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
      return w;
    },
    DeltaSet: function () {
      return m;
    },
    getOpLength: function () {
      return f;
    },
    getOpKind: function () {
      return y;
    }
  });
}