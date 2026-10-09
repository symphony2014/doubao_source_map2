// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D5' to 'Map'
// - Renamed export 'WV' to 'Record'
// - Renamed export 'aV' to 'List'
// - Renamed export 'is' to 'is'
// - Renamed export 'zN' to 'OrderedMap'
// - Renamed export 'ZP' to 'Immutable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 81885
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var s;
  var a;
  var u;
  var c;
  var l;
  var p;
  var h;
  var f = "delete";
  var d = {};
  var v = {
    value: false
  };
  var y = {
    value: false
  };
  function g(t) {
    t.value = false;
    return t;
  }
  function _(t) {
    if (t) {
      t.value = true;
    }
  }
  function m() {}
  function b(t, e) {
    e = e || 0;
    var n = Math.max(0, t.length - e);
    var r = Array(n);
    var i = 0;
    for (; i < n; i++) {
      r[i] = t[i + e];
    }
    return r;
  }
  function E(t) {
    if (t.size === undefined) {
      t.size = t.__iterate(S);
    }
    return t.size;
  }
  function w(t, e) {
    if (typeof e != "number") {
      var n = e >>> 0;
      if ("" + n !== e || n === 4294967295) {
        return NaN;
      }
      e = n;
    }
    if (e < 0) {
      return E(t) + e;
    } else {
      return e;
    }
  }
  function S() {
    return true;
  }
  function T(t, e, n) {
    return (t === 0 && !A(t) || n !== undefined && t <= -n) && (e === undefined || n !== undefined && e >= n);
  }
  function I(t, e, n) {
    if (t === undefined) {
      return n;
    } else if (A(t)) {
      if (e === Infinity) {
        return e;
      } else {
        return Math.max(0, e + t) | 0;
      }
    } else if (e === undefined || e === t) {
      return t;
    } else {
      return Math.min(e, t) | 0;
    }
  }
  function A(t) {
    return t < 0 || t === 0 && 1 / t == -Infinity;
  }
  function C(t) {
    return !!t && !!t[x];
  }
  function M(t) {
    return !!t && !!t[P];
  }
  function k(t) {
    return !!t && !!t[B];
  }
  function O(t) {
    return M(t) || k(t);
  }
  function R(t) {
    return !!t && !!t[L];
  }
  function D(t) {
    return !!t && !!t[F];
  }
  function N(t) {
    return !!t && typeof t.equals == "function" && typeof t.hashCode == "function";
  }
  var x = "@@__IMMUTABLE_ITERABLE__@@";
  var P = "@@__IMMUTABLE_KEYED__@@";
  var B = "@@__IMMUTABLE_INDEXED__@@";
  var L = "@@__IMMUTABLE_ORDERED__@@";
  var F = "@@__IMMUTABLE_RECORD__@@";
  function j(t) {
    if (C(t)) {
      return t;
    } else {
      return Q(t);
    }
  }
  var U = function (t) {
    function e(t) {
      if (M(t)) {
        return t;
      } else {
        return tt(t);
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    return e;
  }(j);
  var z = function (t) {
    function e(t) {
      if (k(t)) {
        return t;
      } else {
        return te(t);
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    return e;
  }(j);
  var H = function (t) {
    function e(t) {
      if (C(t) && !O(t)) {
        return t;
      } else {
        return tn(t);
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    return e;
  }(j);
  j.Keyed = U;
  j.Indexed = z;
  j.Set = H;
  var V = typeof Symbol == "function" && Symbol.iterator;
  var Z = "@@iterator";
  var q = V || Z;
  function W(t) {
    this.next = t;
  }
  function G(t, e, n, r) {
    var i = t === 0 ? e : t === 1 ? n : [e, n];
    if (r) {
      r.value = i;
    } else {
      r = {
        value: i,
        done: false
      };
    }
    return r;
  }
  function Y() {
    return {
      value: undefined,
      done: true
    };
  }
  function K(t) {
    return t && typeof t.next == "function";
  }
  function $(t) {
    var e = X(t);
    return e && e.call(t);
  }
  function X(t) {
    var e = t && (V && t[V] || t[Z]);
    if (typeof e == "function") {
      return e;
    }
  }
  function J(t) {
    return t && typeof t.length == "number";
  }
  W.prototype.toString = function () {
    return "[Iterator]";
  };
  W.KEYS = 0;
  W.VALUES = 1;
  W.ENTRIES = 2;
  W.prototype.inspect = W.prototype.toSource = function () {
    return this.toString();
  };
  W.prototype[q] = function () {
    return this;
  };
  var Q = function (t) {
    function e(t) {
      if (t == null) {
        return tc();
      } else if (C(t) || D(t)) {
        return t.toSeq();
      } else {
        return function (t) {
          var e = th(t);
          if (e) {
            return e;
          }
          if (typeof t == "object") {
            return new to(t);
          }
          throw TypeError("Expected Array or collection object of values, or keyed object: " + t);
        }(t);
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.toSeq = function () {
      return this;
    };
    e.prototype.toString = function () {
      return this.__toString("Seq {", "}");
    };
    e.prototype.cacheResult = function () {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };
    e.prototype.__iterate = function (t, e) {
      var n = this._cache;
      if (n) {
        var r = n.length;
        var i = 0;
        while (i !== r) {
          var o = n[e ? r - ++i : i++];
          if (t(o[1], o[0], this) === false) {
            break;
          }
        }
        return i;
      }
      return this.__iterateUncached(t, e);
    };
    e.prototype.__iterator = function (t, e) {
      var n = this._cache;
      if (n) {
        var r = n.length;
        var i = 0;
        return new W(function () {
          if (i === r) {
            return Y();
          }
          var o = n[e ? r - ++i : i++];
          return G(t, o[0], o[1]);
        });
      }
      return this.__iteratorUncached(t, e);
    };
    return e;
  }(j);
  var tt = function (t) {
    function e(t) {
      if (t == null) {
        return tc().toKeyedSeq();
      } else if (C(t)) {
        if (M(t)) {
          return t.toSeq();
        } else {
          return t.fromEntrySeq();
        }
      } else if (D(t)) {
        return t.toSeq();
      } else {
        return tl(t);
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.toKeyedSeq = function () {
      return this;
    };
    return e;
  }(Q);
  var te = function (t) {
    function e(t) {
      if (t == null) {
        return tc();
      } else if (C(t)) {
        if (M(t)) {
          return t.entrySeq();
        } else {
          return t.toIndexedSeq();
        }
      } else if (D(t)) {
        return t.toSeq().entrySeq();
      } else {
        return tp(t);
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.of = function () {
      return e(arguments);
    };
    e.prototype.toIndexedSeq = function () {
      return this;
    };
    e.prototype.toString = function () {
      return this.__toString("Seq [", "]");
    };
    return e;
  }(Q);
  var tn = function (t) {
    function e(t) {
      return (C(t) && !O(t) ? t : te(t)).toSetSeq();
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.of = function () {
      return e(arguments);
    };
    e.prototype.toSetSeq = function () {
      return this;
    };
    return e;
  }(Q);
  Q.isSeq = tu;
  Q.Keyed = tt;
  Q.Set = tn;
  Q.Indexed = te;
  var tr = "@@__IMMUTABLE_SEQ__@@";
  Q.prototype[tr] = true;
  var ti = function (t) {
    function e(t) {
      this._array = t;
      this.size = t.length;
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.get = function (t, e) {
      if (this.has(t)) {
        return this._array[w(this, t)];
      } else {
        return e;
      }
    };
    e.prototype.__iterate = function (t, e) {
      var n = this._array;
      var r = n.length;
      var i = 0;
      while (i !== r) {
        var o = e ? r - ++i : i++;
        if (t(n[o], o, this) === false) {
          break;
        }
      }
      return i;
    };
    e.prototype.__iterator = function (t, e) {
      var n = this._array;
      var r = n.length;
      var i = 0;
      return new W(function () {
        if (i === r) {
          return Y();
        }
        var o = e ? r - ++i : i++;
        return G(t, o, n[o]);
      });
    };
    return e;
  }(te);
  var to = function (t) {
    function e(t) {
      var e = Object.keys(t);
      this._object = t;
      this._keys = e;
      this.size = e.length;
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.get = function (t, e) {
      if (e === undefined || this.has(t)) {
        return this._object[t];
      } else {
        return e;
      }
    };
    e.prototype.has = function (t) {
      return this._object.hasOwnProperty(t);
    };
    e.prototype.__iterate = function (t, e) {
      var n = this._object;
      var r = this._keys;
      var i = r.length;
      var o = 0;
      while (o !== i) {
        var s = r[e ? i - ++o : o++];
        if (t(n[s], s, this) === false) {
          break;
        }
      }
      return o;
    };
    e.prototype.__iterator = function (t, e) {
      var n = this._object;
      var r = this._keys;
      var i = r.length;
      var o = 0;
      return new W(function () {
        if (o === i) {
          return Y();
        }
        var s = r[e ? i - ++o : o++];
        return G(t, s, n[s]);
      });
    };
    return e;
  }(tt);
  to.prototype[L] = true;
  var ts = function (t) {
    function e(t) {
      this._collection = t;
      this.size = t.length || t.size;
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.__iterateUncached = function (t, e) {
      if (e) {
        return this.cacheResult().__iterate(t, e);
      }
      var n;
      var r = $(this._collection);
      var i = 0;
      if (K(r)) {
        while (!(n = r.next()).done && t(n.value, i++, this) !== false);
      }
      return i;
    };
    e.prototype.__iteratorUncached = function (t, e) {
      if (e) {
        return this.cacheResult().__iterator(t, e);
      }
      var n = $(this._collection);
      if (!K(n)) {
        return new W(Y);
      }
      var r = 0;
      return new W(function () {
        var e = n.next();
        if (e.done) {
          return e;
        } else {
          return G(t, r++, e.value);
        }
      });
    };
    return e;
  }(te);
  var ta = function (t) {
    function e(t) {
      this._iterator = t;
      this._iteratorCache = [];
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.__iterateUncached = function (t, e) {
      if (e) {
        return this.cacheResult().__iterate(t, e);
      }
      var n;
      var r = this._iterator;
      var i = this._iteratorCache;
      var o = 0;
      while (o < i.length) {
        if (t(i[o], o++, this) === false) {
          return o;
        }
      }
      while (!(n = r.next()).done) {
        var s = n.value;
        i[o] = s;
        if (t(s, o++, this) === false) {
          break;
        }
      }
      return o;
    };
    e.prototype.__iteratorUncached = function (t, e) {
      if (e) {
        return this.cacheResult().__iterator(t, e);
      }
      var n = this._iterator;
      var r = this._iteratorCache;
      var i = 0;
      return new W(function () {
        if (i >= r.length) {
          var e = n.next();
          if (e.done) {
            return e;
          }
          r[i] = e.value;
        }
        return G(t, i, r[i++]);
      });
    };
    return e;
  }(te);
  function tu(t) {
    return !!t && !!t[tr];
  }
  function tc() {
    return r ||= new ti([]);
  }
  function tl(t) {
    var e = Array.isArray(t) ? new ti(t) : K(t) ? new ta(t) : X(t) ? new ts(t) : undefined;
    if (e) {
      return e.fromEntrySeq();
    }
    if (typeof t == "object") {
      return new to(t);
    }
    throw TypeError("Expected Array or collection object of [k, v] entries, or keyed object: " + t);
  }
  function tp(t) {
    var e = th(t);
    if (e) {
      return e;
    }
    throw TypeError("Expected Array or collection object of values: " + t);
  }
  function th(t) {
    if (J(t)) {
      return new ti(t);
    } else if (K(t)) {
      return new ta(t);
    } else if (X(t)) {
      return new ts(t);
    } else {
      return undefined;
    }
  }
  function tf(t, e) {
    if (t === e || t != t && e != e) {
      return true;
    }
    if (!t || !e) {
      return false;
    }
    if (typeof t.valueOf == "function" && typeof e.valueOf == "function") {
      if ((t = t.valueOf()) === (e = e.valueOf()) || t != t && e != e) {
        return true;
      }
      if (!t || !e) {
        return false;
      }
    }
    return !!N(t) && !!N(e) && !!t.equals(e);
  }
  function td(t, e) {
    return function t(e, n, r, i, o, s) {
      var a;
      var u = Array.isArray(r) ? te : (a = r) && (a.constructor === Object || a.constructor === undefined) ? tt : null;
      if (u) {
        if (~e.indexOf(r)) {
          throw TypeError("Cannot convert circular structure to Immutable");
        }
        e.push(r);
        if (o && i !== "") {
          o.push(i);
        }
        var c = n.call(s, i, u(r).map(function (i, s) {
          return t(e, n, i, s, o, r);
        }), o && o.slice());
        e.pop();
        if (o) {
          o.pop();
        }
        return c;
      }
      return r;
    }([], e || tv, t, "", e && e.length > 2 ? [] : undefined, {
      "": t
    });
  }
  function tv(t, e) {
    if (M(e)) {
      return e.toMap();
    } else {
      return e.toList();
    }
  }
  var ty = typeof Math.imul == "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function (t, e) {
    var n = (t |= 0) & 65535;
    var r = (e |= 0) & 65535;
    return n * r + ((t >>> 16) * r + n * (e >>> 16) << 16 >>> 0) | 0;
  };
  function tg(t) {
    return t >>> 1 & 1073741824 | t & -1073741825;
  }
  function t_(t) {
    if (t === false || t == null || typeof t.valueOf == "function" && ((t = t.valueOf()) === false || t == null)) {
      return 0;
    }
    if (t === true) {
      return 1;
    }
    var e;
    var n;
    var r = typeof t;
    if (r === "number") {
      if (t != t || t === Infinity) {
        return 0;
      }
      var o = t | 0;
      for (o !== t && (o ^= t * 4294967295); t > 4294967295;) {
        t /= 4294967295;
        o ^= t;
      }
      return tg(o);
    }
    if (r === "string") {
      if (t.length > tI) {
        if ((n = tM[e = t]) === undefined) {
          n = tm(e);
          if (tC === tA) {
            tC = 0;
            tM = {};
          }
          tC++;
          tM[e] = n;
        }
        return n;
      } else {
        return tm(t);
      }
    }
    if (typeof t.hashCode == "function") {
      return tg(t.hashCode());
    }
    if (r === "object") {
      return function (t) {
        var e;
        if (tw && (e = i.get(t)) !== undefined || (e = t[tT]) !== undefined || !tE && ((e = t.propertyIsEnumerable && t.propertyIsEnumerable[tT]) !== undefined || (e = function (t) {
          if (t && t.nodeType > 0) {
            switch (t.nodeType) {
              case 1:
                return t.uniqueID;
              case 9:
                return t.documentElement && t.documentElement.uniqueID;
            }
          }
        }(t)) !== undefined)) {
          return e;
        }
        e = ++tS;
        if (tS & 1073741824) {
          tS = 0;
        }
        if (tw) {
          i.set(t, e);
        } else if (tb !== undefined && tb(t) === false) {
          throw Error("Non-extensible objects are not allowed as keys.");
        } else if (tE) {
          Object.defineProperty(t, tT, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: e
          });
        } else if (t.propertyIsEnumerable !== undefined && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) {
          t.propertyIsEnumerable = function () {
            return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
          };
          t.propertyIsEnumerable[tT] = e;
        } else if (t.nodeType !== undefined) {
          t[tT] = e;
        } else {
          throw Error("Unable to set a non-enumerable property on object.");
        }
        return e;
      }(t);
    }
    if (typeof t.toString == "function") {
      return tm(t.toString());
    }
    throw Error("Value type " + r + " cannot be hashed.");
  }
  function tm(t) {
    var e = 0;
    var n = 0;
    for (; n < t.length; n++) {
      e = e * 31 + t.charCodeAt(n) | 0;
    }
    return tg(e);
  }
  var tb = Object.isExtensible;
  var tE = function () {
    try {
      Object.defineProperty({}, "@", {});
      return true;
    } catch (t) {
      return false;
    }
  }();
  var tw = typeof WeakMap == "function";
  if (tw) {
    i = new WeakMap();
  }
  var tS = 0;
  var tT = "__immutablehash__";
  if (typeof Symbol == "function") {
    tT = Symbol(tT);
  }
  var tI = 16;
  var tA = 255;
  var tC = 0;
  var tM = {};
  var tk = function (t) {
    function e(t, e) {
      this._iter = t;
      this._useKeys = e;
      this.size = t.size;
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.get = function (t, e) {
      return this._iter.get(t, e);
    };
    e.prototype.has = function (t) {
      return this._iter.has(t);
    };
    e.prototype.valueSeq = function () {
      return this._iter.valueSeq();
    };
    e.prototype.reverse = function () {
      var t = this;
      var e = tP(this, true);
      if (!this._useKeys) {
        e.valueSeq = function () {
          return t._iter.toSeq().reverse();
        };
      }
      return e;
    };
    e.prototype.map = function (t, e) {
      var n = this;
      var r = tx(this, t, e);
      if (!this._useKeys) {
        r.valueSeq = function () {
          return n._iter.toSeq().map(t, e);
        };
      }
      return r;
    };
    e.prototype.__iterate = function (t, e) {
      var n = this;
      return this._iter.__iterate(function (e, r) {
        return t(e, r, n);
      }, e);
    };
    e.prototype.__iterator = function (t, e) {
      return this._iter.__iterator(t, e);
    };
    return e;
  }(tt);
  tk.prototype[L] = true;
  var tO = function (t) {
    function e(t) {
      this._iter = t;
      this.size = t.size;
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.includes = function (t) {
      return this._iter.includes(t);
    };
    e.prototype.__iterate = function (t, e) {
      var n = this;
      var r = 0;
      if (e) {
        E(this);
      }
      return this._iter.__iterate(function (i) {
        return t(i, e ? n.size - ++r : r++, n);
      }, e);
    };
    e.prototype.__iterator = function (t, e) {
      var n = this;
      var r = this._iter.__iterator(1, e);
      var i = 0;
      if (e) {
        E(this);
      }
      return new W(function () {
        var o = r.next();
        if (o.done) {
          return o;
        } else {
          return G(t, e ? n.size - ++i : i++, o.value, o);
        }
      });
    };
    return e;
  }(te);
  var tR = function (t) {
    function e(t) {
      this._iter = t;
      this.size = t.size;
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.has = function (t) {
      return this._iter.includes(t);
    };
    e.prototype.__iterate = function (t, e) {
      var n = this;
      return this._iter.__iterate(function (e) {
        return t(e, e, n);
      }, e);
    };
    e.prototype.__iterator = function (t, e) {
      var n = this._iter.__iterator(1, e);
      return new W(function () {
        var e = n.next();
        if (e.done) {
          return e;
        } else {
          return G(t, e.value, e.value, e);
        }
      });
    };
    return e;
  }(tn);
  var tD = function (t) {
    function e(t) {
      this._iter = t;
      this.size = t.size;
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.entrySeq = function () {
      return this._iter.toSeq();
    };
    e.prototype.__iterate = function (t, e) {
      var n = this;
      return this._iter.__iterate(function (e) {
        if (e) {
          tq(e);
          var r = C(e);
          return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n);
        }
      }, e);
    };
    e.prototype.__iterator = function (t, e) {
      var n = this._iter.__iterator(1, e);
      return new W(function () {
        while (true) {
          var e = n.next();
          if (e.done) {
            return e;
          }
          var r = e.value;
          if (r) {
            tq(r);
            var i = C(r);
            return G(t, i ? r.get(0) : r[0], i ? r.get(1) : r[1], e);
          }
        }
      });
    };
    return e;
  }(tt);
  function tN(t) {
    var e = tG(t);
    e._iter = t;
    e.size = t.size;
    e.flip = function () {
      return t;
    };
    e.reverse = function () {
      var e = t.reverse.apply(this);
      e.flip = function () {
        return t.reverse();
      };
      return e;
    };
    e.has = function (e) {
      return t.includes(e);
    };
    e.includes = function (e) {
      return t.has(e);
    };
    e.cacheResult = tY;
    e.__iterateUncached = function (e, n) {
      var r = this;
      return t.__iterate(function (t, n) {
        return e(n, t, r) !== false;
      }, n);
    };
    e.__iteratorUncached = function (e, n) {
      if (e === 2) {
        var r = t.__iterator(e, n);
        return new W(function () {
          var t = r.next();
          if (!t.done) {
            var e = t.value[0];
            t.value[0] = t.value[1];
            t.value[1] = e;
          }
          return t;
        });
      }
      return t.__iterator(+(e !== 1), n);
    };
    return e;
  }
  function tx(t, e, n) {
    var r = tG(t);
    r.size = t.size;
    r.has = function (e) {
      return t.has(e);
    };
    r.get = function (r, i) {
      var o = t.get(r, d);
      if (o === d) {
        return i;
      } else {
        return e.call(n, o, r, t);
      }
    };
    r.__iterateUncached = function (r, i) {
      var o = this;
      return t.__iterate(function (t, i, s) {
        return r(e.call(n, t, i, s), i, o) !== false;
      }, i);
    };
    r.__iteratorUncached = function (r, i) {
      var o = t.__iterator(2, i);
      return new W(function () {
        var i = o.next();
        if (i.done) {
          return i;
        }
        var s = i.value;
        var a = s[0];
        return G(r, a, e.call(n, s[1], a, t), i);
      });
    };
    return r;
  }
  function tP(t, e) {
    var n = this;
    var r = tG(t);
    r._iter = t;
    r.size = t.size;
    r.reverse = function () {
      return t;
    };
    if (t.flip) {
      r.flip = function () {
        var e = tN(t);
        e.reverse = function () {
          return t.flip();
        };
        return e;
      };
    }
    r.get = function (n, r) {
      return t.get(e ? n : -1 - n, r);
    };
    r.has = function (n) {
      return t.has(e ? n : -1 - n);
    };
    r.includes = function (e) {
      return t.includes(e);
    };
    r.cacheResult = tY;
    r.__iterate = function (n, r) {
      var i = this;
      var o = 0;
      if (r) {
        E(t);
      }
      return t.__iterate(function (t, s) {
        return n(t, e ? s : r ? i.size - ++o : o++, i);
      }, !r);
    };
    r.__iterator = function (r, i) {
      var o = 0;
      if (i) {
        E(t);
      }
      var s = t.__iterator(2, !i);
      return new W(function () {
        var t = s.next();
        if (t.done) {
          return t;
        }
        var a = t.value;
        return G(r, e ? a[0] : i ? n.size - ++o : o++, a[1], t);
      });
    };
    return r;
  }
  function tB(t, e, n, r) {
    var i = tG(t);
    if (r) {
      i.has = function (r) {
        var i = t.get(r, d);
        return i !== d && !!e.call(n, i, r, t);
      };
      i.get = function (r, i) {
        var o = t.get(r, d);
        if (o !== d && e.call(n, o, r, t)) {
          return o;
        } else {
          return i;
        }
      };
    }
    i.__iterateUncached = function (i, o) {
      var s = this;
      var a = 0;
      t.__iterate(function (t, o, u) {
        if (e.call(n, t, o, u)) {
          a++;
          return i(t, r ? o : a - 1, s);
        }
      }, o);
      return a;
    };
    i.__iteratorUncached = function (i, o) {
      var s = t.__iterator(2, o);
      var a = 0;
      return new W(function () {
        while (true) {
          var o = s.next();
          if (o.done) {
            return o;
          }
          var u = o.value;
          var c = u[0];
          var l = u[1];
          if (e.call(n, l, c, t)) {
            return G(i, r ? c : a++, l, o);
          }
        }
      });
    };
    return i;
  }
  function tL(t, e, n, r) {
    var i;
    var o = t.size;
    if (T(e, n, o)) {
      return t;
    }
    var s = I(e, o, 0);
    var a = I(n, o, o);
    if (s != s || a != a) {
      return tL(t.toSeq().cacheResult(), e, n, r);
    }
    var u = a - s;
    if (u == u) {
      i = u < 0 ? 0 : u;
    }
    var c = tG(t);
    c.size = i === 0 ? i : t.size && i || undefined;
    if (!r && tu(t) && i >= 0) {
      c.get = function (e, n) {
        if ((e = w(this, e)) >= 0 && e < i) {
          return t.get(e + s, n);
        } else {
          return n;
        }
      };
    }
    c.__iterateUncached = function (e, n) {
      var o = this;
      if (i === 0) {
        return 0;
      }
      if (n) {
        return this.cacheResult().__iterate(e, n);
      }
      var a = 0;
      var u = true;
      var c = 0;
      t.__iterate(function (t, n) {
        if (!(u &&= a++ < s)) {
          c++;
          return e(t, r ? n : c - 1, o) !== false && c !== i;
        }
      });
      return c;
    };
    c.__iteratorUncached = function (e, n) {
      if (i !== 0 && n) {
        return this.cacheResult().__iterator(e, n);
      }
      if (i === 0) {
        return new W(Y);
      }
      var o = t.__iterator(e, n);
      var a = 0;
      var u = 0;
      return new W(function () {
        while (a++ < s) {
          o.next();
        }
        if (++u > i) {
          return Y();
        }
        var t = o.next();
        if (r || e === 1 || t.done) {
          return t;
        } else if (e === 0) {
          return G(e, u - 1, undefined, t);
        } else {
          return G(e, u - 1, t.value[1], t);
        }
      });
    };
    return c;
  }
  function tF(t, e, n, r) {
    var i = tG(t);
    i.__iterateUncached = function (i, o) {
      var s = this;
      if (o) {
        return this.cacheResult().__iterate(i, o);
      }
      var a = true;
      var u = 0;
      t.__iterate(function (t, o, c) {
        if (!(a &&= e.call(n, t, o, c))) {
          u++;
          return i(t, r ? o : u - 1, s);
        }
      });
      return u;
    };
    i.__iteratorUncached = function (i, o) {
      var s = this;
      if (o) {
        return this.cacheResult().__iterator(i, o);
      }
      var a = t.__iterator(2, o);
      var u = true;
      var c = 0;
      return new W(function () {
        do {
          if ((t = a.next()).done) {
            if (r || i === 1) {
              return t;
            }
            if (i === 0) {
              return G(i, c++, undefined, t);
            }
            return G(i, c++, t.value[1], t);
          }
          var t;
          var o;
          var l;
          var p = t.value;
          o = p[0];
          l = p[1];
          u &&= e.call(n, l, o, s);
        } while (u);
        if (i === 2) {
          return t;
        } else {
          return G(i, o, l, t);
        }
      });
    };
    return i;
  }
  function tj(t, e, n) {
    var r = tG(t);
    r.__iterateUncached = function (i, o) {
      if (o) {
        return this.cacheResult().__iterate(i, o);
      }
      var s = 0;
      var a = false;
      (function t(u, c) {
        u.__iterate(function (o, u) {
          if ((!e || c < e) && C(o)) {
            t(o, c + 1);
          } else {
            s++;
            if (i(o, n ? u : s - 1, r) === false) {
              a = true;
            }
          }
          return !a;
        }, o);
      })(t, 0);
      return s;
    };
    r.__iteratorUncached = function (r, i) {
      if (i) {
        return this.cacheResult().__iterator(r, i);
      }
      var o = t.__iterator(r, i);
      var s = [];
      var a = 0;
      return new W(function () {
        while (o) {
          var t = o.next();
          if (t.done !== false) {
            o = s.pop();
            continue;
          }
          var u = t.value;
          if (r === 2) {
            u = u[1];
          }
          if (!!e && !(s.length < e) || !C(u)) {
            if (n) {
              return t;
            } else {
              return G(r, a++, u, t);
            }
          }
          s.push(o);
          o = u.__iterator(r, i);
        }
        return Y();
      });
    };
    return r;
  }
  function tU(t, e, n) {
    e ||= tK;
    var r = M(t);
    var i = 0;
    var o = t.toSeq().map(function (e, r) {
      return [r, e, i++, n ? n(e, r, t) : e];
    }).toArray();
    o.sort(function (t, n) {
      return e(t[3], n[3]) || t[2] - n[2];
    }).forEach(r ? function (t, e) {
      o[e].length = 2;
    } : function (t, e) {
      o[e] = t[1];
    });
    if (r) {
      return tt(o);
    } else if (k(t)) {
      return te(o);
    } else {
      return tn(o);
    }
  }
  function tz(t, e, n) {
    e ||= tK;
    if (n) {
      var r = t.toSeq().map(function (e, r) {
        return [e, n(e, r, t)];
      }).reduce(function (t, n) {
        if (tH(e, t[1], n[1])) {
          return n;
        } else {
          return t;
        }
      });
      return r && r[0];
    }
    return t.reduce(function (t, n) {
      if (tH(e, t, n)) {
        return n;
      } else {
        return t;
      }
    });
  }
  function tH(t, e, n) {
    var r = t(n, e);
    return r === 0 && n !== e && (n == null || n != n) || r > 0;
  }
  function tV(t, e, n, r) {
    var i = tG(t);
    var o = new ti(n).map(function (t) {
      return t.size;
    });
    i.size = r ? o.max() : o.min();
    i.__iterate = function (t, e) {
      var n;
      var r = this.__iterator(1, e);
      var i = 0;
      while (!(n = r.next()).done && t(n.value, i++, this) !== false);
      return i;
    };
    i.__iteratorUncached = function (t, i) {
      var o = n.map(function (t) {
        t = j(t);
        return $(i ? t.reverse() : t);
      });
      var s = 0;
      var a = false;
      return new W(function () {
        var n;
        if (!a) {
          n = o.map(function (t) {
            return t.next();
          });
          a = r ? n.every(function (t) {
            return t.done;
          }) : n.some(function (t) {
            return t.done;
          });
        }
        if (a) {
          return Y();
        } else {
          return G(t, s++, e.apply(null, n.map(function (t) {
            return t.value;
          })));
        }
      });
    };
    return i;
  }
  function tZ(t, e) {
    if (t === e) {
      return t;
    } else if (tu(t)) {
      return e;
    } else {
      return t.constructor(e);
    }
  }
  function tq(t) {
    if (t !== Object(t)) {
      throw TypeError("Expected [K, V] tuple: " + t);
    }
  }
  function tW(t) {
    if (M(t)) {
      return U;
    } else if (k(t)) {
      return z;
    } else {
      return H;
    }
  }
  function tG(t) {
    return Object.create((M(t) ? tt : k(t) ? te : tn).prototype);
  }
  function tY() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Q.prototype.cacheResult.call(this);
    }
  }
  function tK(t, e) {
    if (t === undefined && e === undefined) {
      return 0;
    } else if (t === undefined) {
      return 1;
    } else if (e === undefined) {
      return -1;
    } else if (t > e) {
      return 1;
    } else if (t < e) {
      return -1;
    } else {
      return 0;
    }
  }
  function t$(t) {
    if (J(t) && typeof t != "string") {
      return t;
    }
    if (R(t)) {
      return t.toArray();
    }
    throw TypeError("Invalid keyPath: expected Ordered Collection or Array: " + t);
  }
  function tX(t, e) {
    if (!t) {
      throw Error(e);
    }
  }
  function tJ(t) {
    tX(t !== Infinity, "Cannot perform this action with an infinite size.");
  }
  function tQ(t) {
    if (typeof t == "string") {
      return JSON.stringify(t);
    } else {
      return String(t);
    }
  }
  tO.prototype.cacheResult = tk.prototype.cacheResult = tR.prototype.cacheResult = tD.prototype.cacheResult = tY;
  var t0 = function (t) {
    function e(e) {
      if (e == null) {
        return er();
      } else if (t1(e) && !R(e)) {
        return e;
      } else {
        return er().withMutations(function (n) {
          var r = t(e);
          tJ(r.size);
          r.forEach(function (t, e) {
            return n.set(e, t);
          });
        });
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.of = function () {
      var t = [];
      var e = arguments.length;
      while (e--) {
        t[e] = arguments[e];
      }
      return er().withMutations(function (e) {
        for (var n = 0; n < t.length; n += 2) {
          if (n + 1 >= t.length) {
            throw Error("Missing value for key: " + t[n]);
          }
          e.set(t[n], t[n + 1]);
        }
      });
    };
    e.prototype.toString = function () {
      return this.__toString("Map {", "}");
    };
    e.prototype.get = function (t, e) {
      if (this._root) {
        return this._root.get(0, undefined, t, e);
      } else {
        return e;
      }
    };
    e.prototype.set = function (t, e) {
      return ei(this, t, e);
    };
    e.prototype.setIn = function (t, e) {
      return this.updateIn(t, d, function () {
        return e;
      });
    };
    e.prototype.remove = function (t) {
      return ei(this, t, d);
    };
    e.prototype.deleteIn = function (t) {
      if ((t = [].concat(t$(t))).length) {
        var e = t.pop();
        return this.updateIn(t, function (t) {
          return t && t.remove(e);
        });
      }
    };
    e.prototype.deleteAll = function (t) {
      var e = j(t);
      if (e.size === 0) {
        return this;
      } else {
        return this.withMutations(function (t) {
          e.forEach(function (e) {
            return t.remove(e);
          });
        });
      }
    };
    e.prototype.update = function (t, e, n) {
      if (arguments.length == 1) {
        return t(this);
      } else {
        return this.updateIn([t], e, n);
      }
    };
    e.prototype.updateIn = function (t, e, n) {
      if (!n) {
        n = e;
        e = undefined;
      }
      var r = function t(e, n, r, i, o) {
        var s = e === d;
        if (r === n.length) {
          var a = s ? i : e;
          var u = o(a);
          if (u === a) {
            return e;
          } else {
            return u;
          }
        }
        if (!s && (!e || !e.set)) {
          throw TypeError("Invalid keyPath: Value at [" + n.slice(0, r).map(tQ) + "] does not have a .set() method and cannot be updated: " + e);
        }
        var c = n[r];
        var l = s ? d : e.get(c, d);
        var p = t(l, n, r + 1, i, o);
        if (p === l) {
          return e;
        } else if (p === d) {
          return e.remove(c);
        } else {
          return (s ? er() : e).set(c, p);
        }
      }(this, t$(t), 0, e, n);
      if (r === d) {
        return e;
      } else {
        return r;
      }
    };
    e.prototype.clear = function () {
      if (this.size === 0) {
        return this;
      } else if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      } else {
        return er();
      }
    };
    e.prototype.merge = function () {
      return eu(this, undefined, arguments);
    };
    e.prototype.mergeWith = function (t) {
      var e = [];
      var n = arguments.length - 1;
      while (n-- > 0) {
        e[n] = arguments[n + 1];
      }
      return eu(this, t, e);
    };
    e.prototype.mergeIn = function (t) {
      var e = [];
      var n = arguments.length - 1;
      while (n-- > 0) {
        e[n] = arguments[n + 1];
      }
      return this.updateIn(t, er(), function (t) {
        if (typeof t.merge == "function") {
          return t.merge.apply(t, e);
        } else {
          return e[e.length - 1];
        }
      });
    };
    e.prototype.mergeDeep = function () {
      return eu(this, ec, arguments);
    };
    e.prototype.mergeDeepWith = function (t) {
      var e = [];
      var n = arguments.length - 1;
      while (n-- > 0) {
        e[n] = arguments[n + 1];
      }
      return eu(this, el(t), e);
    };
    e.prototype.mergeDeepIn = function (t) {
      var e = [];
      var n = arguments.length - 1;
      while (n-- > 0) {
        e[n] = arguments[n + 1];
      }
      return this.updateIn(t, er(), function (t) {
        if (typeof t.mergeDeep == "function") {
          return t.mergeDeep.apply(t, e);
        } else {
          return e[e.length - 1];
        }
      });
    };
    e.prototype.sort = function (t) {
      return eD(tU(this, t));
    };
    e.prototype.sortBy = function (t, e) {
      return eD(tU(this, e, t));
    };
    e.prototype.withMutations = function (t) {
      var e = this.asMutable();
      t(e);
      if (e.wasAltered()) {
        return e.__ensureOwner(this.__ownerID);
      } else {
        return this;
      }
    };
    e.prototype.asMutable = function () {
      if (this.__ownerID) {
        return this;
      } else {
        return this.__ensureOwner(new m());
      }
    };
    e.prototype.asImmutable = function () {
      return this.__ensureOwner();
    };
    e.prototype.wasAltered = function () {
      return this.__altered;
    };
    e.prototype.__iterator = function (t, e) {
      return new t7(this, t, e);
    };
    e.prototype.__iterate = function (t, e) {
      var n = this;
      var r = 0;
      if (this._root) {
        this._root.iterate(function (e) {
          r++;
          return t(e[1], e[0], n);
        }, e);
      }
      return r;
    };
    e.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) {
        return this;
      } else if (t) {
        return en(this.size, this._root, t, this.__hash);
      } else if (this.size === 0) {
        return er();
      } else {
        this.__ownerID = t;
        this.__altered = false;
        return this;
      }
    };
    return e;
  }(U);
  function t1(t) {
    return !!t && !!t[t2];
  }
  t0.isMap = t1;
  var t2 = "@@__IMMUTABLE_MAP__@@";
  var t3 = t0.prototype;
  t3[t2] = true;
  t3[f] = t3.remove;
  t3.removeIn = t3.deleteIn;
  t3.removeAll = t3.deleteAll;
  t3["@@transducer/init"] = t3.asMutable;
  t3["@@transducer/step"] = function (t, e) {
    return t.set(e[0], e[1]);
  };
  t3["@@transducer/result"] = function (t) {
    return t.asImmutable();
  };
  function t6(t, e) {
    this.ownerID = t;
    this.entries = e;
  }
  t6.prototype.get = function (t, e, n, r) {
    var i = this.entries;
    var o = 0;
    var s = i.length;
    for (; o < s; o++) {
      if (tf(n, i[o][0])) {
        return i[o][1];
      }
    }
    return r;
  };
  t6.prototype.update = function (t, e, n, r, i, o, s) {
    var a = i === d;
    var u = this.entries;
    var c = 0;
    var l = u.length;
    for (; c < l && !tf(r, u[c][0]); c++);
    var p = c < l;
    if (p ? u[c][1] === i : a) {
      return this;
    }
    _(s);
    if (a || !p) {
      _(o);
    }
    if (!a || u.length !== 1) {
      if (!p && !a && u.length >= ed) {
        return function (t, e, n, r) {
          t ||= new m();
          var i = new t9(t, t_(n), [n, r]);
          var o = 0;
          for (; o < e.length; o++) {
            var s = e[o];
            i = i.update(t, 0, undefined, s[0], s[1]);
          }
          return i;
        }(t, u, r, i);
      }
      var h = t && t === this.ownerID;
      var f = h ? u : b(u);
      if (p) {
        if (a) {
          if (c === l - 1) {
            f.pop();
          } else {
            f[c] = f.pop();
          }
        } else {
          f[c] = [r, i];
        }
      } else {
        f.push([r, i]);
      }
      if (h) {
        this.entries = f;
        return this;
      } else {
        return new t6(t, f);
      }
    }
  };
  function t4(t, e, n) {
    this.ownerID = t;
    this.bitmap = e;
    this.nodes = n;
  }
  t4.prototype.get = function (t, e = t_(n), n, r) {
    var i = 1 << ((t === 0 ? e : e >>> t) & 31);
    var o = this.bitmap;
    if ((o & i) == 0) {
      return r;
    } else {
      return this.nodes[eh(o & i - 1)].get(t + 5, e, n, r);
    }
  };
  t4.prototype.update = function (t, e, n = t_(r), r, i, o, s) {
    var a = (e === 0 ? n : n >>> e) & 31;
    var u = 1 << a;
    var c = this.bitmap;
    var l = (c & u) != 0;
    if (!l && i === d) {
      return this;
    }
    var p = eh(c & u - 1);
    var h = this.nodes;
    var f = l ? h[p] : undefined;
    var v = eo(f, t, e + 5, n, r, i, o, s);
    if (v === f) {
      return this;
    }
    if (!l && v && h.length >= ev) {
      return function (t, e, n, r, i) {
        var o = 0;
        var s = Array(32);
        var a = 0;
        for (; n !== 0; a++, n >>>= 1) {
          s[a] = n & 1 ? e[o++] : undefined;
        }
        s[r] = i;
        return new t5(t, o + 1, s);
      }(t, h, c, a, v);
    }
    if (l && !v && h.length === 2 && es(h[p ^ 1])) {
      return h[p ^ 1];
    }
    if (l && v && h.length === 1 && es(v)) {
      return v;
    }
    var y = t && t === this.ownerID;
    var g = l ? v ? c : c ^ u : c | u;
    var _ = l ? v ? ef(h, p, v, y) : function (t, e, n) {
      var r = t.length - 1;
      if (n && e === r) {
        t.pop();
        return t;
      }
      var i = Array(r);
      var o = 0;
      var s = 0;
      for (; s < r; s++) {
        if (s === e) {
          o = 1;
        }
        i[s] = t[s + o];
      }
      return i;
    }(h, p, y) : function (t, e, n, r) {
      var i = t.length + 1;
      if (r && e + 1 === i) {
        t[e] = n;
        return t;
      }
      var o = Array(i);
      var s = 0;
      var a = 0;
      for (; a < i; a++) {
        if (a === e) {
          o[a] = n;
          s = -1;
        } else {
          o[a] = t[a + s];
        }
      }
      return o;
    }(h, p, v, y);
    if (y) {
      this.bitmap = g;
      this.nodes = _;
      return this;
    } else {
      return new t4(t, g, _);
    }
  };
  function t5(t, e, n) {
    this.ownerID = t;
    this.count = e;
    this.nodes = n;
  }
  t5.prototype.get = function (t, e = t_(n), n, r) {
    var i = (t === 0 ? e : e >>> t) & 31;
    var o = this.nodes[i];
    if (o) {
      return o.get(t + 5, e, n, r);
    } else {
      return r;
    }
  };
  t5.prototype.update = function (t, e, n = t_(r), r, i, o, s) {
    var a = (e === 0 ? n : n >>> e) & 31;
    var u = i === d;
    var c = this.nodes;
    var l = c[a];
    if (u && !l) {
      return this;
    }
    var p = eo(l, t, e + 5, n, r, i, o, s);
    if (p === l) {
      return this;
    }
    var h = this.count;
    if (l) {
      if (!p && --h < ey) {
        return function (t, e, n, r) {
          var i = 0;
          var o = 0;
          var s = Array(n);
          var a = 0;
          var u = 1;
          var c = e.length;
          for (; a < c; a++, u <<= 1) {
            var l = e[a];
            if (l !== undefined && a !== r) {
              i |= u;
              s[o++] = l;
            }
          }
          return new t4(t, i, s);
        }(t, c, h, a);
      }
    } else {
      h++;
    }
    var f = t && t === this.ownerID;
    var v = ef(c, a, p, f);
    if (f) {
      this.count = h;
      this.nodes = v;
      return this;
    } else {
      return new t5(t, h, v);
    }
  };
  function t8(t, e, n) {
    this.ownerID = t;
    this.keyHash = e;
    this.entries = n;
  }
  t8.prototype.get = function (t, e, n, r) {
    var i = this.entries;
    var o = 0;
    var s = i.length;
    for (; o < s; o++) {
      if (tf(n, i[o][0])) {
        return i[o][1];
      }
    }
    return r;
  };
  t8.prototype.update = function (t, e, n = t_(r), r, i, o, s) {
    var a = i === d;
    if (n !== this.keyHash) {
      if (a) {
        return this;
      } else {
        _(s);
        _(o);
        return ea(this, t, e, n, [r, i]);
      }
    }
    var u = this.entries;
    var c = 0;
    var l = u.length;
    for (; c < l && !tf(r, u[c][0]); c++);
    var p = c < l;
    if (p ? u[c][1] === i : a) {
      return this;
    }
    _(s);
    if (a || !p) {
      _(o);
    }
    if (a && l === 2) {
      return new t9(t, this.keyHash, u[c ^ 1]);
    }
    var h = t && t === this.ownerID;
    var f = h ? u : b(u);
    if (p) {
      if (a) {
        if (c === l - 1) {
          f.pop();
        } else {
          f[c] = f.pop();
        }
      } else {
        f[c] = [r, i];
      }
    } else {
      f.push([r, i]);
    }
    if (h) {
      this.entries = f;
      return this;
    } else {
      return new t8(t, this.keyHash, f);
    }
  };
  function t9(t, e, n) {
    this.ownerID = t;
    this.keyHash = e;
    this.entry = n;
  }
  t9.prototype.get = function (t, e, n, r) {
    if (tf(n, this.entry[0])) {
      return this.entry[1];
    } else {
      return r;
    }
  };
  t9.prototype.update = function (t, e, n, r, i, o, s) {
    var a = i === d;
    var u = tf(r, this.entry[0]);
    if (u ? i === this.entry[1] : a) {
      return this;
    }
    _(s);
    if (a) {
      _(o);
      return;
    }
    if (u) {
      if (t && t === this.ownerID) {
        this.entry[1] = i;
        return this;
      } else {
        return new t9(t, this.keyHash, [r, i]);
      }
    } else {
      _(o);
      return ea(this, t, e, t_(r), [r, i]);
    }
  };
  t6.prototype.iterate = t8.prototype.iterate = function (t, e) {
    var n = this.entries;
    var r = 0;
    var i = n.length - 1;
    for (; r <= i; r++) {
      if (t(n[e ? i - r : r]) === false) {
        return false;
      }
    }
  };
  t4.prototype.iterate = t5.prototype.iterate = function (t, e) {
    var n = this.nodes;
    var r = 0;
    var i = n.length - 1;
    for (; r <= i; r++) {
      var o = n[e ? i - r : r];
      if (o && o.iterate(t, e) === false) {
        return false;
      }
    }
  };
  t9.prototype.iterate = function (t, e) {
    return t(this.entry);
  };
  var t7 = function (t) {
    function e(t, e, n) {
      this._type = e;
      this._reverse = n;
      this._stack = t._root && ee(t._root);
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.next = function () {
      var t = this._type;
      var e = this._stack;
      while (e) {
        var n = e.node;
        var r = e.index++;
        var i = undefined;
        if (n.entry) {
          if (r === 0) {
            return et(t, n.entry);
          }
        } else if (n.entries) {
          if (r <= (i = n.entries.length - 1)) {
            return et(t, n.entries[this._reverse ? i - r : r]);
          }
        } else if (r <= (i = n.nodes.length - 1)) {
          var o = n.nodes[this._reverse ? i - r : r];
          if (o) {
            if (o.entry) {
              return et(t, o.entry);
            }
            e = this._stack = ee(o, e);
          }
          continue;
        }
        e = this._stack = this._stack.__prev;
      }
      return Y();
    };
    return e;
  }(W);
  function et(t, e) {
    return G(t, e[0], e[1]);
  }
  function ee(t, e) {
    return {
      node: t,
      index: 0,
      __prev: e
    };
  }
  function en(t, e, n, r) {
    var i = Object.create(t3);
    i.size = t;
    i._root = e;
    i.__ownerID = n;
    i.__hash = r;
    i.__altered = false;
    return i;
  }
  function er() {
    return o ||= en(0);
  }
  function ei(t, e, n) {
    if (t._root) {
      var r;
      var i;
      var o = g(v);
      var s = g(y);
      r = eo(t._root, t.__ownerID, 0, undefined, e, n, o, s);
      if (!s.value) {
        return t;
      }
      i = t.size + (o.value ? n === d ? -1 : 1 : 0);
    } else {
      if (n === d) {
        return t;
      }
      i = 1;
      r = new t6(t.__ownerID, [[e, n]]);
    }
    if (t.__ownerID) {
      t.size = i;
      t._root = r;
      t.__hash = undefined;
      t.__altered = true;
      return t;
    } else if (r) {
      return en(i, r);
    } else {
      return er();
    }
  }
  function eo(t, e, n, r, i, o, s, a) {
    if (t) {
      return t.update(e, n, r, i, o, s, a);
    } else if (o === d) {
      return t;
    } else {
      _(a);
      _(s);
      return new t9(e, r, [i, o]);
    }
  }
  function es(t) {
    return t.constructor === t9 || t.constructor === t8;
  }
  function ea(t, e, n, r, i) {
    if (t.keyHash === r) {
      return new t8(e, r, [t.entry, i]);
    }
    var o;
    var s = (n === 0 ? t.keyHash : t.keyHash >>> n) & 31;
    var a = (n === 0 ? r : r >>> n) & 31;
    var u = s === a ? [ea(t, e, n + 5, r, i)] : (o = new t9(e, r, i), s < a ? [t, o] : [o, t]);
    return new t4(e, 1 << s | 1 << a, u);
  }
  function eu(t, e, n) {
    var r = [];
    var i = 0;
    for (; i < n.length; i++) {
      var o = n[i];
      var s = U(o);
      if (!C(o)) {
        s = s.map(function (t) {
          return td(t);
        });
      }
      r.push(s);
    }
    return ep(t, e, r);
  }
  function ec(t, e) {
    if (t && t.mergeDeep && C(e)) {
      return t.mergeDeep(e);
    } else if (tf(t, e)) {
      return t;
    } else {
      return e;
    }
  }
  function el(t) {
    return function (e, n, r) {
      if (e && e.mergeDeepWith && C(n)) {
        return e.mergeDeepWith(t, n);
      }
      var i = t(e, n, r);
      if (tf(e, i)) {
        return e;
      } else {
        return i;
      }
    };
  }
  function ep(t, e, n) {
    if ((n = n.filter(function (t) {
      return t.size !== 0;
    })).length === 0) {
      return t;
    } else if (t.size !== 0 || t.__ownerID || n.length !== 1) {
      return t.withMutations(function (t) {
        var r = e ? function (n, r) {
          t.update(r, d, function (t) {
            if (t === d) {
              return n;
            } else {
              return e(t, n, r);
            }
          });
        } : function (e, n) {
          t.set(n, e);
        };
        var i = 0;
        for (; i < n.length; i++) {
          n[i].forEach(r);
        }
      });
    } else {
      return t.constructor(n[0]);
    }
  }
  function eh(t) {
    t -= t >> 1 & 1431655765;
    t = (t = (t & 858993459) + (t >> 2 & 858993459)) + (t >> 4) & 252645135;
    t += t >> 8;
    return (t += t >> 16) & 127;
  }
  function ef(t, e, n, r) {
    var i = r ? t : b(t);
    i[e] = n;
    return i;
  }
  var ed = 8;
  var ev = 16;
  var ey = 8;
  var eg = function (t) {
    function e(e) {
      var n = eI();
      if (e == null) {
        return n;
      }
      if (e_(e)) {
        return e;
      }
      var r = t(e);
      var i = r.size;
      if (i === 0) {
        return n;
      } else {
        tJ(i);
        if (i > 0 && i < 32) {
          return eT(0, i, 5, null, new eE(r.toArray()));
        } else {
          return n.withMutations(function (t) {
            t.setSize(i);
            r.forEach(function (e, n) {
              return t.set(n, e);
            });
          });
        }
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.of = function () {
      return this(arguments);
    };
    e.prototype.toString = function () {
      return this.__toString("List [", "]");
    };
    e.prototype.get = function (t, e) {
      if ((t = w(this, t)) >= 0 && t < this.size) {
        var n = eM(this, t += this._origin);
        return n && n.array[t & 31];
      }
      return e;
    };
    e.prototype.set = function (t, e) {
      return function (t, e, n) {
        if ((e = w(t, e)) != e) {
          return t;
        }
        if (e >= t.size || e < 0) {
          return t.withMutations(function (t) {
            if (e < 0) {
              ek(t, e).set(0, n);
            } else {
              ek(t, 0, e + 1).set(e, n);
            }
          });
        }
        e += t._origin;
        var r = t._tail;
        var i = t._root;
        var o = g(y);
        if (e >= eR(t._capacity)) {
          r = eA(r, t.__ownerID, 0, e, n, o);
        } else {
          i = eA(i, t.__ownerID, t._level, e, n, o);
        }
        if (o.value) {
          if (t.__ownerID) {
            t._root = i;
            t._tail = r;
            t.__hash = undefined;
            t.__altered = true;
            return t;
          } else {
            return eT(t._origin, t._capacity, t._level, i, r);
          }
        } else {
          return t;
        }
      }(this, t, e);
    };
    e.prototype.remove = function (t) {
      if (this.has(t)) {
        if (t === 0) {
          return this.shift();
        } else if (t === this.size - 1) {
          return this.pop();
        } else {
          return this.splice(t, 1);
        }
      } else {
        return this;
      }
    };
    e.prototype.insert = function (t, e) {
      return this.splice(t, 0, e);
    };
    e.prototype.clear = function () {
      if (this.size === 0) {
        return this;
      } else if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = 5;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      } else {
        return eI();
      }
    };
    e.prototype.push = function () {
      var t = arguments;
      var e = this.size;
      return this.withMutations(function (n) {
        ek(n, 0, e + t.length);
        for (var r = 0; r < t.length; r++) {
          n.set(e + r, t[r]);
        }
      });
    };
    e.prototype.pop = function () {
      return ek(this, 0, -1);
    };
    e.prototype.unshift = function () {
      var t = arguments;
      return this.withMutations(function (e) {
        ek(e, -t.length);
        for (var n = 0; n < t.length; n++) {
          e.set(n, t[n]);
        }
      });
    };
    e.prototype.shift = function () {
      return ek(this, 1);
    };
    e.prototype.merge = function () {
      return eO(this, undefined, arguments);
    };
    e.prototype.mergeWith = function (t) {
      var e = [];
      var n = arguments.length - 1;
      while (n-- > 0) {
        e[n] = arguments[n + 1];
      }
      return eO(this, t, e);
    };
    e.prototype.mergeDeep = function () {
      return eO(this, ec, arguments);
    };
    e.prototype.mergeDeepWith = function (t) {
      var e = [];
      var n = arguments.length - 1;
      while (n-- > 0) {
        e[n] = arguments[n + 1];
      }
      return eO(this, el(t), e);
    };
    e.prototype.setSize = function (t) {
      return ek(this, 0, t);
    };
    e.prototype.slice = function (t, e) {
      var n = this.size;
      if (T(t, e, n)) {
        return this;
      } else {
        return ek(this, I(t, n, 0), I(e, n, n));
      }
    };
    e.prototype.__iterator = function (t, e) {
      var n = e ? this.size : 0;
      var r = eS(this, e);
      return new W(function () {
        var i = r();
        if (i === ew) {
          return Y();
        } else {
          return G(t, e ? --n : n++, i);
        }
      });
    };
    e.prototype.__iterate = function (t, e) {
      var n;
      var r = e ? this.size : 0;
      var i = eS(this, e);
      while ((n = i()) !== ew && t(n, e ? --r : r++, this) !== false);
      return r;
    };
    e.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) {
        return this;
      } else if (t) {
        return eT(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash);
      } else if (this.size === 0) {
        return eI();
      } else {
        this.__ownerID = t;
        return this;
      }
    };
    return e;
  }(z);
  function e_(t) {
    return !!t && !!t[em];
  }
  eg.isList = e_;
  var em = "@@__IMMUTABLE_LIST__@@";
  var eb = eg.prototype;
  eb[em] = true;
  eb[f] = eb.remove;
  eb.setIn = t3.setIn;
  eb.deleteIn = eb.removeIn = t3.removeIn;
  eb.update = t3.update;
  eb.updateIn = t3.updateIn;
  eb.mergeIn = t3.mergeIn;
  eb.mergeDeepIn = t3.mergeDeepIn;
  eb.withMutations = t3.withMutations;
  eb.asMutable = t3.asMutable;
  eb.asImmutable = t3.asImmutable;
  eb.wasAltered = t3.wasAltered;
  eb["@@transducer/init"] = eb.asMutable;
  eb["@@transducer/step"] = function (t, e) {
    return t.push(e);
  };
  eb["@@transducer/result"] = t3["@@transducer/result"];
  function eE(t, e) {
    this.array = t;
    this.ownerID = e;
  }
  eE.prototype.removeBefore = function (t, e, n) {
    if (n === e ? 1 << e : this.array.length === 0) {
      return this;
    }
    var r;
    var i = n >>> e & 31;
    if (i >= this.array.length) {
      return new eE([], t);
    }
    var o = i === 0;
    if (e > 0) {
      var s = this.array[i];
      if ((r = s && s.removeBefore(t, e - 5, n)) === s && o) {
        return this;
      }
    }
    if (o && !r) {
      return this;
    }
    var a = eC(this, t);
    if (!o) {
      for (var u = 0; u < i; u++) {
        a.array[u] = undefined;
      }
    }
    if (r) {
      a.array[i] = r;
    }
    return a;
  };
  eE.prototype.removeAfter = function (t, e, n) {
    if (n === (e ? 1 << e : 0) || this.array.length === 0) {
      return this;
    }
    var r;
    var i = n - 1 >>> e & 31;
    if (i >= this.array.length) {
      return this;
    }
    if (e > 0) {
      var o = this.array[i];
      if ((r = o && o.removeAfter(t, e - 5, n)) === o && i === this.array.length - 1) {
        return this;
      }
    }
    var s = eC(this, t);
    s.array.splice(i + 1);
    if (r) {
      s.array[i] = r;
    }
    return s;
  };
  var ew = {};
  function eS(t, e) {
    var n = t._origin;
    var r = t._capacity;
    var i = eR(r);
    var o = t._tail;
    return function t(s, a, u) {
      var c;
      var l;
      var p;
      var h;
      var f;
      var d;
      var v;
      var y;
      var g;
      var _;
      var m;
      var b;
      if (a === 0) {
        c = s;
        p = (l = u) === i ? o && o.array : c && c.array;
        h = l > n ? 0 : n - l;
        if ((f = r - l) > 32) {
          f = 32;
        }
        return function () {
          if (h === f) {
            return ew;
          }
          var t = e ? --f : h++;
          return p && p[t];
        };
      } else {
        d = s;
        v = a;
        y = u;
        _ = d && d.array;
        m = y > n ? 0 : n - y >> v;
        if ((b = (r - y >> v) + 1) > 32) {
          b = 32;
        }
        return function () {
          while (true) {
            if (g) {
              var n = g();
              if (n !== ew) {
                return n;
              }
              g = null;
            }
            if (m === b) {
              return ew;
            }
            var r = e ? --b : m++;
            g = t(_ && _[r], v - 5, y + (r << v));
          }
        };
      }
    }(t._root, t._level, 0);
  }
  function eT(t, e, n, r, i, o, s) {
    var a = Object.create(eb);
    a.size = e - t;
    a._origin = t;
    a._capacity = e;
    a._level = n;
    a._root = r;
    a._tail = i;
    a.__ownerID = o;
    a.__hash = s;
    a.__altered = false;
    return a;
  }
  function eI() {
    return s ||= eT(0, 0, 5);
  }
  function eA(t, e, n, r, i, o) {
    var s;
    var a = r >>> n & 31;
    var u = t && a < t.array.length;
    if (!u && i === undefined) {
      return t;
    }
    if (n > 0) {
      var c = t && t.array[a];
      var l = eA(c, e, n - 5, r, i, o);
      if (l === c) {
        return t;
      } else {
        (s = eC(t, e)).array[a] = l;
        return s;
      }
    }
    if (u && t.array[a] === i) {
      return t;
    } else {
      _(o);
      s = eC(t, e);
      if (i === undefined && a === s.array.length - 1) {
        s.array.pop();
      } else {
        s.array[a] = i;
      }
      return s;
    }
  }
  function eC(t, e) {
    if (e && t && e === t.ownerID) {
      return t;
    } else {
      return new eE(t ? t.array.slice() : [], e);
    }
  }
  function eM(t, e) {
    if (e >= eR(t._capacity)) {
      return t._tail;
    }
    if (e < 1 << t._level + 5) {
      var n = t._root;
      var r = t._level;
      while (n && r > 0) {
        n = n.array[e >>> r & 31];
        r -= 5;
      }
      return n;
    }
  }
  function ek(t, e, n) {
    if (e !== undefined) {
      e |= 0;
    }
    if (n !== undefined) {
      n |= 0;
    }
    var r = t.__ownerID || new m();
    var i = t._origin;
    var o = t._capacity;
    var s = i + e;
    var a = n === undefined ? o : n < 0 ? o + n : i + n;
    if (s === i && a === o) {
      return t;
    }
    if (s >= a) {
      return t.clear();
    }
    var u = t._level;
    var c = t._root;
    var l = 0;
    while (s + l < 0) {
      c = new eE(c && c.array.length ? [undefined, c] : [], r);
      u += 5;
      l += 1 << u;
    }
    if (l) {
      s += l;
      i += l;
      a += l;
      o += l;
    }
    var p = eR(o);
    var h = eR(a);
    while (h >= 1 << u + 5) {
      c = new eE(c && c.array.length ? [c] : [], r);
      u += 5;
    }
    var f = t._tail;
    var d = h < p ? eM(t, a - 1) : h > p ? new eE([], r) : f;
    if (f && h > p && s < o && f.array.length) {
      var v = c = eC(c, r);
      var y = u;
      for (; y > 5; y -= 5) {
        var g = p >>> y & 31;
        v = v.array[g] = eC(v.array[g], r);
      }
      v.array[p >>> 5 & 31] = f;
    }
    if (a < o) {
      d = d && d.removeAfter(r, 0, a);
    }
    if (s >= h) {
      s -= h;
      a -= h;
      u = 5;
      c = null;
      d = d && d.removeBefore(r, 0, s);
    } else if (s > i || h < p) {
      for (l = 0; c;) {
        var _ = s >>> u & 31;
        if (_ !== h >>> u & 31) {
          break;
        }
        if (_) {
          l += (1 << u) * _;
        }
        u -= 5;
        c = c.array[_];
      }
      if (c && s > i) {
        c = c.removeBefore(r, u, s - l);
      }
      if (c && h < p) {
        c = c.removeAfter(r, u, h - l);
      }
      if (l) {
        s -= l;
        a -= l;
      }
    }
    if (t.__ownerID) {
      t.size = a - s;
      t._origin = s;
      t._capacity = a;
      t._level = u;
      t._root = c;
      t._tail = d;
      t.__hash = undefined;
      t.__altered = true;
      return t;
    } else {
      return eT(s, a, u, c, d);
    }
  }
  function eO(t, e, n) {
    var r = [];
    var i = 0;
    var o = 0;
    for (; o < n.length; o++) {
      var s = n[o];
      var a = z(s);
      if (a.size > i) {
        i = a.size;
      }
      if (!C(s)) {
        a = a.map(function (t) {
          return td(t);
        });
      }
      r.push(a);
    }
    if (i > t.size) {
      t = t.setSize(i);
    }
    return ep(t, e, r);
  }
  function eR(t) {
    if (t < 32) {
      return 0;
    } else {
      return t - 1 >>> 5 << 5;
    }
  }
  var eD = function (t) {
    function e(t) {
      if (t == null) {
        return eP();
      } else if (eN(t)) {
        return t;
      } else {
        return eP().withMutations(function (e) {
          var n = U(t);
          tJ(n.size);
          n.forEach(function (t, n) {
            return e.set(n, t);
          });
        });
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.of = function () {
      return this(arguments);
    };
    e.prototype.toString = function () {
      return this.__toString("OrderedMap {", "}");
    };
    e.prototype.get = function (t, e) {
      var n = this._map.get(t);
      if (n !== undefined) {
        return this._list.get(n)[1];
      } else {
        return e;
      }
    };
    e.prototype.clear = function () {
      if (this.size === 0) {
        return this;
      } else if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      } else {
        return eP();
      }
    };
    e.prototype.set = function (t, e) {
      return eB(this, t, e);
    };
    e.prototype.remove = function (t) {
      return eB(this, t, d);
    };
    e.prototype.wasAltered = function () {
      return this._map.wasAltered() || this._list.wasAltered();
    };
    e.prototype.__iterate = function (t, e) {
      var n = this;
      return this._list.__iterate(function (e) {
        return e && t(e[1], e[0], n);
      }, e);
    };
    e.prototype.__iterator = function (t, e) {
      return this._list.fromEntrySeq().__iterator(t, e);
    };
    e.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) {
        return this;
      }
      var e = this._map.__ensureOwner(t);
      var n = this._list.__ensureOwner(t);
      if (t) {
        return ex(e, n, t, this.__hash);
      } else if (this.size === 0) {
        return eP();
      } else {
        this.__ownerID = t;
        this._map = e;
        this._list = n;
        return this;
      }
    };
    return e;
  }(t0);
  function eN(t) {
    return t1(t) && R(t);
  }
  function ex(t, e, n, r) {
    var i = Object.create(eD.prototype);
    i.size = t ? t.size : 0;
    i._map = t;
    i._list = e;
    i.__ownerID = n;
    i.__hash = r;
    return i;
  }
  function eP() {
    return a ||= ex(er(), eI());
  }
  function eB(t, e, n) {
    var r;
    var i;
    var o = t._map;
    var s = t._list;
    var a = o.get(e);
    var u = a !== undefined;
    if (n === d) {
      if (!u) {
        return t;
      }
      if (s.size >= 32 && s.size >= o.size * 2) {
        r = (i = s.filter(function (t, e) {
          return t !== undefined && a !== e;
        })).toKeyedSeq().map(function (t) {
          return t[0];
        }).flip().toMap();
        if (t.__ownerID) {
          r.__ownerID = i.__ownerID = t.__ownerID;
        }
      } else {
        r = o.remove(e);
        i = a === s.size - 1 ? s.pop() : s.set(a, undefined);
      }
    } else if (u) {
      if (n === s.get(a)[1]) {
        return t;
      }
      r = o;
      i = s.set(a, [e, n]);
    } else {
      r = o.set(e, s.size);
      i = s.set(s.size, [e, n]);
    }
    if (t.__ownerID) {
      t.size = r.size;
      t._map = r;
      t._list = i;
      t.__hash = undefined;
      return t;
    } else {
      return ex(r, i);
    }
  }
  eD.isOrderedMap = eN;
  eD.prototype[L] = true;
  eD.prototype[f] = eD.prototype.remove;
  var eL = function (t) {
    function e(t) {
      if (t == null) {
        return eH();
      } else if (eF(t)) {
        return t;
      } else {
        return eH().pushAll(t);
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.of = function () {
      return this(arguments);
    };
    e.prototype.toString = function () {
      return this.__toString("Stack [", "]");
    };
    e.prototype.get = function (t, e) {
      var n = this._head;
      for (t = w(this, t); n && t--;) {
        n = n.next;
      }
      if (n) {
        return n.value;
      } else {
        return e;
      }
    };
    e.prototype.peek = function () {
      return this._head && this._head.value;
    };
    e.prototype.push = function () {
      var t = arguments;
      if (arguments.length == 0) {
        return this;
      }
      var e = this.size + arguments.length;
      var n = this._head;
      var r = arguments.length - 1;
      for (; r >= 0; r--) {
        n = {
          value: t[r],
          next: n
        };
      }
      if (this.__ownerID) {
        this.size = e;
        this._head = n;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      } else {
        return ez(e, n);
      }
    };
    e.prototype.pushAll = function (e) {
      if ((e = t(e)).size === 0) {
        return this;
      }
      if (this.size === 0 && eF(e)) {
        return e;
      }
      tJ(e.size);
      var n = this.size;
      var r = this._head;
      e.__iterate(function (t) {
        n++;
        r = {
          value: t,
          next: r
        };
      }, true);
      if (this.__ownerID) {
        this.size = n;
        this._head = r;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      } else {
        return ez(n, r);
      }
    };
    e.prototype.pop = function () {
      return this.slice(1);
    };
    e.prototype.clear = function () {
      if (this.size === 0) {
        return this;
      } else if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      } else {
        return eH();
      }
    };
    e.prototype.slice = function (e, n) {
      if (T(e, n, this.size)) {
        return this;
      }
      var r;
      var i = I(e, this.size, 0);
      if (I(n, r = this.size, r) !== this.size) {
        return t.prototype.slice.call(this, e, n);
      }
      var o = this.size - i;
      var s = this._head;
      while (i--) {
        s = s.next;
      }
      if (this.__ownerID) {
        this.size = o;
        this._head = s;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      } else {
        return ez(o, s);
      }
    };
    e.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) {
        return this;
      } else if (t) {
        return ez(this.size, this._head, t, this.__hash);
      } else if (this.size === 0) {
        return eH();
      } else {
        this.__ownerID = t;
        this.__altered = false;
        return this;
      }
    };
    e.prototype.__iterate = function (t, e) {
      var n = this;
      if (e) {
        return new ti(this.toArray()).__iterate(function (e, r) {
          return t(e, r, n);
        }, e);
      }
      var r = 0;
      var i = this._head;
      while (i && t(i.value, r++, n) !== false) {
        i = i.next;
      }
      return r;
    };
    e.prototype.__iterator = function (t, e) {
      if (e) {
        return new ti(this.toArray()).__iterator(t, e);
      }
      var n = 0;
      var r = this._head;
      return new W(function () {
        if (r) {
          var e = r.value;
          r = r.next;
          return G(t, n++, e);
        }
        return Y();
      });
    };
    return e;
  }(z);
  function eF(t) {
    return !!t && !!t[ej];
  }
  eL.isStack = eF;
  var ej = "@@__IMMUTABLE_STACK__@@";
  var eU = eL.prototype;
  function ez(t, e, n, r) {
    var i = Object.create(eU);
    i.size = t;
    i._head = e;
    i.__ownerID = n;
    i.__hash = r;
    i.__altered = false;
    return i;
  }
  function eH() {
    return u ||= ez(0);
  }
  function eV(t, e) {
    if (t === e) {
      return true;
    }
    if (!C(e) || t.size !== undefined && e.size !== undefined && t.size !== e.size || t.__hash !== undefined && e.__hash !== undefined && t.__hash !== e.__hash || M(t) !== M(e) || k(t) !== k(e) || R(t) !== R(e)) {
      return false;
    }
    if (t.size === 0 && e.size === 0) {
      return true;
    }
    var n = !O(t);
    if (R(t)) {
      var r = t.entries();
      return e.every(function (t, e) {
        var i = r.next().value;
        return i && tf(i[1], t) && (n || tf(i[0], e));
      }) && r.next().done;
    }
    var i = false;
    if (t.size === undefined) {
      if (e.size === undefined) {
        if (typeof t.cacheResult == "function") {
          t.cacheResult();
        }
      } else {
        i = true;
        var o = t;
        t = e;
        e = o;
      }
    }
    var s = true;
    var a = e.__iterate(function (e, r) {
      if (n ? !t.has(e) : i ? !tf(e, t.get(r, d)) : !tf(t.get(r, d), e)) {
        s = false;
        return false;
      }
    });
    return s && t.size === a;
  }
  function eZ(t, e) {
    function n(n) {
      t.prototype[n] = e[n];
    }
    Object.keys(e).forEach(n);
    if (Object.getOwnPropertySymbols) {
      Object.getOwnPropertySymbols(e).forEach(n);
    }
    return t;
  }
  eU[ej] = true;
  eU.withMutations = t3.withMutations;
  eU.asMutable = t3.asMutable;
  eU.asImmutable = t3.asImmutable;
  eU.wasAltered = t3.wasAltered;
  eU.shift = eU.pop;
  eU.unshift = eU.push;
  eU.unshiftAll = eU.pushAll;
  eU["@@transducer/init"] = eU.asMutable;
  eU["@@transducer/step"] = function (t, e) {
    return t.unshift(e);
  };
  eU["@@transducer/result"] = t3["@@transducer/result"];
  var eq = function (t) {
    function e(e) {
      if (e == null) {
        return eX();
      } else if (eW(e) && !R(e)) {
        return e;
      } else {
        return eX().withMutations(function (n) {
          var r = t(e);
          tJ(r.size);
          r.forEach(function (t) {
            return n.add(t);
          });
        });
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.of = function () {
      return this(arguments);
    };
    e.fromKeys = function (t) {
      return this(U(t).keySeq());
    };
    e.intersect = function (t) {
      if ((t = j(t).toArray()).length) {
        return eY.intersect.apply(e(t.pop()), t);
      } else {
        return eX();
      }
    };
    e.union = function (t) {
      if ((t = j(t).toArray()).length) {
        return eY.union.apply(e(t.pop()), t);
      } else {
        return eX();
      }
    };
    e.prototype.toString = function () {
      return this.__toString("Set {", "}");
    };
    e.prototype.has = function (t) {
      return this._map.has(t);
    };
    e.prototype.add = function (t) {
      return eK(this, this._map.set(t, true));
    };
    e.prototype.remove = function (t) {
      return eK(this, this._map.remove(t));
    };
    e.prototype.clear = function () {
      return eK(this, this._map.clear());
    };
    e.prototype.union = function () {
      var e = [];
      var n = arguments.length;
      while (n--) {
        e[n] = arguments[n];
      }
      if ((e = e.filter(function (t) {
        return t.size !== 0;
      })).length === 0) {
        return this;
      } else if (this.size !== 0 || this.__ownerID || e.length !== 1) {
        return this.withMutations(function (n) {
          for (var r = 0; r < e.length; r++) {
            t(e[r]).forEach(function (t) {
              return n.add(t);
            });
          }
        });
      } else {
        return this.constructor(e[0]);
      }
    };
    e.prototype.intersect = function () {
      var e = [];
      var n = arguments.length;
      while (n--) {
        e[n] = arguments[n];
      }
      if (e.length === 0) {
        return this;
      }
      e = e.map(function (e) {
        return t(e);
      });
      var r = [];
      this.forEach(function (t) {
        if (!e.every(function (e) {
          return e.includes(t);
        })) {
          r.push(t);
        }
      });
      return this.withMutations(function (t) {
        r.forEach(function (e) {
          t.remove(e);
        });
      });
    };
    e.prototype.subtract = function () {
      var t = [];
      var e = arguments.length;
      while (e--) {
        t[e] = arguments[e];
      }
      if (t.length === 0) {
        return this;
      }
      var n = [];
      this.forEach(function (e) {
        if (t.some(function (t) {
          return t.includes(e);
        })) {
          n.push(e);
        }
      });
      return this.withMutations(function (t) {
        n.forEach(function (e) {
          t.remove(e);
        });
      });
    };
    e.prototype.merge = function () {
      return this.union.apply(this, arguments);
    };
    e.prototype.mergeWith = function (t) {
      var e = [];
      var n = arguments.length - 1;
      while (n-- > 0) {
        e[n] = arguments[n + 1];
      }
      return this.union.apply(this, e);
    };
    e.prototype.sort = function (t) {
      return nn(tU(this, t));
    };
    e.prototype.sortBy = function (t, e) {
      return nn(tU(this, e, t));
    };
    e.prototype.wasAltered = function () {
      return this._map.wasAltered();
    };
    e.prototype.__iterate = function (t, e) {
      var n = this;
      return this._map.__iterate(function (e, r) {
        return t(r, r, n);
      }, e);
    };
    e.prototype.__iterator = function (t, e) {
      return this._map.map(function (t, e) {
        return e;
      }).__iterator(t, e);
    };
    e.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) {
        return this;
      }
      var e = this._map.__ensureOwner(t);
      if (t) {
        return this.__make(e, t);
      } else if (this.size === 0) {
        return eX();
      } else {
        this.__ownerID = t;
        this._map = e;
        return this;
      }
    };
    return e;
  }(H);
  function eW(t) {
    return !!t && !!t[eG];
  }
  eq.isSet = eW;
  var eG = "@@__IMMUTABLE_SET__@@";
  var eY = eq.prototype;
  function eK(t, e) {
    if (t.__ownerID) {
      t.size = e.size;
      t._map = e;
      return t;
    } else if (e === t._map) {
      return t;
    } else if (e.size === 0) {
      return t.__empty();
    } else {
      return t.__make(e);
    }
  }
  function e$(t, e) {
    var n = Object.create(eY);
    n.size = t ? t.size : 0;
    n._map = t;
    n.__ownerID = e;
    return n;
  }
  function eX() {
    return c ||= e$(er());
  }
  eY[eG] = true;
  eY[f] = eY.remove;
  eY.mergeDeep = eY.merge;
  eY.mergeDeepWith = eY.mergeWith;
  eY.withMutations = t3.withMutations;
  eY.asMutable = t3.asMutable;
  eY.asImmutable = t3.asImmutable;
  eY["@@transducer/init"] = eY.asMutable;
  eY["@@transducer/step"] = function (t, e) {
    return t.add(e);
  };
  eY["@@transducer/result"] = t3["@@transducer/result"];
  eY.__empty = eX;
  eY.__make = e$;
  var eJ = function (t) {
    function e(t, n, r) {
      if (!(this instanceof e)) {
        return new e(t, n, r);
      }
      tX(r !== 0, "Cannot step a Range by 0");
      t = t || 0;
      if (n === undefined) {
        n = Infinity;
      }
      r = r === undefined ? 1 : Math.abs(r);
      if (n < t) {
        r = -r;
      }
      this._start = t;
      this._end = n;
      this._step = r;
      this.size = Math.max(0, Math.ceil((n - t) / r - 1) + 1);
      if (this.size === 0) {
        if (l) {
          return l;
        }
        l = this;
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.toString = function () {
      if (this.size === 0) {
        return "Range []";
      } else {
        return "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
      }
    };
    e.prototype.get = function (t, e) {
      if (this.has(t)) {
        return this._start + w(this, t) * this._step;
      } else {
        return e;
      }
    };
    e.prototype.includes = function (t) {
      var e = (t - this._start) / this._step;
      return e >= 0 && e < this.size && e === Math.floor(e);
    };
    e.prototype.slice = function (t, n) {
      var r;
      if (T(t, n, this.size)) {
        return this;
      } else {
        t = I(t, this.size, 0);
        if ((n = I(n, r = this.size, r)) <= t) {
          return new e(0, 0);
        } else {
          return new e(this.get(t, this._end), this.get(n, this._end), this._step);
        }
      }
    };
    e.prototype.indexOf = function (t) {
      var e = t - this._start;
      if (e % this._step == 0) {
        var n = e / this._step;
        if (n >= 0 && n < this.size) {
          return n;
        }
      }
      return -1;
    };
    e.prototype.lastIndexOf = function (t) {
      return this.indexOf(t);
    };
    e.prototype.__iterate = function (t, e) {
      var n = this.size;
      var r = this._step;
      var i = e ? this._start + (n - 1) * r : this._start;
      var o = 0;
      while (o !== n && t(i, e ? n - ++o : o++, this) !== false) {
        i += e ? -r : r;
      }
      return o;
    };
    e.prototype.__iterator = function (t, e) {
      var n = this.size;
      var r = this._step;
      var i = e ? this._start + (n - 1) * r : this._start;
      var o = 0;
      return new W(function () {
        if (o === n) {
          return Y();
        }
        var s = i;
        i += e ? -r : r;
        return G(t, e ? n - ++o : o++, s);
      });
    };
    e.prototype.equals = function (t) {
      if (t instanceof e) {
        return this._start === t._start && this._end === t._end && this._step === t._step;
      } else {
        return eV(this, t);
      }
    };
    return e;
  }(te);
  j.isIterable = C;
  j.isKeyed = M;
  j.isIndexed = k;
  j.isAssociative = O;
  j.isOrdered = R;
  j.Iterator = W;
  eZ(j, {
    toArray: function () {
      tJ(this.size);
      var t = Array(this.size || 0);
      this.valueSeq().__iterate(function (e, n) {
        t[n] = e;
      });
      return t;
    },
    toIndexedSeq: function () {
      return new tO(this);
    },
    toJS: function () {
      return this.toSeq().map(e4).toJSON();
    },
    toKeyedSeq: function () {
      return new tk(this, true);
    },
    toMap: function () {
      return t0(this.toKeyedSeq());
    },
    toObject: function () {
      tJ(this.size);
      var t = {};
      this.__iterate(function (e, n) {
        t[n] = e;
      });
      return t;
    },
    toOrderedMap: function () {
      return eD(this.toKeyedSeq());
    },
    toOrderedSet: function () {
      return nn(M(this) ? this.valueSeq() : this);
    },
    toSet: function () {
      return eq(M(this) ? this.valueSeq() : this);
    },
    toSetSeq: function () {
      return new tR(this);
    },
    toSeq: function () {
      if (k(this)) {
        return this.toIndexedSeq();
      } else if (M(this)) {
        return this.toKeyedSeq();
      } else {
        return this.toSetSeq();
      }
    },
    toStack: function () {
      return eL(M(this) ? this.valueSeq() : this);
    },
    toList: function () {
      return eg(M(this) ? this.valueSeq() : this);
    },
    toString: function () {
      return "[Collection]";
    },
    __toString: function (t, e) {
      if (this.size === 0) {
        return t + e;
      } else {
        return t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e;
      }
    },
    concat: function () {
      var t = [];
      var e = arguments.length;
      while (e--) {
        t[e] = arguments[e];
      }
      return tZ(this, function (t, e) {
        var n = M(t);
        var r = [t].concat(e).map(function (t) {
          if (C(t)) {
            if (n) {
              t = U(t);
            }
          } else {
            t = n ? tl(t) : tp(Array.isArray(t) ? t : [t]);
          }
          return t;
        }).filter(function (t) {
          return t.size !== 0;
        });
        if (r.length === 0) {
          return t;
        }
        if (r.length === 1) {
          var i = r[0];
          if (i === t || n && M(i) || k(t) && k(i)) {
            return i;
          }
        }
        var o = new ti(r);
        if (n) {
          o = o.toKeyedSeq();
        } else if (!k(t)) {
          o = o.toSetSeq();
        }
        (o = o.flatten(true)).size = r.reduce(function (t, e) {
          if (t !== undefined) {
            var n = e.size;
            if (n !== undefined) {
              return t + n;
            }
          }
        }, 0);
        return o;
      }(this, t));
    },
    includes: function (t) {
      return this.some(function (e) {
        return tf(e, t);
      });
    },
    entries: function () {
      return this.__iterator(2);
    },
    every: function (t, e) {
      tJ(this.size);
      var n = true;
      this.__iterate(function (r, i, o) {
        if (!t.call(e, r, i, o)) {
          n = false;
          return false;
        }
      });
      return n;
    },
    filter: function (t, e) {
      return tZ(this, tB(this, t, e, true));
    },
    find: function (t, e, n) {
      var r = this.findEntry(t, e);
      if (r) {
        return r[1];
      } else {
        return n;
      }
    },
    forEach: function (t, e) {
      tJ(this.size);
      return this.__iterate(e ? t.bind(e) : t);
    },
    join: function (t) {
      tJ(this.size);
      t = t !== undefined ? "" + t : ",";
      var e = "";
      var n = true;
      this.__iterate(function (r) {
        if (n) {
          n = false;
        } else {
          e += t;
        }
        e += r != null ? r.toString() : "";
      });
      return e;
    },
    keys: function () {
      return this.__iterator(0);
    },
    map: function (t, e) {
      return tZ(this, tx(this, t, e));
    },
    reduce: function (t, e, n) {
      return e2(this, t, e, n, arguments.length < 2, false);
    },
    reduceRight: function (t, e, n) {
      return e2(this, t, e, n, arguments.length < 2, true);
    },
    reverse: function () {
      return tZ(this, tP(this, true));
    },
    slice: function (t, e) {
      return tZ(this, tL(this, t, e, true));
    },
    some: function (t, e) {
      return !this.every(e5(t), e);
    },
    sort: function (t) {
      return tZ(this, tU(this, t));
    },
    values: function () {
      return this.__iterator(1);
    },
    butLast: function () {
      return this.slice(0, -1);
    },
    isEmpty: function () {
      if (this.size !== undefined) {
        return this.size === 0;
      } else {
        return !this.some(function () {
          return true;
        });
      }
    },
    count: function (t, e) {
      return E(t ? this.toSeq().filter(t, e) : this);
    },
    countBy: function (t, e) {
      var n;
      var r;
      n = this;
      r = t0().asMutable();
      n.__iterate(function (i, o) {
        r.update(t.call(e, i, o, n), 0, function (t) {
          return t + 1;
        });
      });
      return r.asImmutable();
    },
    equals: function (t) {
      return eV(this, t);
    },
    entrySeq: function () {
      var t = this;
      if (t._cache) {
        return new ti(t._cache);
      }
      var e = t.toSeq().map(e6).toIndexedSeq();
      e.fromEntrySeq = function () {
        return t.toSeq();
      };
      e.toJS = function () {
        return this.map(function (t) {
          return [e4(t[0]), e4(t[1])];
        }).toJSON();
      };
      return e;
    },
    filterNot: function (t, e) {
      return this.filter(e5(t), e);
    },
    findEntry: function (t, e, n) {
      var r = n;
      this.__iterate(function (n, i, o) {
        if (t.call(e, n, i, o)) {
          r = [i, n];
          return false;
        }
      });
      return r;
    },
    findKey: function (t, e) {
      var n = this.findEntry(t, e);
      return n && n[0];
    },
    findLast: function (t, e, n) {
      return this.toKeyedSeq().reverse().find(t, e, n);
    },
    findLastEntry: function (t, e, n) {
      return this.toKeyedSeq().reverse().findEntry(t, e, n);
    },
    findLastKey: function (t, e) {
      return this.toKeyedSeq().reverse().findKey(t, e);
    },
    first: function () {
      return this.find(S);
    },
    flatMap: function (t, e) {
      var n;
      var r;
      return tZ(this, (n = this, r = tW(n), n.toSeq().map(function (i, o) {
        return r(t.call(e, i, o, n));
      }).flatten(true)));
    },
    flatten: function (t) {
      return tZ(this, tj(this, t, true));
    },
    fromEntrySeq: function () {
      return new tD(this);
    },
    get: function (t, e) {
      return this.find(function (e, n) {
        return tf(n, t);
      }, undefined, e);
    },
    getIn: function (t, e) {
      return ne(this, e, t, true);
    },
    groupBy: function (t, e) {
      return function (t, e, n) {
        var r = M(t);
        var i = (R(t) ? eD() : t0()).asMutable();
        t.__iterate(function (o, s) {
          i.update(e.call(n, o, s, t), function (t) {
            (t = t || []).push(r ? [s, o] : o);
            return t;
          });
        });
        var o = tW(t);
        return i.map(function (e) {
          return tZ(t, o(e));
        });
      }(this, t, e);
    },
    has: function (t) {
      return this.get(t, d) !== d;
    },
    hasIn: function (t) {
      return ne(this, d, t, false) !== d;
    },
    isSubset: function (t) {
      t = typeof t.includes == "function" ? t : j(t);
      return this.every(function (e) {
        return t.includes(e);
      });
    },
    isSuperset: function (t) {
      return (t = typeof t.isSubset == "function" ? t : j(t)).isSubset(this);
    },
    keyOf: function (t) {
      return this.findKey(function (e) {
        return tf(e, t);
      });
    },
    keySeq: function () {
      return this.toSeq().map(e3).toIndexedSeq();
    },
    last: function () {
      return this.toSeq().reverse().first();
    },
    lastKeyOf: function (t) {
      return this.toKeyedSeq().reverse().keyOf(t);
    },
    max: function (t) {
      return tz(this, t);
    },
    maxBy: function (t, e) {
      return tz(this, e, t);
    },
    min: function (t) {
      return tz(this, t ? e8(t) : e7);
    },
    minBy: function (t, e) {
      return tz(this, e ? e8(e) : e7, t);
    },
    rest: function () {
      return this.slice(1);
    },
    skip: function (t) {
      if (t === 0) {
        return this;
      } else {
        return this.slice(Math.max(0, t));
      }
    },
    skipLast: function (t) {
      if (t === 0) {
        return this;
      } else {
        return this.slice(0, -Math.max(0, t));
      }
    },
    skipWhile: function (t, e) {
      return tZ(this, tF(this, t, e, true));
    },
    skipUntil: function (t, e) {
      return this.skipWhile(e5(t), e);
    },
    sortBy: function (t, e) {
      return tZ(this, tU(this, e, t));
    },
    take: function (t) {
      return this.slice(0, Math.max(0, t));
    },
    takeLast: function (t) {
      return this.slice(-Math.max(0, t));
    },
    takeWhile: function (t, e) {
      var n;
      var r;
      return tZ(this, (n = this, (r = tG(n)).__iterateUncached = function (r, i) {
        var o = this;
        if (i) {
          return this.cacheResult().__iterate(r, i);
        }
        var s = 0;
        n.__iterate(function (n, i, a) {
          return t.call(e, n, i, a) && ++s && r(n, i, o);
        });
        return s;
      }, r.__iteratorUncached = function (r, i) {
        var o = this;
        if (i) {
          return this.cacheResult().__iterator(r, i);
        }
        var s = n.__iterator(2, i);
        var a = true;
        return new W(function () {
          if (!a) {
            return Y();
          }
          var n = s.next();
          if (n.done) {
            return n;
          }
          var i = n.value;
          var u = i[0];
          var c = i[1];
          if (t.call(e, c, u, o)) {
            if (r === 2) {
              return n;
            } else {
              return G(r, u, c, n);
            }
          } else {
            a = false;
            return Y();
          }
        });
      }, r));
    },
    takeUntil: function (t, e) {
      return this.takeWhile(e5(t), e);
    },
    update: function (t) {
      return t(this);
    },
    valueSeq: function () {
      return this.toIndexedSeq();
    },
    hashCode: function () {
      return this.__hash ||= function (t) {
        if (t.size === Infinity) {
          return 0;
        }
        var e;
        var n;
        var r = R(t);
        var i = M(t);
        var o = +!!r;
        e = t.__iterate(i ? r ? function (t, e) {
          o = o * 31 + nt(t_(t), t_(e)) | 0;
        } : function (t, e) {
          o = o + nt(t_(t), t_(e)) | 0;
        } : r ? function (t) {
          o = o * 31 + t_(t) | 0;
        } : function (t) {
          o = o + t_(t) | 0;
        });
        n = ty(n = o, 3432918353);
        n = ty(n << 15 | n >>> -15, 461845907);
        n = ((n = ty(n << 13 | n >>> -13, 5)) + 3864292196 | 0) ^ e;
        n = ty(n ^ n >>> 16, 2246822507);
        return n = tg((n = ty(n ^ n >>> 13, 3266489909)) ^ n >>> 16);
      }(this);
    }
  });
  var eQ = j.prototype;
  eQ[x] = true;
  eQ[q] = eQ.values;
  eQ.toJSON = eQ.toArray;
  eQ.__toStringMapper = tQ;
  eQ.inspect = eQ.toSource = function () {
    return this.toString();
  };
  eQ.chain = eQ.flatMap;
  eQ.contains = eQ.includes;
  eZ(U, {
    flip: function () {
      return tZ(this, tN(this));
    },
    mapEntries: function (t, e) {
      var n = this;
      var r = 0;
      return tZ(this, this.toSeq().map(function (i, o) {
        return t.call(e, [o, i], r++, n);
      }).fromEntrySeq());
    },
    mapKeys: function (t, e) {
      var n = this;
      return tZ(this, this.toSeq().flip().map(function (r, i) {
        return t.call(e, r, i, n);
      }).flip());
    }
  });
  var e0 = U.prototype;
  e0[P] = true;
  e0[q] = eQ.entries;
  e0.toJSON = eQ.toObject;
  e0.__toStringMapper = function (t, e) {
    return tQ(e) + ": " + tQ(t);
  };
  eZ(z, {
    toKeyedSeq: function () {
      return new tk(this, false);
    },
    filter: function (t, e) {
      return tZ(this, tB(this, t, e, false));
    },
    findIndex: function (t, e) {
      var n = this.findEntry(t, e);
      if (n) {
        return n[0];
      } else {
        return -1;
      }
    },
    indexOf: function (t) {
      var e = this.keyOf(t);
      if (e === undefined) {
        return -1;
      } else {
        return e;
      }
    },
    lastIndexOf: function (t) {
      var e = this.lastKeyOf(t);
      if (e === undefined) {
        return -1;
      } else {
        return e;
      }
    },
    reverse: function () {
      return tZ(this, tP(this, false));
    },
    slice: function (t, e) {
      return tZ(this, tL(this, t, e, false));
    },
    splice: function (t, e) {
      var n = arguments.length;
      e = Math.max(e || 0, 0);
      if (n === 0 || n === 2 && !e) {
        return this;
      }
      t = I(t, t < 0 ? this.count() : this.size, 0);
      var r = this.slice(0, t);
      return tZ(this, n === 1 ? r : r.concat(b(arguments, 2), this.slice(t + e)));
    },
    findLastIndex: function (t, e) {
      var n = this.findLastEntry(t, e);
      if (n) {
        return n[0];
      } else {
        return -1;
      }
    },
    first: function () {
      return this.get(0);
    },
    flatten: function (t) {
      return tZ(this, tj(this, t, false));
    },
    get: function (t, e) {
      if ((t = w(this, t)) < 0 || this.size === Infinity || this.size !== undefined && t > this.size) {
        return e;
      } else {
        return this.find(function (e, n) {
          return n === t;
        }, undefined, e);
      }
    },
    has: function (t) {
      return (t = w(this, t)) >= 0 && (this.size !== undefined ? this.size === Infinity || t < this.size : this.indexOf(t) !== -1);
    },
    interpose: function (t) {
      var e;
      var n;
      return tZ(this, (e = this, (n = tG(e)).size = e.size && e.size * 2 - 1, n.__iterateUncached = function (n, r) {
        var i = this;
        var o = 0;
        e.__iterate(function (e) {
          return (!o || n(t, o++, i) !== false) && n(e, o++, i) !== false;
        }, r);
        return o;
      }, n.__iteratorUncached = function (n, r) {
        var i;
        var o = e.__iterator(1, r);
        var s = 0;
        return new W(function () {
          if ((!i || s % 2) && (i = o.next()).done) {
            return i;
          } else if (s % 2) {
            return G(n, s++, t);
          } else {
            return G(n, s++, i.value, i);
          }
        });
      }, n));
    },
    interleave: function () {
      var t = [this].concat(b(arguments));
      var e = tV(this.toSeq(), te.of, t);
      var n = e.flatten(true);
      if (e.size) {
        n.size = e.size * t.length;
      }
      return tZ(this, n);
    },
    keySeq: function () {
      return eJ(0, this.size);
    },
    last: function () {
      return this.get(-1);
    },
    skipWhile: function (t, e) {
      return tZ(this, tF(this, t, e, false));
    },
    zip: function () {
      var t = [this].concat(b(arguments));
      return tZ(this, tV(this, e9, t));
    },
    zipAll: function () {
      var t = [this].concat(b(arguments));
      return tZ(this, tV(this, e9, t, true));
    },
    zipWith: function (t) {
      var e = b(arguments);
      e[0] = this;
      return tZ(this, tV(this, t, e));
    }
  });
  var e1 = z.prototype;
  function e2(t, e, n, r, i, o) {
    tJ(t.size);
    t.__iterate(function (t, o, s) {
      if (i) {
        i = false;
        n = t;
      } else {
        n = e.call(r, n, t, o, s);
      }
    }, o);
    return n;
  }
  function e3(t, e) {
    return e;
  }
  function e6(t, e) {
    return [e, t];
  }
  function e4(t) {
    if (t && typeof t.toJS == "function") {
      return t.toJS();
    } else {
      return t;
    }
  }
  function e5(t) {
    return function () {
      return !t.apply(this, arguments);
    };
  }
  function e8(t) {
    return function () {
      return -t.apply(this, arguments);
    };
  }
  function e9() {
    return b(arguments);
  }
  function e7(t, e) {
    if (t < e) {
      return 1;
    } else if (t > e) {
      return -1;
    } else {
      return 0;
    }
  }
  function nt(t, e) {
    return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0;
  }
  function ne(t, e, n, r) {
    var i = t$(n);
    var o = 0;
    while (o !== i.length) {
      if (!t || !t.get) {
        if (r) {
          (function (t) {
            if (typeof console == "object" && console.warn) ;else {
              throw Error(t);
            }
          })("Invalid keyPath: Value at [" + i.slice(0, o).map(tQ) + "] does not have a .get() method: " + t + "\nThis warning will throw in a future version");
        }
        return e;
      }
      if ((t = t.get(i[o++], d)) === d) {
        return e;
      }
    }
    return t;
  }
  e1[B] = true;
  e1[L] = true;
  eZ(H, {
    get: function (t, e) {
      if (this.has(t)) {
        return t;
      } else {
        return e;
      }
    },
    includes: function (t) {
      return this.has(t);
    },
    keySeq: function () {
      return this.valueSeq();
    }
  });
  H.prototype.has = eQ.includes;
  H.prototype.contains = H.prototype.includes;
  eZ(tt, U.prototype);
  eZ(te, z.prototype);
  eZ(tn, H.prototype);
  var nn = function (t) {
    function e(t) {
      if (t == null) {
        return ns();
      } else if (nr(t)) {
        return t;
      } else {
        return ns().withMutations(function (e) {
          var n = H(t);
          tJ(n.size);
          n.forEach(function (t) {
            return e.add(t);
          });
        });
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.of = function () {
      return this(arguments);
    };
    e.fromKeys = function (t) {
      return this(U(t).keySeq());
    };
    e.prototype.toString = function () {
      return this.__toString("OrderedSet {", "}");
    };
    return e;
  }(eq);
  function nr(t) {
    return eW(t) && R(t);
  }
  nn.isOrderedSet = nr;
  var ni = nn.prototype;
  function no(t, e) {
    var n = Object.create(ni);
    n.size = t ? t.size : 0;
    n._map = t;
    n.__ownerID = e;
    return n;
  }
  function ns() {
    return p ||= no(eP());
  }
  ni[L] = true;
  ni.zip = e1.zip;
  ni.zipWith = e1.zipWith;
  ni.__empty = ns;
  ni.__make = no;
  function na(t, e) {
    var n;
    function r(o) {
      var s = this;
      if (o instanceof r) {
        return o;
      }
      if (!(this instanceof r)) {
        return new r(o);
      }
      if (!n) {
        n = true;
        var a = Object.keys(t);
        var u = i._indices = {};
        i._name = e;
        i._keys = a;
        i._defaultValues = t;
        for (var c = 0; c < a.length; c++) {
          var l = a[c];
          u[l] = c;
          if (!i[l]) {
            (function (t, e) {
              try {
                Object.defineProperty(t, e, {
                  get: function () {
                    return this.get(e);
                  },
                  set: function (t) {
                    tX(this.__ownerID, "Cannot set on an immutable record.");
                    this.set(e, t);
                  }
                });
              } catch (t) {}
            })(i, l);
          }
        }
      }
      this.__ownerID = undefined;
      this._values = eg().withMutations(function (t) {
        t.setSize(s._keys.length);
        U(o).forEach(function (e, n) {
          t.set(s._indices[n], e === s._defaultValues[n] ? undefined : e);
        });
      });
    }
    var i = r.prototype = Object.create(nu);
    i.constructor = r;
    return r;
  }
  na.prototype.toString = function () {
    var t;
    var e = nl(this) + " { ";
    var n = this._keys;
    var r = 0;
    var i = n.length;
    for (; r !== i; r++) {
      t = n[r];
      e += (r ? ", " : "") + t + ": " + tQ(this.get(t));
    }
    return e + " }";
  };
  na.prototype.equals = function (t) {
    return this === t || t && this._keys === t._keys && np(this).equals(np(t));
  };
  na.prototype.hashCode = function () {
    return np(this).hashCode();
  };
  na.prototype.has = function (t) {
    return this._indices.hasOwnProperty(t);
  };
  na.prototype.get = function (t, e) {
    if (!this.has(t)) {
      return e;
    }
    var n = this._indices[t];
    var r = this._values.get(n);
    if (r === undefined) {
      return this._defaultValues[t];
    } else {
      return r;
    }
  };
  na.prototype.set = function (t, e) {
    if (this.has(t)) {
      var n = this._values.set(this._indices[t], e === this._defaultValues[t] ? undefined : e);
      if (n !== this._values && !this.__ownerID) {
        return nc(this, n);
      }
    }
    return this;
  };
  na.prototype.remove = function (t) {
    return this.set(t);
  };
  na.prototype.clear = function () {
    var t = this._values.clear().setSize(this._keys.length);
    if (this.__ownerID) {
      return this;
    } else {
      return nc(this, t);
    }
  };
  na.prototype.wasAltered = function () {
    return this._values.wasAltered();
  };
  na.prototype.toSeq = function () {
    return np(this);
  };
  na.prototype.toJS = function () {
    return np(this).toJS();
  };
  na.prototype.__iterator = function (t, e) {
    return np(this).__iterator(t, e);
  };
  na.prototype.__iterate = function (t, e) {
    return np(this).__iterate(t, e);
  };
  na.prototype.__ensureOwner = function (t) {
    if (t === this.__ownerID) {
      return this;
    }
    var e = this._values.__ensureOwner(t);
    if (t) {
      return nc(this, e, t);
    } else {
      this.__ownerID = t;
      this._values = e;
      return this;
    }
  };
  na.isRecord = D;
  na.getDescriptiveName = nl;
  var nu = na.prototype;
  function nc(t, e, n) {
    var r = Object.create(Object.getPrototypeOf(t));
    r._values = e;
    r.__ownerID = n;
    return r;
  }
  function nl(t) {
    return t._name || t.constructor.name || "Record";
  }
  function np(t) {
    return tl(t._keys.map(function (e) {
      return [e, t.get(e)];
    }));
  }
  nu[F] = true;
  nu[f] = nu.remove;
  nu.deleteIn = nu.removeIn = t3.removeIn;
  nu.getIn = eQ.getIn;
  nu.hasIn = eQ.hasIn;
  nu.merge = t3.merge;
  nu.mergeWith = t3.mergeWith;
  nu.mergeIn = t3.mergeIn;
  nu.mergeDeep = t3.mergeDeep;
  nu.mergeDeepWith = t3.mergeDeepWith;
  nu.mergeDeepIn = t3.mergeDeepIn;
  nu.setIn = t3.setIn;
  nu.update = t3.update;
  nu.updateIn = t3.updateIn;
  nu.withMutations = t3.withMutations;
  nu.asMutable = t3.asMutable;
  nu.asImmutable = t3.asImmutable;
  nu[q] = eQ.entries;
  nu.toJSON = nu.toObject = eQ.toObject;
  nu.inspect = nu.toSource = eQ.toSource;
  var nh = function (t) {
    function e(t, n) {
      if (!(this instanceof e)) {
        return new e(t, n);
      }
      this._value = t;
      this.size = n === undefined ? Infinity : Math.max(0, n);
      if (this.size === 0) {
        if (h) {
          return h;
        }
        h = this;
      }
    }
    if (t) {
      e.__proto__ = t;
    }
    e.prototype = Object.create(t && t.prototype);
    e.prototype.constructor = e;
    e.prototype.toString = function () {
      if (this.size === 0) {
        return "Repeat []";
      } else {
        return "Repeat [ " + this._value + " " + this.size + " times ]";
      }
    };
    e.prototype.get = function (t, e) {
      if (this.has(t)) {
        return this._value;
      } else {
        return e;
      }
    };
    e.prototype.includes = function (t) {
      return tf(this._value, t);
    };
    e.prototype.slice = function (t, n) {
      var r = this.size;
      if (T(t, n, r)) {
        return this;
      } else {
        return new e(this._value, I(n, r, r) - I(t, r, 0));
      }
    };
    e.prototype.reverse = function () {
      return this;
    };
    e.prototype.indexOf = function (t) {
      if (tf(this._value, t)) {
        return 0;
      } else {
        return -1;
      }
    };
    e.prototype.lastIndexOf = function (t) {
      if (tf(this._value, t)) {
        return this.size;
      } else {
        return -1;
      }
    };
    e.prototype.__iterate = function (t, e) {
      var n = this.size;
      var r = 0;
      while (r !== n && t(this._value, e ? n - ++r : r++, this) !== false);
      return r;
    };
    e.prototype.__iterator = function (t, e) {
      var n = this;
      var r = this.size;
      var i = 0;
      return new W(function () {
        if (i === r) {
          return Y();
        } else {
          return G(t, e ? r - ++i : i++, n._value);
        }
      });
    };
    e.prototype.equals = function (t) {
      if (t instanceof e) {
        return tf(this._value, t._value);
      } else {
        return eV(t);
      }
    };
    return e;
  }(te);
  exports.Immutable = {
    Collection: j,
    Iterable: j,
    Seq: Q,
    Map: t0,
    OrderedMap: eD,
    List: eg,
    Stack: eL,
    Set: eq,
    OrderedSet: nn,
    Record: na,
    Range: eJ,
    Repeat: nh,
    is: tf,
    fromJS: td,
    hash: t_,
    isImmutable: function (t) {
      return (C(t) || D(t)) && !t.__ownerID;
    },
    isCollection: C,
    isKeyed: M,
    isIndexed: k,
    isAssociative: O,
    isOrdered: R,
    isValueObject: N
  };
  require.d(exports, {
    Map: function () {
      return t0;
    },
    Record: function () {
      return na;
    },
    List: function () {
      return eg;
    },
    is: function () {
      return tf;
    },
    OrderedMap: function () {
      return eD;
    }
  });
}