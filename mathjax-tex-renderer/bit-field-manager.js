// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 347387
         */
module.exports = function (module, exports, require) {
  var Q;
  var r = this && this.__extends || (Q = function (t, e) {
    return (Q = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function r() {
      this.constructor = t;
    }
    Q(t, e);
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
  });
  var T = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var n = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var o = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.BitFieldClass = exports.BitField = undefined;
  var i = function () {
    function t() {
      this.bits = 0;
    }
    t.allocate = function () {
      var e;
      var Q;
      var r = [];
      var n = 0;
      for (; n < arguments.length; n++) {
        r[n] = arguments[n];
      }
      try {
        var o = T(r);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          if (this.has(a)) {
            throw Error("Bit already allocated for " + a);
          }
          if (this.next === t.MAXBIT) {
            throw Error("Maximum number of bits already allocated");
          }
          this.names.set(a, this.next);
          this.next <<= 1;
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (Q = o.return)) {
            Q.call(o);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t.has = function (t) {
      return this.names.has(t);
    };
    t.prototype.set = function (t) {
      this.bits |= this.getBit(t);
    };
    t.prototype.clear = function (t) {
      this.bits &= ~this.getBit(t);
    };
    t.prototype.isSet = function (t) {
      return !!(this.bits & this.getBit(t));
    };
    t.prototype.reset = function () {
      this.bits = 0;
    };
    t.prototype.getBit = function (t) {
      var e = this.constructor.names.get(t);
      if (!e) {
        throw Error("Unknown bit-field name: " + t);
      }
      return e;
    };
    t.MAXBIT = -2147483648;
    t.next = 1;
    t.names = new Map();
    return t;
  }();
  exports.BitField = i;
  exports.BitFieldClass = function () {
    var t = [];
    var e = 0;
    for (; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    var Q = function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      return e;
    }(i);
    Q.allocate.apply(Q, o([], n(t), false));
    return Q;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}