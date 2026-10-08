// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'isWildcardOp'
// - Renamed export 'p' to 'isDeltaSetEmpty'
// - Renamed export 'i' to 'isDeleteOp'
// - Renamed export 'h' to 'diffDelta'
// - Renamed export 'D' to 'DeltaSet'
// - Renamed export 'C' to 'createDelta'
// - Renamed export 'B' to 'Delta'
// - Renamed export 'f' to 'getOpType'
// - Renamed export 'd' to 'isInsertString'
// - Renamed export 'c' to 'isInsertOp'
// - Renamed export 'b' to 'isRetainOp'
// - Renamed export 'n' to 'isDeltaSet'
// - Renamed export 'a' to 'getOpLength'
// - Renamed export 'o' to 'isEmptyOps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 47229
         */
module.exports = function (module, exports, require) {
  var tsTranspileHelpers = require("ts-transpile-helpers") /*id: 502250*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  var diffMatchPatch = require("diff-match-patch") /*id: 183089*/;
  var a = diffMatchPatch;
  function s(t, e, r, o) {
    var i = r(t);
    var u = r(e);
    var s = 0;
    function c() {
      var t = String.fromCharCode(57344 + s);
      s++;
      return t;
    }
    var f = new Map();
    var l = i.map(function (t) {
      if (!f.has(t)) {
        f.set(t, c());
      }
      return f.get(t);
    }).join("");
    var p = u.map(function (t) {
      if (!f.has(t)) {
        f.set(t, c());
      }
      return f.get(t);
    }).join("");
    var d = new Map();
    f.forEach(function (t, e) {
      d.set(t, e);
    });
    var h = a(l, p, o);
    var y = [];
    h.forEach(function (t) {
      var e = tsTranspileHelpers.spreadArray(t, 2);
      var r = e[0];
      var o = e[1];
      if (o) {
        var i = "";
        var u = 0;
        for (; u < o.length; u++) {
          var a = o[u];
          var s = d.get(a);
          if (s) {
            i += s;
          }
        }
        if (i) {
          if (y.length > 0 && y[y.length - 1][0] === r) {
            y[y.length - 1][1] += i;
          } else {
            y.push([r, i]);
          }
        }
      }
    });
    return y;
  }
  function c(t) {
    var e;
    var r = [];
    if (/[^\w\s]/.test(t) || /[^\x20-\x7E]/.test(t)) {
      var n;
      var o = /([a-zA-Z0-9]+)|([\s]+)|(.)/g;
      while ((n = o.exec(t)) !== null) {
        if (n[1]) {
          r.push(n[1]);
        } else if (n[2]) {
          r.push(n[2]);
        } else if (n[3]) {
          r.push(n[3]);
        }
      }
      return r;
    }
    for (var i = /(\w+|\s+|[^\w\s]+)/g; (e = i.exec(t)) !== null;) {
      if (e[0].length > 0) {
        r.push(e[0]);
      }
    }
    return r;
  }
  function f(t) {
    var e;
    var r = t.endsWith("\n") ? t : t + "\n";
    var n = /([^\n]*\n)/g;
    var o = [];
    while ((e = n.exec(r)) !== null) {
      if (e[0].length > 0) {
        o.push(e[0]);
      }
    }
    if (!t.endsWith("\n") && o.length > 0) {
      var i = o[o.length - 1];
      o[o.length - 1] = i.slice(0, -1);
    }
    return o;
  }
  function l(t, e = true) {
    return Object.keys(t).reduce(function (r, n) {
      if (e !== false || t[n]) {
        r[n] = typeof t[n] == "string" ? t[n] : String(t[n]);
      }
      return r;
    }, {});
  }
  var p = function () {
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
      var r = this.offset;
      var n = h(e);
      if (t >= n - r) {
        t = n - r;
        this.index += 1;
        this.offset = 0;
      } else {
        this.offset += t;
      }
      if (y(e)) {
        return {
          delete: t
        };
      }
      var o = {};
      if (e.attributes) {
        o.attributes = e.attributes;
      }
      if (b(e)) {
        o.retain = t;
      } else if (v(e)) {
        o.insert = e.insert.substr(r, t);
      } else {
        o.insert = e.insert;
      }
      return o;
    };
    e.peek = function () {
      return this.ops[this.index];
    };
    e.peekLength = function () {
      if (this.ops[this.index]) {
        return h(this.ops[this.index]) - this.offset;
      } else {
        return Infinity;
      }
    };
    e.peekType = function () {
      if (this.ops[this.index]) {
        return S(this.ops[this.index]);
      } else {
        return documentOperationConstants.operationTypes.RETAIN;
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
      var r = this.next();
      var n = this.ops.slice(this.index);
      this.offset = t;
      this.index = e;
      return [r].concat(n);
    };
    return t;
  }();
  function d(t) {
    return new p(t);
  }
  function h(t) {
    if (y(t)) {
      return t.delete;
    }
    if (b(t)) {
      return t.retain;
    }
    if (v(t)) {
      return t.insert.length;
    }
    if (m(t)) {
      return 1;
    }
    throw Error("op is unknown");
  }
  function y(t) {
    return typeof (t == null ? undefined : t.delete) == "number";
  }
  function b(t) {
    return typeof (t == null ? undefined : t.retain) == "number";
  }
  function g(t) {
    return v(t) || m(t);
  }
  function v(t) {
    return typeof (t == null ? undefined : t.insert) == "string";
  }
  function m(t) {
    return typeof (t == null ? undefined : t.insert) == "object";
  }
  function S(t) {
    if (y(t)) {
      return documentOperationConstants.operationTypes.DELETE;
    }
    if (b(t)) {
      return documentOperationConstants.operationTypes.RETAIN;
    }
    if (g(t)) {
      return documentOperationConstants.operationTypes.INSERT;
    }
    throw Error("op is unknown");
  }
  function w(t, e, r, o = false) {
    var u;
    var l;
    var p;
    var h;
    var m;
    var S;
    var w = false;
    if (typeof r == "object") {
      m = r == null ? undefined : r.cursor;
      o = (p = r == null ? undefined : r.useWordDiff) !== null && p !== undefined && p;
      w = (h = r == null ? undefined : r.useLineDiff) !== null && h !== undefined && h;
    } else {
      m = r;
    }
    if (o && w) {
      w = false;
    }
    if (t.ops === e.ops) {
      return t.create({
        zoneId: t.zoneId,
        zoneType: t.zoneType
      });
    }
    var A = [t, e].map(function (t) {
      return t.ops.map(function (t) {
        if (!g(t)) {
          throw Error("diffDelta() should use content delta which only includes insert op");
        }
        if (v(t)) {
          return t.insert;
        } else {
          return " ";
        }
      }).join("");
    });
    var x = t.create({
      zoneId: t.zoneId,
      zoneType: t.zoneType
    });
    if (w) {
      u = A[0];
      S = s(u, A[1], f, m);
    } else if (o) {
      l = A[0];
      S = s(l, A[1], c, m);
    } else {
      S = a(A[0], A[1], m);
    }
    var O = d(t.ops);
    var M = d(e.ops);
    S.forEach(function (t) {
      var e;
      var r;
      var n = t[1].length;
      while (n > 0) {
        var o = 0;
        switch (t[0]) {
          case a.INSERT:
            o = Math.min(M.peekLength(), n);
            x.push(M.next(o));
            break;
          case a.DELETE:
            o = Math.min(n, O.peekLength());
            O.next(o);
            x.delete(o);
            break;
          case a.EQUAL:
            o = Math.min(O.peekLength(), M.peekLength(), n);
            e = O.next(o);
            r = M.next(o);
            if (deepEqualityCheck_1.deepEqual(e.insert, r.insert)) {
              x.retain(o, function (t = {}, e = {}) {
                if (typeof t != "object") {
                  t = {};
                }
                if (typeof e != "object") {
                  e = {};
                }
                return Object.keys(t).concat(Object.keys(e)).reduce(function (r, n) {
                  if (!deepEqualityCheck_1.deepEqual(t[n], e[n])) {
                    r[n] = e[n] === undefined ? "" : e[n];
                  }
                  return r;
                }, {});
              }(e.attributes, r.attributes));
            } else {
              x.push(r).delete(o);
            }
        }
        n -= o;
      }
    });
    (function (t, e) {
      var r = t.ops;
      var o = d(e.ops);
      var i = 0;
      for (; i < r.length - 1; i++) {
        (function (t) {
          var e = r[t];
          var i = r[t + 1];
          var u = null;
          var a = null;
          var s = false;
          var c = undefined;
          var f = undefined;
          if (g(e) && b(i) && e.insert.length === i.retain) {
            u = e;
            a = i;
            s = true;
            c = t;
            f = t + 1;
          } else if (b(e) && g(i) && e.retain === i.insert.length) {
            a = e;
            u = i;
            s = false;
            f = t;
            c = t + 1;
          }
          if (u && a) {
            var l = a.retain;
            var p = o.next(l);
            var d = a.attributes || {};
            var h = u.attributes || {};
            if (Object.values(d).some(function (t) {
              return t !== "";
            })) {
              return;
            }
            var v = Object.keys(d).filter(function (t) {
              return h[t] !== undefined;
            });
            if (v.length > 0) {
              var m = {};
              v.forEach(function (t) {
                m[t] = h[t];
              });
              var S = Object.keys(p.attributes || {}).filter(function (t) {
                return d[t] === undefined;
              }).reduce(function (t, e) {
                t[e] = p.attributes[e];
                return t;
              }, {});
              if (s) {
                r[c] = tsTranspileHelpers.objectAssign(tsTranspileHelpers.objectAssign({}, a), {
                  attributes: m
                });
                r[f] = tsTranspileHelpers.objectAssign(tsTranspileHelpers.objectAssign({}, u), {
                  attributes: Object.keys(S).length > 0 ? S : undefined
                });
              } else {
                r[f] = tsTranspileHelpers.objectAssign(tsTranspileHelpers.objectAssign({}, u), {
                  attributes: Object.keys(S).length > 0 ? S : undefined
                });
                r[c] = tsTranspileHelpers.objectAssign(tsTranspileHelpers.objectAssign({}, a), {
                  attributes: m
                });
              }
            }
          } else if (y(e) && b(e)) {
            var w = e.delete || e.retain;
            o.next(w);
          }
        })(i);
      }
    })(x, t);
    return x.chop();
  }
  var A = function () {
    function t(t = {}, e) {
      if (e = e ?? Object.keys(t).some(function (e) {
        return t[e] instanceof _;
      })) {
        this._deltas = t;
      } else {
        this._deltas = Object.keys(t).reduce(function (e, r) {
          e[r] = j(t[r]);
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
    e.compose = function (t, e = true, r = true) {
      return this._call("compose", t, {
        keepEmptyAttributes: e,
        immutable: r
      });
    };
    e.concat = function (t) {
      return this._call("concat", t);
    };
    e.invert = function (e) {
      var r = new t();
      if (O(e)) {
        r = new t().add(e.zoneId, e);
      } else if (M(e)) {
        r = e;
      } else {
        throw Error("DeltaSet invert data is wrong");
      }
      return this.reduce(function (t, e) {
        var n = r.get(e.zoneId) || e.create({
          zoneId: e.zoneId
        });
        var o = e.invert(n);
        return t.compose(o);
      }, new t());
    };
    e.transform = function (e, r) {
      var n = this;
      if (r === undefined) {
        r = false;
      }
      if (O(e)) {
        if (e.zoneId in this.deltas) {
          return this.deltas[e.zoneId].transform(e, r);
        } else {
          return e;
        }
      }
      if (M(e)) {
        return new t(e.reduce(function (t, e) {
          t[e.zoneId] = n.transform(e, r);
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
      if (O(t)) {
        var r = t.zoneId;
        this._deltas[r] = t;
      } else {
        if (!e) {
          return this;
        }
        var r = t;
        if (e.zoneId !== r) {
          return this;
        }
        this._deltas[r] = e;
      }
      return this;
    };
    e.replace = function (t, e) {
      this.delete(t).add(e.zoneId, e);
      return this;
    };
    e._call = function (e, r, n) {
      if (O(r)) {
        return this._callDeltaFunc(e, r, n);
      }
      if (M(r)) {
        var o = new t(this.deltas);
        r.forEach(function (t) {
          o = o._callDeltaFunc(e, t, n);
        });
        return o;
      }
      throw Error("DeltaSet call: data: " + r + " is not Delta or DeltaSet");
    };
    e._callDeltaFunc = function (e, r, o) {
      var i = Object.assign({
        keepEmptyAttributes: true,
        immutable: true
      }, o);
      var u = r.zoneId;
      var a = i.immutable ? tsTranspileHelpers.objectAssign({}, this.deltas) : this.deltas;
      if (this.deltas[u]) {
        a[u] = this.deltas[u][e](r, i.keepEmptyAttributes);
      } else {
        var s = r.zoneType;
        a[u] = r.create({
          zoneId: u,
          zoneType: s
        })[e](r, i.keepEmptyAttributes);
      }
      return new t(a, true);
    };
    e.reduce = function (t, e) {
      var r = this;
      return Object.keys(this._deltas).map(function (t) {
        return r._deltas[t];
      }).reduce(t, e);
    };
    e.forEach = function (t) {
      var e;
      var r;
      try {
        var o = tsTranspileHelpers.createIterator(Object.entries(this._deltas));
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var u = tsTranspileHelpers.spreadArray(i.value, 2);
          var a = u[0];
          var s = u[1];
          t(s, a);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (r = o.return)) {
            r.call(o);
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
    return t.insert === documentOperationConstants.wildcardChar && t.attributes && t.attributes.lmkr;
  }
  function O(t) {
    return Object.values(documentOperationConstants.structureTypes).includes(t.zoneType);
  }
  function M(t) {
    return t.deltas !== undefined;
  }
  function P(t) {
    return !t || (t == null ? undefined : t.ops)?.length === 0;
  }
  function E(t) {
    if (!t) {
      return true;
    }
    var e = t.deltas;
    var r = Object.keys(e);
    return r.length === 0 || !r.some(function (t) {
      return !P(e[t]);
    });
  }
  var _ = function () {
    function t() {
      this.ops = [];
    }
    var e = t.prototype;
    t.registerCreator = function (e, r) {
      t.creators.set(e, r);
    };
    t.getCreator = function (e) {
      return t.creators.get(e);
    };
    e.insert = function (t, e, r = true) {
      if (typeof t == "string" && t.length === 0) {
        return this;
      }
      var n = {
        insert: t
      };
      if (e != null && typeof e == "object" && Object.keys(e).length > 0) {
        n.attributes = l(e, r);
      }
      return this.push(n);
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
      var r = {
        retain: t
      };
      if (e != null && typeof e == "object" && Object.keys(e).length > 0) {
        r.attributes = l(e);
      }
      return this.push(r);
    };
    e.forEach = function (t) {
      this.ops.forEach(t);
    };
    e.eachLine = function (t, e = documentOperationConstants.newlineChar) {
      var r = d(this.ops);
      var n = 0;
      var i = {};
      var u = [];
      while (r.hasNext()) {
        if (r.peekType() !== documentOperationConstants.operationTypes.INSERT) {
          return;
        }
        var a = r.peek();
        if (x(a)) {
          i = a.attributes || {};
        }
        var s = h(a) - r.peekLength();
        var c = typeof a.insert == "string" ? a.insert.indexOf(e, s) - s : -1;
        if (c < 0) {
          u.push(r.next());
        } else {
          u.push(r.next(c + 1));
          if (t(this.create({
            zoneId: this.zoneId,
            ops: u
          }), i, n) === false) {
            return;
          }
          u = [];
          i = {};
          n += 1;
        }
      }
      var f = this.create({
        zoneId: this.zoneId,
        ops: u
      });
      if (f.length() > 0) {
        t(f, i, n);
      }
    };
    e.push = function (t) {
      if (y(t) && t.delete <= 0 || b(t) && t.retain <= 0 || v(t) && t.insert.length === 0) {
        return this;
      }
      var e;
      var r;
      var o = this.ops.length;
      var u = this.ops[o - 1];
      e = t;
      r = tsTranspileHelpers.objectAssign({}, e);
      if (e.attributes) {
        r.attributes = tsTranspileHelpers.objectAssign({}, e.attributes);
      }
      t = r;
      if (typeof u == "object") {
        if (y(t) && y(u)) {
          this.ops[o - 1] = {
            delete: u.delete + t.delete
          };
          return this;
        }
        if (deepEqualityCheck_1.deepEqual(t.attributes, u.attributes)) {
          if (v(t) && v(u)) {
            this.ops[o - 1] = {
              insert: u.insert + t.insert
            };
            if (typeof t.attributes == "object") {
              this.ops[o - 1].attributes = t.attributes;
            }
            return this;
          }
          if (b(t) && b(u)) {
            this.ops[o - 1] = {
              retain: u.retain + t.retain
            };
            if (typeof t.attributes == "object") {
              this.ops[o - 1].attributes = t.attributes;
            }
            return this;
          }
        }
      }
      if (o === this.ops.length) {
        this.ops.push(t);
      } else {
        this.ops.splice(o, 0, t);
      }
      return this;
    };
    e.compose = function (t, e = true) {
      if (e === false) {
        var r = t.zoneId;
        var u = t.zoneType;
        t = t.reduce(function (t, r) {
          if (r.insert && r.attributes) {
            r.attributes = l(r.attributes, e);
          }
          t.push(r);
          return t;
        }, this.create({
          zoneId: r,
          zoneType: u
        }));
      }
      var a = d(this.ops);
      var s = d(t.ops);
      var c = [];
      var f = s.peek();
      if (f != null && b(f) && f.attributes == null) {
        for (var p = f.retain; a.peekType() === documentOperationConstants.operationTypes.INSERT && a.peekLength() <= p;) {
          p -= a.peekLength();
          c.push(a.next());
        }
        if (f.retain - p > 0) {
          s.next(f.retain - p);
        }
      }
      var h = this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType,
        ops: c
      });
      for (; a.hasNext() || s.hasNext();) {
        if (s.peekType() === documentOperationConstants.operationTypes.INSERT) {
          h.push(s.next());
        } else if (a.peekType() === documentOperationConstants.operationTypes.DELETE) {
          h.push(a.next());
        } else {
          var g = Math.min(a.peekLength(), s.peekLength());
          var m = a.next(g);
          var S = s.next(g);
          if (y(S) && v(m)) ;else if (y(S) && b(m)) {
            h.push(S);
          } else if (b(S)) {
            var w = {};
            if (b(m)) {
              w.retain = g;
            } else {
              w.insert = m.insert;
            }
            var A = function (t = {}, e = {}, r) {
              if (typeof t != "object") {
                t = {};
              }
              if (typeof e != "object") {
                e = {};
              }
              var o = tsTranspileHelpers.objectAssign({}, e);
              if (!r) {
                o = Object.keys(o).reduce(function (t, e) {
                  if (o[e] !== null && o[e] !== "") {
                    t[e] = o[e];
                  }
                  return t;
                }, {});
              }
              for (var i in t) {
                if (t[i] !== undefined && e[i] === undefined) {
                  o[i] = t[i];
                }
              }
              if (Object.keys(o).length > 0) {
                return o;
              } else {
                return undefined;
              }
            }(m.attributes, S.attributes, e);
            if (A) {
              w.attributes = A;
            }
            h.push(w);
            if (!s.hasNext() && deepEqualityCheck_1.deepEqual(h.ops[h.ops.length - 1], w)) {
              var x = this.create({
                zoneId: this.zoneId,
                zoneType: this.zoneType,
                ops: a.rest()
              });
              return h.concat(x).chop();
            }
          }
        }
      }
      return h.chop();
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
        return t + h(e);
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
      var r = d(this.ops);
      var n = d(t.ops);
      var i = this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType
      });
      while (r.hasNext() || n.hasNext()) {
        if (r.peekType() === documentOperationConstants.operationTypes.INSERT && (e || n.peekType() !== documentOperationConstants.operationTypes.INSERT)) {
          i.retain(h(r.next()));
        } else if (n.peekType() === documentOperationConstants.operationTypes.INSERT) {
          i.push(n.next());
        } else {
          var u = Math.min(r.peekLength(), n.peekLength());
          var a = r.next(u);
          var s = n.next(u);
          if (y(a)) {
            continue;
          }
          if (y(s)) {
            i.push(s);
          } else {
            i.retain(u, function (t = {}, e = {}, r = false) {
              if (typeof t != "object") {
                return e;
              }
              if (typeof e == "object") {
                if (!r) {
                  return e;
                }
                var n = Object.keys(e).reduce(function (r, n) {
                  if (t[n] === undefined) {
                    r[n] = e[n];
                  }
                  return r;
                }, {});
                if (Object.keys(n).length > 0) {
                  return n;
                } else {
                  return undefined;
                }
              }
            }(a.attributes, s.attributes, e));
          }
        }
      }
      return i.chop();
    };
    e.transformPosition = function (t, e = false) {
      e = !!e;
      var r = d(this.ops);
      var n = 0;
      while (r.hasNext() && n <= t) {
        var o = r.peekLength();
        var i = r.peekType();
        r.next();
        if (i === "delete") {
          t -= Math.min(o, t - n);
          continue;
        }
        if (i === "insert" && (n < t || !e)) {
          t += o;
        }
        n += o;
      }
      return t;
    };
    e.slice = function (t = 0, e = Infinity) {
      var r = [];
      var n = d(this.ops);
      var o = 0;
      while (o < e && n.hasNext()) {
        var i = undefined;
        if (o < t) {
          i = n.next(t - o);
        } else {
          i = n.next(e - o);
          r.push(i);
        }
        o += h(i);
      }
      return this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType,
        ops: r
      });
    };
    e.invert = function (t) {
      var e = this.create({
        zoneId: this.zoneId,
        zoneType: this.zoneType
      });
      this.reduce(function (r, n) {
        if (g(n)) {
          e.delete(h(n));
        } else if (b(n) && !n.attributes) {
          e.retain(n.retain);
          return r + n.retain;
        } else if (y(n) || b(n) && n.attributes) {
          var o = n.delete || n.retain;
          t.slice(r, r + o).forEach(function (t) {
            if (y(n)) {
              e.push(t);
            } else if (b(n) && n.attributes) {
              var r;
              var o;
              var i;
              e.retain(h(t), (r = n.attributes, o = t.attributes, r === undefined && (r = {}), o === undefined && (o = {}), r = r || {}, i = Object.keys(o).reduce(function (t, e) {
                if (o[e] !== r[e] && r[e] !== undefined) {
                  t[e] = o[e];
                }
                return t;
              }, {}), Object.keys(r).reduce(function (t, e) {
                if (r[e] !== o[e] && o[e] === undefined) {
                  t[e] = "";
                }
                return t;
              }, i)));
            }
          });
          return r + o;
        }
        return r;
      }, 0);
      return e.chop();
    };
    t.creators = new Map();
    return t;
  }();
  function j(t) {
    return new (_.getCreator(t.zoneType))(t);
  }
  require.d(exports, {
    isWildcardOp: function () {
      return x;
    },
    isDeltaSetEmpty: function () {
      return E;
    },
    isDeleteOp: function () {
      return y;
    },
    diffDelta: function () {
      return w;
    },
    DeltaSet: function () {
      return A;
    },
    createDelta: function () {
      return j;
    },
    Delta: function () {
      return _;
    },
    getOpType: function () {
      return S;
    },
    isInsertString: function () {
      return v;
    },
    isInsertOp: function () {
      return g;
    },
    isRetainOp: function () {
      return b;
    },
    isDeltaSet: function () {
      return M;
    },
    getOpLength: function () {
      return h;
    },
    isEmptyOps: function () {
      return P;
    }
  });
}