// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 771714
         */
module.exports = function (module, exports, require) {
  var Q = this && this.__assign || function () {
    return (Q = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  var r = this && this.__read || function (t, e) {
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
  var T = this && this.__spreadArray || function (t, e, Q) {
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
  var n = this && this.__values || function (t) {
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
  exports.LiteElement = undefined;
  exports.LiteElement = function (t, e, o) {
    var i;
    var a;
    if (e === undefined) {
      e = {};
    }
    if (o === undefined) {
      o = [];
    }
    this.kind = t;
    this.attributes = Q({}, e);
    this.children = T([], r(o), false);
    try {
      var u = n(this.children);
      var s = u.next();
      for (; !s.done; s = u.next()) {
        s.value.parent = this;
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (s && !s.done && (a = u.return)) {
          a.call(u);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    this.styles = null;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}